# Example - Dynamic IMPORTRANGE

1. Open your spreadsheet and create a sheet named `Controlling Sheet`.
2. Paste rows from `imports_sample.csv` starting at row 6.
   - Put the source spreadsheet URL in column C.
   - Put sheet name in column D.
   - Put range (A1 notation) in column F.
3. Create a sheet named `Import` (or the script will create one).
4. Run `generateImports()` from Apps Script or use menu -> Import Tools -> Generate IMPORTRANGE.
5. Grant access for first IMPORTRANGE if prompted.
