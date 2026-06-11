describe('Test API Categories fakeapi platzi', () => {
     const baseUrl = 'https://api.escuelajs.co/api/v1/categories'
     let id;
    it ('TC-Categories-001 - get list categories', () => {

       cy.request('GET', baseUrl)
       .then((response)=>{
        expect(response.status).to.eq(200)
        expect(response.body).to.be.an('array')
       })
    })

    
     it ('TC-Categories-002 - get list category not empty', () => {

       cy.request('GET', baseUrl)
       .then((response)=>{
        expect(response.status).to.eq(200)
        expect(response.body.length).to.be.greaterThan(0)
       })
    })

     it ('TC-Categories-003 - get list category has field ID', () => {

       cy.request('GET', baseUrl)
       .then((response)=>{
        expect(response.status).to.eq(200)
        expect(response.body[0]).to.have.property('id')
       })
    })

    it ('TC-Categories-004 - get detail category by id', () => {

       cy.request('GET', baseUrl+'/'+1)
       .then((response)=>{
        expect(response.status).to.eq(200)
        expect(response.body.id).to.eq(1)
       })
    })

     it ('TC-Categories-005 - get detail category not success', () => {

       cy.request({
            method: 'GET',
            url: baseUrl + '/1bc',
            failOnStatusCode: false
        })
       .then((response)=>{
        expect(response.status).to.eq(400)
        

       })
    })

    it ('TC-Categories-006 - create category success', () => {
        
        const bodyRequest = {
            "name": `Kicau Mania${Date.now()}`,
            "image": "https://placeimg.com/640/480/any"

        }
       cy.request({
            method: 'POST',
            url: baseUrl,
            body: bodyRequest
        })
       .then((response)=>{
        expect(response.status).to.eq(201)
        id = response.body.id
        expect(response.body).to.have.property('id')
        expect(response.body).to.have.property('name')
        expect(response.body).to.have.property('slug')
        expect(response.body).to.have.property('image')
        expect(response.body).to.have.property('creationAt')
        expect(response.body).to.have.property('updatedAt')

       })
    })

    it ('TC-Categories-007 - create category not success', () => {
        
        const bodyRequest = {
            "name": "",
            "image": "https://placeimg.com/640/480/any"

        }
       cy.request({
            method: 'POST',
            url: baseUrl,
            body: bodyRequest,
             failOnStatusCode: false
        })
       .then((response)=>{
        expect(response.status).to.eq(400)
        expect(response.body.statusCode).to.eq(400)

       })
    })

    it ('TC-Categories-008 - update category success', () => {
        
        const bodyRequest = {
            "name": `Kicau Mania${Date.now()}`

        }
       cy.request({
            method: 'PUT',
            url: baseUrl+'/'+2,
            body: bodyRequest
        })
       .then((response)=>{
        expect(response.status).to.eq(200)
        expect(response.body).to.have.property('id')
        expect(response.body.id).eq(2)
        expect(response.body).to.have.property('name')
        expect(response.body).to.have.property('slug')
        expect(response.body).to.have.property('image')
        expect(response.body).to.have.property('creationAt')
        expect(response.body).to.have.property('updatedAt')

       })
    })


    it ('TC-Categories-009 - update category not success', () => {
        
        const bodyRequest = {
            "name": `Kicau Mania${Date.now()}`

        }
       cy.request({
            method: 'PUT',
            url: baseUrl+'/2a',
            body: bodyRequest,
             failOnStatusCode: false
        })
       .then((response)=>{
        expect(response.status).to.eq(400)
         expect(response.body.statusCode).to.eq(400)

       })
    })

    it ('TC-Categories-010 - delete category by id', () => {

       cy.request({
            method: 'DELETE',
            url: baseUrl + '/'+id,
            failOnStatusCode: false
        })
       .then((response)=>{
        expect(response.status).to.eq(200)
        expect(response.body).to.eq("true")
        

       })
    })

    it ('TC-Categories-011 - delete category by id not success', () => {

       cy.request({
            method: 'DELETE',
            url: baseUrl + '/1b',
            failOnStatusCode: false
        })
       .then((response)=>{
        expect(response.status).to.eq(400)
        expect(response.body.statusCode).to.eq(400)
        

       })
    })

    it ('TC-Categories-012 - get product by category id success', () => {

       cy.request({
            method: 'GET',
            url: baseUrl + '/'+2+'/products',
            failOnStatusCode: false
        })
       .then((response)=>{
        expect(response.status).to.eq(200)
         expect(response.body).to.be.an('array')
         expect(response.body[0]).to.have.property('id')
          expect(response.body[0]).to.have.property('title')
           expect(response.body[0]).to.have.property('slug')
            expect(response.body[0]).to.have.property('price')
             expect(response.body[0]).to.have.property('description')
             expect(response.body[0]).to.have.property('category')
             expect(response.body[0]).to.have.property('images')
        

       })})

       it ('TC-Categories-013 - get product by category id not success', () => {

       cy.request({
            method: 'GET',
            url: baseUrl + '/'+'2a'+'/products',
            failOnStatusCode: false
        })
       .then((response)=>{
        expect(response.status).to.eq(400)
        expect(response.body.statusCode).to.eq(400)
        expect(response.body.error).to.eq("Bad Request")
        expect(response.body.message).to.eq("Validation failed (numeric string is expected)")
        
        

       })
    })
    


})