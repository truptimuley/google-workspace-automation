# Module 05 — Metabase → Google Sheets Sync

Simple Apps Script utilities to fetch Metabase question results (CSV) and write them into Google Sheets tabs.

Place these files in an Apps Script project attached to the spreadsheet that will receive data.

---

## Files

`src/`
- `main_importer.gs` — entrypoints (importQuestion, timetrigger)
- `metabase_api.gs` — login, token management, fetch CSV
- `sheet_parser.gs` — detect (metabase/123) sheet names
- `fill_sheet.gs` — write CSV into sheets
- `triggers.gs` — create/check time triggers
- `utils.gs` — small helpers (log, props)

`examples/`
- `sample-metabase-output.csv` — sample CSV format
- `quick-demo.md` — short usage steps

---

## Quick usage

1. Add sheet tabs named like: `(metabase/123)` where 123 is the question id.
2. Set script properties `USERNAME` and `PASSWORD` in Apps Script Project Properties.
3. Run `importQuestion()` with the target sheet active.
4. Run `timetrigger()` to fetch all metabase sheets.
5. Use `createTimeTrigger()` to schedule periodic fetches.

---

## Notes

- Edit `METABASE_BASE` in `metabase_api.gs` if your Metabase URL differs.
- Token is stored in Script Properties (`TOKEN`).
- `Metabase Details` sheet is used for run summaries.
