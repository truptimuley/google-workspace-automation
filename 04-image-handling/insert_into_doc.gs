// find marker text and replace with inline image
function insertImageAtMarker(docId, marker, fileId, width, height) {
  var doc = DocumentApp.openById(docId);
  var body = doc.getBody();
  var found = body.findText(marker);
  if (!found) return false;
  var el = found.getElement().asText();
  el.setText("");
  var img = el.getParent().asParagraph().insertInlineImage(0, getDriveBlob(fileId));
  if (width) img.setWidth(width);
  if (height) img.setHeight(height);
  doc.saveAndClose();
  return true;
}

// batch insert: list of {marker, fileId, w, h}
function batchInsertToDoc(docId, list) {
  list.forEach(function(item) {
    insertImageAtMarker(docId, item.marker, item.fileId, item.w, item.h);
  });
}

