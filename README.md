# Playwright Training Tests

Automation framework built with Playwright and TypeScript to demonstrate modern end-to-end, API, visual, accessibility, and component testing practices.

---

# Project Goals

This project demonstrates advanced Playwright capabilities including:

- UI automation
- API testing
- Visual regression testing
- Accessibility testing
- Component testing
- CI/CD integration
- Parallel execution
- Reporting and debugging tools

---

# Tech stack

- `@playwright/test` 
- TypeScript
- Playwright HTML reporter

---

# Project Structure

playwright-tests/
│
├── tests/
│   ├── ui/                → End-to-End tests (user flows)
│   ├── component/         → Component-level tests
│   ├── api/               → (planned) API tests
│   ├── visual/            → (planned) visual testing
│   ├── accessibility/     → (planned) accessibility testing
│
├── pages/                 → Page Object Model (UI logic abstraction)
├── fixtures/              → Custom Playwright fixtures
├── utils/                 → Helper functions (faker, random data)
├── test-data/             → Test input data
├── screenshots/           → Saved screenshots for debugging
│
├── playwright.config.ts
├── package.json
└── README.md

---

# Architecture & Design Decisions

## Page Object Model (POM)
Used to:
- Centralize UI interactions
- Improve test readability
- Reduce duplication

## Fixtures
Used to:
- Inject reusable objects (Page Objects)
- Provide dynamic test data
- Simplify test setup

## Dynamic Data (faker)
Used to:
- Generate realistic test data
- Avoid duplicates (e.g., emails)
- Improve test reliability

## Test Separation by Type
Tests are organized by purpose:
- `ui/` → Full user flows (E2E)
- `component/` → Isolated component behavior
- `validation/` → Negative scenarios and edge cases


# Configuration details

- `testDir: './tests'`
- `reporter: 'html'`
- `fullyParallel: false` (can be scaled later)


---
# How to Use This Project

# Installation

## Clone repository
git clone

## Install dependencies:
npm install

## Install Playwright Browsers
npx playwright install

---
# Running Tests

## Run all tests:
npx playwright test

## Run a single file:
npx playwright test tests/ui/login-testing.spec.ts

## Open the report:
npx playwright show-report

## Open Trace Viewer
npx playwright show-trace trace.zip

## Run Tests in Headed Mode
npx playwright test --headed

## Run Tests in Debug Mode
npx playwright test --debug

## Run Tests in Parallel
npx playwright test --workers=4

---
# Reporting

This framework supports:

- HTML reports
- Screenshots on failure
- Video recording
- Trace viewer

---
# Author

Iuliia Vasyliak

Senior QA Analyst