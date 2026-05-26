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
|   ├── cogeco/            → End-to-End tests (user flows for cogeco)
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

## Important Note how to run Cogeco tests!
Due to Cloudflare anti-bot protection on the Cogeco website, Playwright tests cannot reliably run using the full test suite command:
npx playwright test

Stable execution is only possible when running in headed mode:
1. to run both tests: npx playwright test tests/cogeco --headed --project=chromium

2. to run separetly each test :
npx playwright test tests/cogeco/navigation_flows_Cogeco.spec.ts --headed --project=chromium
npx playwright test tests/cogeco/extractValues_Cogeco_plansMobile_.spec.ts --headed --project=chromium

This limitation is caused by Cloudflare detecting automated browser contexts and blocking them during standard test execution.
To avoid fail of the test extractValue_Cogeco_plansMobile.spec.ts make sure that the prices in the script correspond the prices on the site
To avoid conflict cogeco scripts contains tag skip, to run them - remove the tag skip

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