# tomslavonia.com

Personal portfolio for Tom Slavonia, an electrical engineering graduate
researcher working across robotics, machine learning, state estimation, motion
planning, and control.

## Local development

Requires Node.js 22.13 or newer.

```bash
npm install
npm run dev
```

## Validation

```bash
npm test
```

The canonical public domain is `https://tomslavonia.com`.

## GitHub Pages

```bash
npm run build:pages
```

The command creates a static site in `out`. The workflow in
`.github/workflows/deploy-pages.yml` builds and deploys that directory whenever
`main` is updated.

After pushing the repository to GitHub:

1. Open **Settings → Pages** and select **GitHub Actions** as the source.
2. Set the custom domain to `tomslavonia.com`.
3. In Namecheap Advanced DNS, add the four GitHub Pages `A` records for host
   `@` and a `CNAME` record for host `www` pointing to `TommySlavo.github.io`.
4. When GitHub confirms the DNS configuration, enable **Enforce HTTPS**.

The legacy `npm run build:namecheap` command remains as an alias for the same
static export.
