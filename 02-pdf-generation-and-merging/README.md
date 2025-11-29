# Google Workspace Automation Suite

A collection of small, practical scripts and tools designed to make Google Sheets, Google Docs, and Google Drive easier to work with.  
Each tool comes from a real workflow problem - something repetitive, slow, or not possible through the normal UI - and is solved using Google Apps Script (and in a few cases, Python).

Each folder contains:
- the problem  
- the solution  
- the code  
- simple instructions

The goal is to keep every module independent and reusable.

---

## Index of Tools

### 01 — Document Generation From Sheets  
Generate multi-page Google Docs from spreadsheet data, update placeholders, handle formatting, and automate entire document pipelines.  
Folder: `01-document-generation`

---

### 02 — PDF Conversion and Merging  
Convert Google Docs to PDF at scale and merge PDFs safely using a local Python script (no third-party online tools).  
Folder: `02-pdf-merging`

---

### 03 — Rich Text Block Builder for Sheets  
Create styled text blocks inside Google Sheets (numbered items, bold titles, multi-line descriptions).  
Folder: `03-richtext-block-builder`

---

### 04 — Sheet-to-Doc Pipelines  
Automate generating many documents from multiple input sheets, including placeholder replacement and cleaning.  
Folder: `04-sheet-to-doc-pipelines`

---

### 05 — Dynamic IMPORTRANGE Tools  
Automate creation of multiple IMPORTRANGE formulas and control source sheet mapping using a central configuration.  
Folder: `05-dynamic-import-tools`

---

### 06 — Sidebar Search Panel (Custom UI)  
A small HTML+JS-powered sidebar for filtering, searching, and selecting values directly inside Google Sheets.  
Folder: `06-sidebar-ui-tools`

---

### 07 — Row/Column Merge and Cleanup Utilities  
Unmerge cells, propagate formulas, merge duplicate groups, and hide unused rows for maintaining clean layouts.  
Folder: `07-merge-rows-columns`

---

### 08 — Image Automation Tools  
Insert Google Drive images into Sheets or Docs, control size, replace placeholders, and extract usable IDs from URLs.  
Folder: `08-image-insertion-engine`

---

### 09 — Google Drive File Utilities  
List files in a folder, bulk convert Docs to PDFs, clean shortcuts, and safely handle confidential file workflows.  
Folder: `09-file-management-utilities`

---

### 10 — Workflow Orchestration and Triggers  
Full multi-step workflows that run end-to-end: set triggers, refresh data, generate outputs, and process batches.  
Folder: `10-workflow-orchestration`

---

## How to Use This Repository

Each module is standalone.  
You can use any folder without needing the rest.

Most scripts are written for:
- Google Apps Script  
- Google Sheets  
- Google Docs  
- Google Drive  

A few tools use Python for local processing (e.g., PDF merging).

---

## Why This Exists

While Google Workspace is powerful, it becomes limiting when the workflow involves:
- generating multiple documents at once  
- reusing consistent templates  
- merging or formatting content  
- handling large tables  
- inserting or managing Drive images  
- batching updates across files  

These tools were created to solve exactly those pain points.

This repository collects all these practical solutions in one structured library.

---

If you find any of these useful, feel free to reuse or adapt them.
