# Image Handling examples

- Paste sample URLs into a sheet column (e.g., col B).
- Run `extractImageUrlsFromRange("Sheet1", 2, 2, 4)` to extract cleaned URLs into next column.
- Run `batchInsertFromCol("Sheet1", 2, 6, 2, 4)` to insert images from col B into col F.
- Use `insertImageAtMarker(docId, '<<IMAGE_MAIN>>', fileId, 300, 200)` to place image in a Doc.
