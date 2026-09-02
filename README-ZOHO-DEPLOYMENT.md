# Deploying this site to Zoho Sites

This is a plain static site — 9 HTML pages plus `assets/css/style.css`,
`assets/js/main.js` and `assets/img/*`. No build step, no framework,
no server required. It previews correctly by just opening `index.html`
in a browser, and it's built to slot into Zoho Sites (where rahali.com
already lives) using Zoho's own "HTML" embed block.

## Recommended approach: File Manager + HTML embed blocks

1. **Upload the shared assets once.**
   In Zoho Sites, go to **Files** (the file manager — this is the same
   place the current site's PDFs already live, under `/files/...`).
   Upload the whole `assets` folder (`assets/css/style.css`,
   `assets/js/main.js`, `assets/img/logo.png`, `assets/img/favicon.png` —
   the existing Rahali logo, reused as-is). Note the public URL Zoho
   gives each file, e.g. `https://www.rahali.com/files/style.css`.

2. **Update the asset links in each HTML file** (find-and-replace across
   all 9 pages, once):
   - `assets/css/style.css` → the uploaded CSS file's Zoho URL
   - `assets/js/main.js` → the uploaded JS file's Zoho URL
   - `assets/img/logo.png`, `assets/img/favicon.png` → their uploaded URLs

3. **Create one Zoho Sites page per HTML file here**, using the same
   page names so the internal links keep working:
   `index`, `about`, `services`, `process`, `policies`, `privacy`,
   `fscg`, `complaints`, `contact`.

4. **On each page, drag in Zoho's "HTML" element** (sometimes called
   "Embed Code" or "Custom HTML" depending on your plan) and paste in
   the contents of the matching `.html` file. Zoho renders the raw
   HTML/CSS/JS as-is inside the block.

5. **Set `index` as the homepage** in Zoho Sites' site settings, and
   point your existing menu / navigation at the new pages (or let the
   pasted header nav on each page do the navigating — it's already
   built in).

6. **Upload your current FSCG PDF** to Files as `FSCG.pdf` (see
   `files/PLACE-FSCG-HERE.txt`) and update the link on the `fscg` page
   to point at wherever Zoho hosts it.

7. **Point your domain** (rahali.com) at the new pages the same way it
   already points at the current site — no DNS changes needed since
   you're staying on Zoho Sites.

## Alternative: sitewide Code Injection (fewer plans support this)

If your Zoho Sites plan includes **Settings → Code Injection**, you can
paste the full contents of `assets/css/style.css` (wrapped in
`<style>...</style>`) into the sitewide **Header** injection box, and
`assets/js/main.js` (wrapped in `<script>...</script>`) into the
**Footer** injection box, instead of uploading them as separate files.
Then each page's HTML embed block only needs the `<body>` content
(header nav, main content, footer) — drop the `<link rel="stylesheet">`
and `<script src=...>` lines from each page since the styles/script are
now sitewide.

## Testing before you cut over

- Open `index.html` directly in a browser first — every page links
  correctly to every other page, so you can click through the whole
  site exactly as a visitor would before touching Zoho at all.
- After pasting into Zoho, check the mobile view — the nav collapses to
  a hamburger menu below 900px width, which depends on `main.js`
  loading correctly, so if the menu doesn't open, check the JS file
  path first.
- Check that the "Raise a Complaint" and "Book a Chat" forms open a
  pre-filled email in your mail client when submitted (they're
  `mailto:`-based, per your request — see `COMPLIANCE-NOTES.md` for
  the trade-offs and Zoho's native form alternative).

## File map

```
index.html        Home
about.html         About Us / Ranjit Das bio
services.html      Professional Services
process.html       Engagement Process (5 steps)
policies.html      Policies & Compliance hub
privacy.html        → Privacy Policy (full APP-based policy)
fscg.html            → Financial Services & Credit Guide
complaints.html      → Complaints Procedure + complaint form
contact.html        Contact / enquiry form
assets/css/style.css   Shared design system
assets/js/main.js      Nav toggle, active-link highlight, mailto forms
assets/img/logo.png, favicon.png   Existing Rahali Corporation logo
files/PLACE-FSCG-HERE.txt   Where your real FSCG PDF needs to go
```
