// read formulas or IMAGE() cells and return cleaned URLs
function extractImageUrlsFromRange(sheetName, col, startRow, endRow) {
  var sh = SpreadsheetApp.getActive().getSheetByName(sheetName);
  var vals = sh.getRange(startRow, col, endRow - startRow + 1).getFormulas();
  var out = [];
  for (var i = 0; i < vals.length; i++) {
    var f = vals[i][0] || sh.getRange(startRow + i, col).getValue();
    if (typeof f === "string") {
      var m = f.match(/https?:\/\/[^'")\s]+/);
      out.push([m ? m[0] : f]);
    } else {
      out.push([""]);
    }
  }
  sh.getRange(startRow, col + 1, out.length).setValues(out);
  return out;
}
