# QA Automation Portfolio

An original, public-safe QA portfolio demonstrating Cypress UI automation,
Postman collection design, illustrative SQL, and concise QA documentation.
The examples use a public practice application and fictional data; no employer
code, internal artifacts, private URLs, or personal data are included.

## What is included

| Area | Evidence in this repository |
| --- | --- |
| UI automation | Cypress login, logout, and validation scenarios |
| Test design | Test plan, cases, and an explicitly fictional defect example |
| API testing | Importable Postman collection with status and schema assertions |
| SQL | Original queries against an assumed fictional customer/order schema |
| Delivery | Reproducible npm scripts and a GitHub Actions Cypress workflow |

## Quick start

Requirements: Node.js 18 or newer and npm 9 or newer.

```bash
npm ci
npm run cy:run
```

To open Cypress interactively:

```bash
npm run cy:open
```

The UI suite targets the public practice login at
`https://the-internet.herokuapp.com/login`. Its published demo credentials
are stored in `cypress/fixtures/users.json` and are used through the shared
`cy.login()` custom command. They are not private credentials.

## API examples

Import `api-testing/postman-collection.json` into Postman. The collection uses
JSONPlaceholder, a public practice API, and includes GET, POST, and negative
response examples. The collection is executable-looking, but this repository
does not claim that the requests have been run or passed. See
`api-testing/README.md` for the distinction between authored assertions and
verified execution.

## Documentation and SQL

- `test-documentation/test-plan.md` explains scope, approach, and execution
  criteria.
- `test-documentation/test-cases.md` lists the preserved authentication cases.
- `test-documentation/bug-reports.md` is an original illustrative example.
- `sql/queries.sql` contains illustrative SQL only; it has not been executed
  against a live database in this repository.

## Verification status

Run results are environment-dependent because the Cypress suite accesses a
public service. This README describes the available commands and does not
claim CI, UI, or API success unless a dated local or CI result is recorded.

## Scope and safety

This project is intentionally limited to local source and documentation work.
It does not create or publish a remote repository, access other projects, or
use former-employer material.
