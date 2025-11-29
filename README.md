#Google Workspace Automation
### Automated Data Pipelines for High-Velocity Field Operations

![Status](https://img.shields.io/badge/Status-Active-blue)
![Stack](https://img.shields.io/badge/Stack-Google_Apps_Script_%7C_Python_%7C_GCP-blue)
![Focus](https://img.shields.io/badge/Focus-Operational_Efficiency-blue)

A collection of **Google Apps Script** and **Python** automations used to streamline workflows across Google Workspace — including Drive, Sheets, Docs, and custom reporting utilities.

I built these utilities to replace manual workflows with automated triggers. The goal was simple: stop copy-pasting data and start processing files in batches. The scripts are now live here as a set of **reusable utilities** that anyone can use or adapt.

> **Note:** All folder IDs, URLs and product names in the examples have been replaced with placeholders.


## Repo layout
```
.
├── 01-document-generation
├── 02-pdf-generation-and-merging
├── 03-python-pdf-utils
├── 04-image-handling
├── 05-metabase-sync
├── 06-richtext-blocks
├── 07-dynamic-importrange
├── 08-drive-utilities
├── 09-search-panel
└── README.md

````

## Modules
### 01 - Document generation
Path: `01-document-generation/`  
Scripts to generate Google Docs from Sheets by replacing placeholders, inserting images, cleaning up tables and formatting. Includes a sample template and example `tags.csv`.  
Files: `generateDocs.gs`, `placeholderReplacement.gs`, `imageInsertion.gs`, `tableCleanup.gs`, `utilities.gs`  

### 02 - PDF generation & merging
Path: `02-pdf-generation-and-merging/`  
Apps Script helpers and a small local merge setup for producing PDFs from Docs/Sheets and merging them. Also includes handling for shortcuts and Drive export helpers.  
Files include: `pdfExport.gs`, `pdfMerge.gs`, `convertDocs.gs`, `resolveShortcuts.gs`, `utils.gs`  

### 03 - Python PDF utilities
Path: `03-python-pdf-utils/`  
Local CLI-style scripts to manipulate PDFs: merge (with page numbers), split, convert pages to images, extract text, compress. These keep sensitive files local (no cloud upload).  
Files: `merge_with_pagenums.py`, `pdf_to_jpg.py`, `split_pdf.py`, `extract_text.py`, `compress_pdf.sh`, `requirements.txt`  

### 04 - Image handling
Path: `04-image-handling/`  
Utilities to extract image URLs/IDs, fetch Drive images, insert images into Sheets cells and Docs, and an examples folder. Useful when team members paste Drive links in varying formats.  
Files: `image_utils.gs`, `insert_into_sheet.gs`, `insert_into_doc.gs`, `extract_image_urls.gs`, `utils_small.gs`  

### 05 - Metabase → Sheets sync
Path: `05-metabase-sync/`  
Apps Script to pull Metabase question results (CSV) directly into sheet tabs named like `(metabase/123)`. Includes token handling and a timed trigger helper.  
Files: `main_importer.gs`, `metabase_api.gs`, `sheet_parser.gs`, `fill_sheet.gs`, `triggers.gs`, `utils.gs`  

### 06 - Rich text blocks
Path: `06-richtext-blocks/`  
Build multi-line, styled RichText cells from rows of tags. Good for generating one-cell summary blocks (bold headings + normal text).  
Files: `generateRichText.gs`, `buildRichText.gs`, `ui.gs`, `utils.gs`  

### 07 - Dynamic IMPORTRANGE manager
Path: `07-dynamic-importrange/`  
Create and manage many IMPORTRANGE formulas from a single control sheet. Good for syncing multiple sheets without manual copying.  
Files: `generateImport.gs`, `dynamicImportrange.gs`, `ui.gs`, `utils.gs`  

### 08 — Drive utilities
Path: `08-drive-utilities/`  
Drive maintenance helpers: list folder contents, move/rename files using a control sheet, resolve shortcuts (Advanced Drive Service required), and export folder metadata.  
Files: `listFiles.gs`, `moveRename.gs`, `shortcutHandler.gs`, `bulkDownload.gs`, `utils.gs`  

### 09 — Search Panel (sidebar)
Path: `09-search-panel/`  
A small HTML+Apps Script sidebar that shows a searchable list, supports Hindi IME, and pastes the selected value into the active cell. Good for fast lookups.  
Files: `search_panel.gs`, `SearchPanel.html`, `README.md`  

---

## Final notes

* All scripts are intentionally small and modular so you can copy only what you need.
* Python tools are there for local, offline PDF handling when confidentiality matters.
