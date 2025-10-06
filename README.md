# Node.js CI/CD Sample

This is a minimal Node.js + Express sample app prepared for CI/CD demonstration with Docker and GitHub Actions.

## Contents

- `index.js` - simple Express app with `/` and `/health`
- `Dockerfile` - builds the app
- `docker-compose.yml` - example compose file
- `.github/workflows/deploy.yml` - GitHub Actions workflow (example)

## Run locally

```bash
npm install
npm start
```

## Build Docker image

```bash
docker build -t yourname/nodejs-cicd-sample:latest .
docker run -p 3000:3000 yourname/nodejs-cicd-sample:latest
```

## Notes

- Replace Docker Hub username and GitHub Actions secrets before using CI/CD workflow.

# Test CI/CD pipeline again
