# Module 06 — Smart Text Blocks (Rich Text Builder for Sheets)

Small Apps Script tools to build styled multi-line text blocks inside Google Sheets.
Useful for turning rows of tags/data into a single rich-text cell (bold headings, normal body, numbered lists).

---

## Files

`src/`
- `generateRichText.gs` — main runner (reads sheets, builds blocks)
- `buildRichText.gs` — core formatter (creates RichTextValue)
- `ui.gs` — menu and entry point
- `utils.gs` — tiny helpers

`examples/`
- `tags_sample.csv` — example tag rows (value, key, note)
- `README.md` — quick setup & usage

---

## Quick usage

1. Create two sheet tabs: `tags` and `gen_view`.
2. Put tag rows in `tags` (columns as in example).
3. Open Apps Script and paste files from `/src`.
4. Run `generateRichText()` or use menu -> "Generator" -> "Start".
5. Result appears in `gen_view` cells A22, A25, A28, A31 (config in code).

---

## Notes

- Uses font "Karma" and size 14 for headings in examples.
- Change target cells in `generateRichText.gs` if needed.
- Meant to be a drop-in utility for templates.
