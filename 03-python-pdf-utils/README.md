# Python PDF Utilities

Small Python scripts to work with PDFs locally:
- merge_with_pagenums.py — merge PDFs and add page numbers (footer)
- split_pdf.py — split a PDF into single-page files
- pdf_to_jpg.py — convert PDF pages to JPG (requires poppler)
- compress_pdf.sh — compress PDF via Ghostscript
- extract_text.py — extract text from PDF

## Quick setup
1. Install system deps (poppler, ghostscript):
   ```bash
   sudo apt update
   sudo apt install -y poppler-utils ghostscript

