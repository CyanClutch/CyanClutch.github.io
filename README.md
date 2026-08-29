# Clutch Unity Website — Cloudflare Worker

GitHub-ready copy of the Unity-style website, assets, and Cloudflare Worker.

## Deploy
```bat
npm install
npx wrangler login
npx wrangler deploy --secrets-file secrets.txt
```

Create `secrets.txt` locally (never commit it):
```text
CLUTCH_SERVER_KEY=put-your-own-random-secret-here
```
Then delete it after deployment. `.gitignore` already ignores it.

After `CONNECTING TO PHOTON...`, the browser calls `/api/clutch-check`. The Worker checks that the server-side `CLUTCH_SERVER_KEY` exists. If it fails, boot stops and shows:

Error while catching data on Clutch's servers

The secret is never returned to the browser.

Client-side HTML/JS/assets must be delivered to a browser to run, so they cannot be made invisible to visitors. Keep private credentials and important server-side logic in Cloudflare.

The included SM64 ROM is user-supplied. Do not publish it publicly unless you have the rights to distribute it.
