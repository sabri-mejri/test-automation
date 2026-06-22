# QApilot CLI — Test Automation Demo

This folder demonstrates how to use **Playwright** with the **QApilot CLI** to run automated tests with screenshots and video recording, then push the results to QApilot.

## What's inside

- **Playwright tests** against [playwright.dev](https://playwright.dev) with screenshots and video enabled
- **JUnit XML reporter** configured so results can be submitted to QApilot
- **GitHub Actions pipeline** that runs tests and submits results automatically

## Local setup

```bash
# Install dependencies
npm install

# Install Playwright browsers
npx playwright install --with-deps chromium

# Create output directories
mkdir -p reports screenshots

# Run the tests
npm test
```

After running, you'll find:
- `reports/junit.xml` — JUnit XML results (used by QApilot CLI)
- `reports/html/` — Playwright HTML report
- `screenshots/` — manual screenshots taken during tests
- `test-results/` — auto-captured screenshots and videos per test

## Submit results to QApilot

```bash
# Install the CLI
npm install -g qapilot-cli

# Authenticate
qapilot auth:set \
  --url https://your-qapilot-instance.com \
  --api-key qp_your_api_key

# Submit results
qapilot run:submit \
  --project-id <your-project-id> \
  --name "Local Run" \
  --results reports/junit.xml \
  --source "local" \
  --tags "playwright,demo"
```

## CI/CD Pipeline

The GitHub Actions workflow (`.github/workflows/playwright-qapilot.yml`) does everything automatically:

1. Installs dependencies and Playwright browsers
2. Runs all Playwright tests (with screenshots + video)
3. Installs `qapilot-cli` and authenticates
4. Submits the JUnit XML results to QApilot
5. Uploads screenshots, videos, and the HTML report as artifacts

### Required GitHub Secrets

| Secret | Description |
|---|---|
| `QAPILOT_URL` | Your QApilot instance URL |
| `QAPILOT_API_KEY` | API key (starts with `qp_`) |
| `QAPILOT_PROJECT_ID` | Target project UUID |

## Test structure

| File | Tests |
|---|---|
| `tests/homepage.spec.ts` | Homepage load, Get Started link, navigation |
| `tests/search.spec.ts` | Search dialog, search results |
| `tests/navigation.spec.ts` | API docs, Community page, dark mode toggle |
