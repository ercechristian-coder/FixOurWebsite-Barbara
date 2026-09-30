# Intentional Impact Consulting

Production website for Barbara Manzo Gilbert and Intentional Impact Consulting.

This is a static Vite/React site intended for GitHub source control and Namecheap shared hosting. The production build outputs to `dist/`; upload the contents of `dist/` to the hosting account's `public_html/` directory.

## Local Development

Use Node.js 20+.

```sh
pnpm install
pnpm run dev
```

The local development server prints its localhost URL after startup.

## Verification

```sh
pnpm run typecheck
pnpm run lint
pnpm run build
pnpm run preview
```

## Production Build

```sh
pnpm run build
```

Production output:

```txt
dist/
```

## Namecheap Manual Deployment

1. Run `pnpm install`.
2. Run `pnpm run build`.
3. Back up the current `public_html/` directory in Namecheap/cPanel.
4. Upload the contents of `dist/` into `public_html/`.
5. Confirm these files are present in `public_html/`: `index.html`, `.htaccess`, `contact.php`, `robots.txt`, `sitemap.xml`, and `assets/`.
6. Visit `/`, `/about`, `/services`, `/community`, `/insights`, `/testimonials`, `/contact`, and `/book` directly in the browser.
7. Submit a test contact message and a booking request.
8. Confirm HTTPS works and there are no mixed-content warnings.

## Forms

`public/contact.php` handles both contact and booking form submissions after deployment to Namecheap. It sends mail to:

```txt
barbara@intentionalimpactconsulting.com
```

Update `public/contact.php` if the receiving inbox changes. No SMTP passwords or API secrets are stored in the repository.

Local Vite preview does not execute PHP. Form submissions should be tested on the Namecheap server or another PHP-capable local server.

## GitHub

Commit source code, public assets, and deployment configuration. Do not commit:

- `node_modules/`
- `dist/`
- local `.env` files
- server credentials
- screenshots or temporary deployment archives

## Optional GitHub Actions Deployment

Automated deployment can be added after Namecheap access is confirmed. Prefer SFTP/FTPS scoped only to the website directory. Store credentials as GitHub Repository Secrets, for example:

```txt
NAMECHEAP_HOST
NAMECHEAP_USERNAME
NAMECHEAP_PASSWORD
NAMECHEAP_PORT
NAMECHEAP_REMOTE_PATH
```

Do not configure automated deletion of remote files until the target path is verified.

## Production Notes

- The approved desktop and mobile home hero components are intentionally separate. Do not merge them during cleanup.
- Critical images are stored in `public/assets/images/` so the site does not depend on VibePreview or GHL-hosted assets.
- Apache routing is handled by `public/.htaccess` so direct visits to client-side routes resolve to `index.html`.
- Update `public/sitemap.xml`, `public/robots.txt`, and `index.html` if the final production domain changes.
