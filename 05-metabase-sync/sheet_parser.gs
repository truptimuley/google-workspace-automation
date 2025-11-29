function getSheetNumbers() {
  var ss = SpreadsheetApp.getActive();
  var sheets = ss.getSheets();
  var list = [];
  for (var i = 0; i < sheets.length; i++) {
    var name = sheets[i].getName();
    if (name.indexOf('(metabase/') !== -1) {
      var m = name.match(/\(metabase\/([0-9]+)\)/);
      if (m) list.push({ questionNumber: m[1], sheetName: name });
    }
  }
  return list;
}
