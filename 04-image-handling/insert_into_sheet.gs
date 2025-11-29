// insert image blob into a single cell and fit to cell
function insertImageIntoCell(sheetName, row, col, fileId) {
  var ss = SpreadsheetApp.getActive();
  var sheet = ss.getSheetByName(sheetName);
  var cell = sheet.getRange(row, col);
  var blob = getDriveBlob(fileId);
  if (!blob) return false;
  var img = sheet.insertImage(blob, col, row);
  // fit to cell
  var w = cell.getWidth();
  var h = cell.getHeight();
  img.setWidth(w);
  img.setHeight(h);
  return true;
}

// batch process: column with urls -> insert into another column
function batchInsertFromCol(sheetName, urlCol, targetCol, startRow, endRow) {
  var ss = SpreadsheetApp.getActive();
  var sh = ss.getSheetByName(sheetName);
  var urls = sh.getRange(startRow, urlCol, endRow - startRow + 1).getValues();
  for (var i = 0; i < urls.length; i++) {
    var id = extractId(urls[i][0]);
    if (id) insertImageIntoCell(sheetName, startRow + i, targetCol, id);
  }
}
