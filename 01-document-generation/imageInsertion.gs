// insert image at placeholder
function putImage(body, marker, fileId, w, h) {
  const found = body.findText(marker);
  if (!found) return;

  const imgBlob = DriveApp.getFileById(fileId).getBlob();
  const el = found.getElement().asText();

  el.setText("");
  const img = el.getParent().asParagraph().insertInlineImage(0, imgBlob);

  if (w) img.setWidth(w);
  if (h) img.setHeight(h);
}

// replace multiple markers with images
function batchImages(body, items) {
  items.forEach(it => {
    putImage(body, it.key, it.id, it.w, it.h);
  });
}
