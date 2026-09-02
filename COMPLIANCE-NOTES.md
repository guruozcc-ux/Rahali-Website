# Compliance follow-ups before this goes live

This redesign carries over and modernises the content from the current
rahali.com, and rewrites the Privacy Policy and Complaints Procedure into
responsive web pages (previously PDF/Word downloads). A few things need
sign-off from Ranjit / your AFSL compliance arrangements before publishing,
because getting them wrong has real regulatory consequences.

## Must confirm before publishing

1. **AFCA membership number.** `complaints.html` and `policies.html`
   reference AFCA (1800 931 678, afca.org.au) but don't quote a specific
   member number — I couldn't find it published anywhere I have access
   to search. ASIC's RG 271 expects your IDR/EDR disclosures to be
   accurate and complete, so add the member number (or confirm it isn't
   normally quoted on your existing FSCG) before this goes live.

2. ~~Current FSCG PDF.~~ **Done** — `files/FSCG.pdf` is now the real
   Financial Services & Credit Guide (Version 8, 24 April 2023) you
   provided.

   ~~Address mismatch.~~ **Resolved** — the FSCG lists a different
   office address/phone (Unit 3803, 100 Harbour Esplanade, Docklands
   VIC 3008 / 03 9942 8801) than the site. Confirmed: the site keeps
   **PO Box 23052, Docklands VIC 8012** as the published address.

3. **Complaints intake address.** Per your instruction, the complaint
   and enquiry forms are `mailto:`-based, addressed to
   `ranjit@rahali.com` (the only address on the current site). Two
   things worth considering:
   - A `mailto:` form only works if the visitor's device has an email
     client configured — it will silently do nothing on a phone/browser
     without one. It also gives you no record unless the visitor
     actually presses send in their own client.
   - Best practice for AFSL complaints handling is a dedicated
     `complaints@rahali.com` inbox distinct from your personal address,
     so complaints can't get buried in day-to-day mail and could be
     monitored by someone else if needed. Consider adding one as a
     mail alias if your email provider supports it.
   - If this becomes a real pain point, migrating the two forms to
     Zoho Sites' native form widget (submissions land in your Zoho
     inbox/CRM with a timestamped record) is a small change — happy to
     do it later.

4. **Privacy Policy figures.** The rewritten Privacy Policy
   (`privacy.html`) mirrors your existing 2019 PDF almost clause-for-
   clause, updated only in date and formatting — I did not add or
   remove any substantive obligation. Please have it reviewed once by
   whoever originally approved the 2019 version, since I'm not your
   compliance/legal adviser and can't give that sign-off.

5. **AUM / client numbers.** Per your instruction, the site now states
   "over $120 million" in funds under advice, "100+ clients" and "23+
   years" of experience (2003–2026). ASIC's misleading/deceptive
   conduct rules (and your AFSL obligations generally) require these to
   be accurate and something you could substantiate if asked — please
   double-check the exact figures before publishing, and update the
   `hero-badges` numbers in `index.html` and the bio text in `about.html`
   if they've moved on since you gave them to me.

6. **Professional Indemnity insurance wording.** `complaints.html` and
   `policies.html` state PI insurance is held, mirroring your existing
   published wording. Confirm this is still accurate.

## Nothing else was invented

Everything else on the compliance pages (collection/use/disclosure of
personal information, IDR timeframes, AFCA's role, the FSCG's purpose)
is drawn directly from your existing published Privacy Policy PDF,
Complaints document, and Engagement Process page — restructured for the
web, not rewritten in substance.
