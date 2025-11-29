# Module 09 — Search Panel (Sidebar)

Small Apps Script + HTML sidebar that lets users pick a "D value" and search a filtered list (from a sheet).  
Click an item to copy it to clipboard or paste into the active cell.

This is useful for fast lookups and picking values from a long list without switching tabs.

---

## Files

- `search_panel.gs` — server-side Apps Script functions (menu, open sidebar, get list, set value)
- `SearchPanel.html` — sidebar UI (search box, results, toast)
- `examples/` — sample layout explanation

---

## Quick usage

1. Create a sheet named `import_capi_inputs` with data in columns B (values) and D (D values).
2. Add the `.gs` and `.html` files to an Apps Script project attached to the spreadsheet.
3. Run the `onOpen()` to add the menu or reload the sheet.
4. Use menu → **🔍 Search Tools → Open Search Panel**.
5. Pick a D value from dropdown, search, click an item to copy it or paste into the active cell.

---

## Notes

- Uses Google Input Tools JS for Hindi IME in the search box (optional).
- `getSearchList(selectedValue)` expects column D to contain the category and column B the text to show.
- `setSelectedValue(value)` writes the chosen value into the active cell.
