# Deploying `index.html` to Zoho Sites

This file is a single, self-contained static HTML page (styles and script inline,
only external calls are to Google Fonts). It does not depend on a build step,
so it can be pasted straight into Zoho Sites.

## Steps

1. In the Zoho Sites editor, open the page you want this design on (e.g. your Home page).
2. Add an **HTML** / **Embed Code** block (Zoho Sites: drag the "HTML" element from the
   Elements panel onto the page), or use **Page Settings → Code View / Custom HTML**
   if your plan exposes full-page HTML editing.
3. Open `index.html` in a text editor, select everything **inside `<body>...</body>`**
   (from `<div class="topbar">` down to the closing `</script>` before `</body>`), and
   paste that into the HTML block.
4. Copy everything inside the `<style>...</style>` block in `<head>` into Zoho Sites'
   **Custom CSS** panel (Site Settings → Custom CSS), or leave it wrapped in a
   `<style>` tag inside the HTML block if your plan doesn't expose a separate CSS panel.
5. Add the Google Fonts `<link>` tags from `<head>` to Zoho Sites' **Header Code**
   / **Header HTML** field (Site Settings → SEO → Header Code, or Settings → Code
   Injection depending on your plan), so the fonts load once per site rather than
   per page.
6. Set the page **Title** and **Meta Description** in Zoho Sites' page SEO settings
   to match the `<title>` and `<meta name="description">` values in this file.

## Before publishing

Search this file for `[PLACEHOLDER]` and replace every instance:

- Registered/office address in the footer
- AFCA membership number in the footer legal line

Internal links currently point to `/financial-services-guide.html`,
`/privacy-policy.html`, `/complaints-procedure.html`, `/lodge-a-complaint.html`
and `/partners.html` — update these to match the actual page URLs Zoho Sites
assigns once those pages are published.
