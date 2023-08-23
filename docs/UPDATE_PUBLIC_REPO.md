## Updating the public repos

```bash
curl -L \
        -H "Accept: application/vnd.github+json" \
        -H "Authorization: Bearer <TOKEN>" \
        -H "X-GitHub-Api-Version: 2022-11-28" \
        https://api.github.com/users/rashadatjou/repos >> app/mock/git/repo-list.json
```