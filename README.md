# ATS Recruitment — API Test Suite

![ATS Recruitment](banner.jpg)

![Jest](https://img.shields.io/badge/tested%20with-Jest%2029-C21325?logo=jest&logoColor=white)
![Supertest](https://img.shields.io/badge/HTTP-Supertest-green)
![License: ISC](https://img.shields.io/badge/license-ISC-blue)

Automated API tests for the **ATS (Applicant Tracking System) Recruitment** backend. Built with Jest and Supertest, the suite exercises the live REST API end to end: users, master data, job postings, applicants and their hiring stages, skill tests, document templates, merchants, and file uploads.

## Table of contents

- [Overview](#overview)
- [Test coverage](#test-coverage)
- [Project structure](#project-structure)
- [Getting started](#getting-started)
- [Running tests](#running-tests)
- [HTML report](#html-report)
- [Good to know](#good-to-know)
- [Contributing](#contributing)
- [License](#license)

## Overview

| | |
|---|---|
| Target API | `https://api.andromeda.axeleration.id` (set in `data/url.js`) |
| Test runner | Jest 29 |
| HTTP client | Supertest 6 |
| Authentication | Bearer token via `ATS_TOKEN` or git-ignored `data/token.json` |
| Reporting | `jest-html-reporters` → `html-report/report.html` |

Tests are black-box HTTP tests: each case sends a real request to the API and asserts the response status code. Reusable request payloads live in `data/` and are imported into the specs.

## Test coverage

| Module | Suite | Covered endpoints (excerpt) |
|---|---|---|
| Auth & users | `Testcase/Auth User/User.test.js` | `POST/GET /api/v1/user`, `GET /api/v1/profile`, `PUT/DELETE /api/v1/user/{id}` |
| Data master | `Testcase/Data master/Data Master.test.js` | `GET /api/v1/additional_data?type=…` (provinces, roles, departments, job positions, levels, job types, job posting status, applicant stages) |
| Job posting | `Testcase/Job posting/Job Posting.test.js` | `POST/GET /api/v1/job_posting`, detail by id, active list, activity log, update, delete |
| Applicants | `Testcase/Applicant/Applicant get Status.test.js` | `GET/POST /api/v1/applicants`, get by id, filter by stage, apply job |
| Applicant stages | `Testcase/Applicant/Stage Applicant/Applicant update Status.test.js` | `PUT /api/v1/applicants/status` — screening → skill test → HR interview → user interview → offering → hired |
| Skill test | `Testcase/Skill Test/SkillTest.test.js` | `POST/GET/PUT/DELETE /api/v1/skill_test` |
| Doc templates | `Testcase/Doc Template/Doc Template.test.js` | `POST/GET /api/v1/doc_templates`, detail by id |
| Merchant / client | `Testcase/Merchant/Merchant.test.js` | `POST /api/v1/client`, `GET /api/v1/client-username/{username}` |
| Upload | `Testcase/Upload - cover/uploadCover.test.js` | `POST /api/v1/uploader` (multipart file/image upload) |

Each numbered helper file next to a suite (for example `1. User_CreateUser.js`) is a standalone version of one test case, kept for ad-hoc debugging with `npx jest "path/to/file"`.

## Project structure

```
ATS-Recruitment/
├── Testcase/                  # Jest specs, grouped by feature
│   ├── Applicant/
│   ├── Auth User/
│   ├── Data master/
│   ├── Doc Template/
│   ├── Job posting/
│   ├── Merchant/
│   ├── Skill Test/
│   └── Upload - cover/
├── data/                      # Shared config, fixtures, tokens, upload assets
│   ├── asset/
│   ├── job/
│   ├── user/
│   ├── auth.js                # Resolves the bearer token from env or local file
│   ├── token.example.json     # Template for the local token file
│   ├── token.json             # Local, git-ignored bearer token (create it yourself)
│   └── url.js                 # BASE_URL
├── html-report/               # Generated HTML test report
├── jest.config.js             # Jest reporters configuration
├── package.json
└── banner.jpg
```

## Getting started

### Prerequisites

- Node.js 18+ and npm
- Network access to the target API
- A valid bearer token with access to that API

### Installation

```bash
git clone https://github.com/dikurrrr/ATS-Recruitment.git
cd ATS-Recruitment
npm install
```

### Configuration

1. **`data/url.js`** — set `BASE_URL` to the environment you want to test against:

   ```js
   const BASE_URL = `https://api.andromeda.axeleration.id`;
   module.exports.BASE_URL = BASE_URL;
   ```

2. **Bearer token** — supply a fresh, valid JWT in one of two ways:

   ```bash
   # Option A: environment variable (recommended for CI)
   export ATS_TOKEN="<your-bearer-token>"

   # Option B: local file (git-ignored)
   cp data/token.example.json data/token.json
   # then edit data/token.json and paste your token
   ```

   ```json
   {
     "token": "<your-bearer-token>"
   }
   ```

   `data/auth.js` prefers `ATS_TOKEN` and falls back to `data/token.json`, so all suites share one token. The previously committed token was expired and has been removed from tracking — rotate it on the server too.

## Running tests

```bash
npm test                       # run the whole suite with Jest (HTML report included)
npm test -- --watch            # watch mode
npm test -- "Testcase/Auth User/User.test.js"   # run a single suite
npm test -- -t "admin succeed Create user"      # run one test by name
```

`npm run dikur` is kept as a legacy alias for `npm test`. The old `test1` script was removed; `jest.config.js` already produces the HTML report, so a separate script was unnecessary.

## HTML report

`jest.config.js` registers `jest-html-reporters`, so every run writes:

```
html-report/report.html
```

Open it in a browser to see pass/fail counts, assertions, console output, and request details.

## Good to know

- **Live external API:** tests hit a real server, so results depend on its availability and current data.
- **Hardcoded IDs:** several specs reference fixed UUIDs (users, job postings, applicants, doc templates). Replace them with IDs that exist in your environment.
- **Stateful flows:** the applicant-stage tests move one applicant through a sequence of statuses; running them repeatedly changes remote data.
- **Token expiry:** JWTs expire. Refresh `ATS_TOKEN` or `data/token.json` when you see `401 Unauthorized`.
- **`istrue.js`** is a scratch file using `describe.only`/`it.only` against `reqres.in`, not part of the ATS suite.
- **Secrets:** `data/token.json` is git-ignored; use `ATS_TOKEN` in CI. Note that the old token still exists in Git history — rotate it on the server and rewrite history if this repo is public.

## Contributing

Pull requests are welcome. When adding a case:

1. Put the spec in the matching folder under `Testcase/` and name it `*.test.js`.
2. Keep request bodies in `data/` as reusable modules.
3. Run `npm run dikur` and make sure the suite passes before opening a PR.

## License

ISC — see `package.json`.
