function fillSheet(rows, sheetName) {
  var ss = SpreadsheetApp.getActive();
  var sheet;
  if (!sheetName) sheet = ss.getActiveSheet();
  else {
    sheet = ss.getSheetByName(sheetName);
    if (!sheet) sheet = ss.insertSheet(sheetName);
  }

  sheet.clear();
  if (!rows || rows.length === 0) return;

  var cols = rows[0].length;
  var range = sheet.getRange(1,1,rows.length, cols);
  range.setValues(rows);
  sheet.getRange(1,1,1,cols).setFontWeight("bold");
}
