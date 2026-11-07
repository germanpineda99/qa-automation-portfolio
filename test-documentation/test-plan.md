# Test plan: public demo authentication

## Quick path

**Scope:** Valid and invalid login, missing inputs, and logout against the
public practice application at https://the-internet.herokuapp.com/login.

**Status:** The plan and cases are authored portfolio material. Execution
status is reported separately in the README and must not be inferred from the
test design.

**Approach:** UI end-to-end tests with Cypress, fixture-backed data, a shared
login command, and independent assertions per scenario.

**Out of scope:** Performance, security penetration testing, real company systems.

**Entry criteria:** Demo website accessible and dependencies installed.

**Exit criteria:** All planned cases are executed in the target environment and
the exact command, date, browser, and result are recorded before a passing
claim is made.

**Risk:** Public practice site may change or be unavailable.
