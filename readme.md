 # Configure Local Repo with GitHub Repo (Steps I Often Forget)
<!-- git remote add origin repo_link -->

## MongoDB setup (safe for GitHub)

1. Copy `.env.example` to `.env`.
2. Set `MONGODB_URI` in `.env` with your real connection string.
3. Optional: set `MONGODB_DB_NAME` (default is `Version1`).

`database.js` reads the URI from environment variables, so secrets are not committed to git.
