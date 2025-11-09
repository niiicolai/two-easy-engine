# Contribution Guidelines

We welcome contributions to the Two Easy Engine!

## Getting Started
1.  **Fork** the repository on GitHub.
2.  **Clone** your forked repository locally.
3.  Install dependencies: `npm install`.
4.  Start development: `npm run dev`.

## Submitting Changes
When submitting a Pull Request (PR), please follow these guidelines:

### Commit Messages
All commit messages **must** follow the [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) specification. This helps us automatically generate the changelog.
* **New Feature:** `feat: added support for circle colliding`
* **Bug Fix:** `fix: resolve issue with texture loading on Firefox`
* **Documentation:** `docs: clarify setup steps in README`

### Pull Requests
Ensure your PR title is clear and concise. Link to any relevant issues.

### Branch Naming Policy

All contributions **must** be done on a new feature branch and follow our naming convention, which is based on the work type and the GitHub Issue number.

**Primary Rule (Issue-Based Work):**
If your work is tied to an existing GitHub Issue, use the following format:
`[type]/[issue-number]-[short-description-using-hyphens]`
* **Example:** `feat/150-add-new-shader-pipeline`

**Alternative Rule (Quick Updates/Maintenance):**
For very minor, non-issue-based changes (like a quick README typo fix or a tooling update), use a simple prefixed format:
`[type]/[short-description-using-hyphens]`
* **Example:** `docs/fix-license-link`
* **Example:** `chore/update-node-version`

## Style Guide
For detailed rules on code structure, encapsulation, constants, and documentation, please see the **JavaScript Style Guide** in the dedicated [STYLE_GUIDE](/STYLE_GUIDE.md) file.

## Licensing
By contributing, you agree that your submissions will be licensed under the project's [LICENSE](/LICENSE.md) file.