# Quick demo - Metabase sync

1. Open the target spreadsheet.
2. In Apps Script editor, paste files from /src.
3. In Project Properties (Script Properties) set:
   - USERNAME = your_metabase_user
   - PASSWORD = your_metabase_pass
4. Add a sheet tab named `(metabase/123)` where 123 is a Metabase card id.
5. Run `importQuestion()` with that sheet active.
6. Check the sheet; CSV rows should be written.
7. Run `createTimeTrigger()` to auto-refresh every 2 hours.

