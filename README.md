# Rahali Corporation website

Source for [rahali.com](https://rahali.com) — Rahali Corporation Pty Ltd,
an AFSL & Australian Credit Licence holder (344748). Plain static site:
9 HTML pages, one shared stylesheet, one small JS file. No build step,
no framework, no server required.

## Hosting

Served by **GitHub Pages** directly from this repo's `claude/rahali-website-new`
branch (Settings → Pages → Deploy from a branch → `/ (root)`).

- **Custom domain**: `rahali.com`, configured via the `CNAME` file at the
  repo root plus DNS records at the registrar (4 `A` records pointing at
  GitHub Pages' IPs, and a `www` `CNAME` to `<owner>.github.io`). HTTPS is
  enforced.
- **Email** for the domain (Zoho Mail) is unaffected — its `MX` record is
  independent of where the website itself is hosted.
- **`.nojekyll`** at the root tells GitHub Pages to serve the files as-is,
  skipping Jekyll processing.

To publish a change: edit the files, commit, and push to
`claude/rahali-website-new`. GitHub Pages rebuilds automatically, usually
within a minute.

This repo was originally scoped to be pasted into Zoho Sites (where the
site used to live) but ended up moving to GitHub Pages instead — there's
no Zoho-specific deployment step to worry about anymore.

## File map

```
index.html          Home
about.html           About Us / Ranjit Das bio
services.html        Professional Services
process.html         Engagement Process (5 steps)
policies.html        Policies & Compliance hub
privacy.html          → Privacy Policy (full APP-based policy)
fscg.html              → Financial Services & Credit Guide
complaints.html        → Complaints Procedure + complaint form
contact.html          Contact / enquiry form
assets/css/style.css     Shared design system
assets/js/main.js        Nav toggle, active-link highlight, mailto forms
assets/img/logo.png, favicon.png   The real Rahali Corporation logo
files/                Static files linked from the pages (e.g. FSCG.pdf)
CNAME                 Custom domain for GitHub Pages (rahali.com)
.nojekyll             Disables Jekyll processing on GitHub Pages
```

## Things to know before editing

- **Forms are `mailto:`-based.** "Raise a Complaint" and "Book a Chat"
  build a pre-filled email in the visitor's own mail client rather than
  submitting anywhere — there's no backend. See `COMPLIANCE-NOTES.md` for
  the trade-offs.
- **Mobile nav** collapses to a hamburger menu below 900px width, driven
  by `assets/js/main.js` — if it stops working, check that file's path
  first.
- **The FSCG download is currently a placeholder.** `fscg.html` links to
  `files/FSCG.pdf`, which doesn't exist yet in this repo — see
  `files/PLACE-FSCG-HERE.txt`.

## Outstanding compliance items

See `COMPLIANCE-NOTES.md` for the full list (AFCA member number, the real
FSCG PDF, complaints inbox address, sign-off on the Privacy Policy
wording, confirming the AUM/client-count figures).
