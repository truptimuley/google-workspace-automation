# Module 04 — Image Handling Automation

## What's Included

### `src/`
| File | Description |
|------|-------------|
| `image_utils.gs` | Functions to clean URLs, extract file IDs, and fetch image blobs. |
| `insert_into_sheet.gs` | Insert and resize Drive images inside sheet cells. |
| `insert_into_doc.gs` | Replace placeholders inside Google Docs with inline images. |
| `extract_image_urls.gs` | Read formulas/IMAGE() and pull out the actual image URLs. |
| `utils_small.gs` | Small helpers used by other scripts. |

### `examples/`
Contains a small CSV and a short walkthrough showing how the functions behave.

---

## Common Use Cases

### 1. Clean a messy Drive link
```js
var id = extractId("https://drive.google.com/file/d/1abcDEFghi/view");
````

### 2. Insert an image into a sheet cell

```js
insertImageIntoCell("Sheet1", 5, 6, "1abcDEFghi");
```

### 3. Replace a marker inside a Google Doc

```js
insertImageAtMarker(docId, "<<IMG_MAIN>>", "1abcDEFghi", 320, 180);
```

### 4. Process a whole column of URLs

```js
batchInsertFromCol("Sheet1", 2, 6, 2, 40);
```

---

## Why This Exists

Working with images in Sheets and Docs creates small but annoying problems:

* Drive links come in different formats
* `IMAGE()` formulas hide the actual ID
* Inserting images manually is slow
* Resizing is inconsistent
* Sharing templates within teams leads to mixed URL formats

This module is a set of small, reusable functions that remove these issues and make image-handling predictable.

---

## How to Use

1. Create a Google Apps Script project.
2. Copy the `.gs` files from the `src/` folder.
3. Make sure the project has Drive access.
4. Test with the sample data in `examples/`.
5. Use or adapt the functions in your own workflows.


