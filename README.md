## Info
GitHub Actions plugin to create pull_request checks.

## Usage
```yaml
name: Pull Request Cancel Example
on: [pull_request]

jobs:
  check-job:
    runs-on: ubuntu-latest
    steps:
      - run: touch new_file
      - uses: tutu-ru-mobile/action_create_pull_request@tag1.0.0
        with:
          access_token: "${{ secrets.GITHUB_TOKEN }}"
          branch_from: "current_branch"
```

## Contributing
- Run `yarn install`
- Edit `./src/index.ts`
- Run `yarn build`
- Commit changes including `./dist/index.js` bundle
