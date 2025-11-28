# Example: run the document generator

## Files in this folder
- `sample-doc-template.txt` — template content (copy into a Google Doc).
- `config.csv` — sample `Config` sheet content.
- `tags.csv` — example mapping of values → placeholders.
- `entities.csv` — items to loop over.

## Quick setup
1. Open Google Drive and create a new Google Doc.
   - Copy the content from `sample-doc-template.txt` into it.
   - Save the doc and copy the document ID from the URL.

2. Create a Google Sheet and add 3 tabs:
   - `Config` — paste the `config.csv` table.
   - `Tags` — paste `tags.csv`.
   - `Entities` — paste `entities.csv`.

3. Update `Config`:
   - Put your template doc ID into `TEMPLATE_DOC_ID`.
   - Create or choose an output folder and paste its folder ID into `OUTPUT_FOLDER_ID`.

4. Deploy code:
   - Use the `appscripts/01-document-generation/src` code or push it via `clasp`.
   - Run the function `runGenerator()` (or `generateDocumentsFromTemplate()` if you use the more complete entrypoint).

5. Check generated docs:
   - The generated document copies will be in your output folder.

## Notes
- If you use images, make sure the Drive links are valid and accessible to the script's account.
- Tweak `SLEEP_MS` in the `Config` if your formulas take longer to refresh.
