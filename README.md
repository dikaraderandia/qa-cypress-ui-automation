# qa-cypress-ui-automation
Automated test suite for OrangeHRM Login functionality using Cypress. This project covers positive and negative login scenarios, input validation, authentication verification, and assertion checks to ensure the login feature works as expected.

# OrangeHRM Login Automation Testing

This repository contains automated test scripts for the OrangeHRM Login feature using Cypress.

The automation test cases are created based on a manual test case document and cover positive, negative, validation, navigation, and authentication scenarios to ensure the login functionality works as expected.

---

## 🚀 Technology Stack

- Cypress
- JavaScript
- Node.js

---

## 📋 Test Coverage

| Test Case ID | Test Case Name | Category |
|-------------|----------------|----------|
| TC-LOGIN-001 | Login with Valid Username and Password | Positive |
| TC-LOGIN-002 | Login with Invalid Password | Negative |
| TC-LOGIN-003 | Login with Invalid Username | Negative |
| TC-LOGIN-004 | Login with Empty Username | Negative |
| TC-LOGIN-005 | Login with Empty Password | Negative |
| TC-LOGIN-006 | Login with Empty Username and Password | Negative |
| TC-LOGIN-007 | Verify Forgot Password Feature | Positive |
| TC-LOGIN-008 | Verify Unauthorized Dashboard Access | Negative |

---

## 🎯 Project Objectives

This project aims to:

- Validate the OrangeHRM login functionality.
- Verify user authentication and authorization behavior.
- Validate mandatory field requirements.
- Verify error handling for invalid credentials.
- Verify the Forgot Password navigation flow.
- Verify protection against unauthorized access.
- Demonstrate Cypress end-to-end automation testing practices.

---

## 📂 Project Structure

```text
orangehrm-login-automation
│
├── cypress
│   ├── e2e
│   │   └── login.cy.js
│   │
│   ├── fixtures
│   │
│   └── support
│       ├── commands.js
│       └── e2e.js
│
├── cypress.config.js
├── package.json
└── README.md
```

---

## ⚙️ Installation

Clone the repository:

```bash
git clone <repository-url>
```

Navigate to the project directory:

```bash
cd orangehrm-login-automation
```

Install dependencies:

```bash
npm install
```

---

## ▶️ Running the Tests

Open Cypress Test Runner:

```bash
npx cypress open
```

Run all tests in headless mode:

```bash
npx cypress run
```

Run only the login test suite:

```bash
npx cypress run --spec cypress/e2e/login.cy.js
```

---

## 🧪 Automated Test Scenarios

### TC-LOGIN-001 - Login with Valid Username and Password

**Expected Result**
- User successfully logs in.
- User is redirected to the Dashboard page.

### TC-LOGIN-002 - Login with Invalid Password

**Expected Result**
- Login attempt fails.
- User remains on the Login page.
- "Invalid credentials" message is displayed.

### TC-LOGIN-003 - Login with Invalid Username

**Expected Result**
- Login attempt fails.
- User remains on the Login page.
- "Invalid credentials" message is displayed.

### TC-LOGIN-004 - Login with Empty Username

**Expected Result**
- Login attempt fails.
- Username field displays "Required" validation message.

### TC-LOGIN-005 - Login with Empty Password

**Expected Result**
- Login attempt fails.
- Password field displays "Required" validation message.

### TC-LOGIN-006 - Login with Empty Username and Password

**Expected Result**
- Login attempt fails.
- Username field displays "Required" validation message.
- Password field displays "Required" validation message.

### TC-LOGIN-007 - Verify Forgot Password Feature

**Expected Result**
- User is redirected to the Reset Password page.

### TC-LOGIN-008 - Verify Unauthorized Dashboard Access

**Expected Result**
- User is redirected to the Login page when accessing the Dashboard URL without authentication.

---

## ✅ Assertions Used

The automation scripts include the following assertions:

- URL validation
- Page redirection validation
- Element visibility validation
- Error message validation
- Required field validation
- Authentication and authorization validation

---

## 📊 Expected Test Execution Result

```text
OrangeHRM Login Feature

✓ TC-LOGIN-001 - Login with Valid Username and Password
✓ TC-LOGIN-002 - Login with Invalid Password
✓ TC-LOGIN-003 - Login with Invalid Username
✓ TC-LOGIN-004 - Login with Empty Username
✓ TC-LOGIN-005 - Login with Empty Password
✓ TC-LOGIN-006 - Login with Empty Username and Password
✓ TC-LOGIN-007 - Verify Forgot Password Feature
✓ TC-LOGIN-008 - Verify Unauthorized Dashboard Access

8 passing
```

---

## 👨‍💻 Author

**Dikara Derandia**

QA Engineer | Manual Tester | Automation Tester

### Skills

### Skills

- Manual Testing
- Functional Testing
- Test Case Design
- Bug Reporting & Defect Tracking
- API Testing (Postman)
- Database Testing (MySQL/PostgreSql)
- Test Automation with Cypress
- Test Automation with Selenium WebDriver
- Test Framework: TestNG
- Java Programming
- SDLC & STLC
- Agile/Scrum Methodology
