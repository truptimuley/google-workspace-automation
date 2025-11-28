# Document Generation From Google Sheets

### Problem
Google Docs does not have a built-in way to generate multiple documents from spreadsheet data.  
Typical workflows require copying a template, pasting values manually, adjusting formatting, inserting images, and repeating this across many units (districts, teams, regions, projects, etc.).

Doing this manually leads to:
- inconsistent formatting  
- repeated copy-paste errors  
- difficulty handling large tables  
- slow workflows when dozens or hundreds of documents must be created  
- no way to automate placeholders  
- no support for structured replacements (tags → values)

Google Apps Script gives flexibility, but the work is non-trivial because:
- Docs doesn’t expose deep formatting controls easily  
- placeholders need to be matched and replaced carefully  
- tables break often  
- multi-sheet inputs need to be merged  
- bulk generation introduces timing + refresh issues (e.g., IMPORTRANGE delays)

This module solves all that.

---

## What This Module Does

This folder contains a set of scripts that automate:
1. **Copying a Google Doc template repeatedly**
2. **Replacing placeholders with data from Google Sheets**
3. **Handling multi-sheet inputs**
4. **Inserting images from Drive**
5. **Removing empty rows in tables**
6. **Cleaning leftover placeholders**
7. **Generating multiple documents in one run**
8. **Creating PDFs from the generated Docs (optional)**

These tools can be adapted for:
- reports  
- summaries  
- candidate profiles  
- region-wise notes  
- dashboards converted into documents  
- briefing documents  
- or any workflow where Sheets → Docs is needed  

The scripts are written to be modular so they can be plugged into any setup.

---

## Key Features

### 1. Replace Tags Dynamically  
You can store `{TAG_1}`, `{TAG_2}`, etc. inside a Google Doc and Sheets will provide the actual values.

### 2. Supports Multi-Sheet Input  
Data can come from several input sheets, merged and cleaned programmatically.

### 3. Bulk Document Generation  
Run once → generate 10, 50, or 200 documents.

### 4. Add Images Inside Docs  
Insert Drive images into placeholders, with custom width/height.

### 5. Clean Up Empty Rows  
Automatically delete rows in tables that are entirely blank.

### 6. Consistent Formatting  
No more manual bolding, alignment fixes, or broken layouts.

---

## Example: High-Level Flow
