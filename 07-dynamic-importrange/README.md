# Module 07 — Dynamic IMPORTRANGE Manager

Small Apps Script utilities to create and manage many IMPORTRANGE formulas from a single control sheet.

This module helps when you maintain several IMPORTRANGE links and want to generate them programmatically (avoid manual copy/paste). It supports a simple control sheet with source URL, sheet name, range and target cell mapping.

---

## Files

- `generateImport.gs` — entry function, reads control table and writes formulas
- `dynamicImportrange.gs` — core formula builder and writer
- `ui.gs` — optional menu to run the generator
- `utils.gs` — tiny helpers and validators

`examples/`
- `imports_sample.csv` — sample control table
- `README.md` — usage steps

---

## Quick usage

1. Add a sheet `Controlling Sheet` with rows:
   - C = source spreadsheet URL
   - D = sheet name
   - F = range (A1 notation)
   - (each row has a target cell mapping, see example)

2. Run `generateImports()` to populate target sheet cells with `IMPORTRANGE` formulas.

3. Adjust `targetCells` in the script if you need different targets.

---

## Notes

- If source sheets require permission, open the IMPORTRANGE formula once manually to grant access, or run with an account that has access.
- Keep control table tidy — empty rows are skipped.
