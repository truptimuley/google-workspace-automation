# PDF Generation & Merging (Google Docs → PDF → Combined Output)

### Problem
Google Docs does not support merging documents.  
Drive cannot merge PDFs.  
Online merge tools cannot be used for confidential projects.

When multiple Docs need to be combined, the usual workflow becomes:
- Download each Doc manually  
- Convert to PDF  
- Merge using external tools  
- Repeat whenever input changes  

This is slow, error-prone and risky.

---

## What This Module Does

This module automates the painful part:

1. Convert selected or all Google Docs in a folder to PDF  
2. Handle shortcuts and linked files correctly  
3. Resolve broken template copies  
4. Support batch conversion  
5. Provide a Python script to merge PDFs locally (safe, offline)  
6. Optionally merge PDFs inside Apps Script (fallback mode)

---

## Features

### Convert Google Docs to PDF automatically  
Works for:
- raw docs  
- template copies  
- shortcuts → real files  

### Clean naming before generating  
Avoids duplicate PDFs with the same name.

### Offline-safe merge  
Python script that merges PDFs without uploading them to any site.

### Optionally merge inside Apps Script  
A fallback approach that uses a Google Doc as a stitching canvas. (Note: Has a tendency to break)

---
