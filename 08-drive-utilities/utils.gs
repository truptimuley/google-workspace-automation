// utils.gs
// helpers

function getCfgSheet() {
  return SpreadsheetApp.getActive().getSheetByName("Drive Tools");
}

function ensureSheet(name) {
  var ss = SpreadsheetApp.getActive();
  var s = ss.getSheetByName(name);
  if (!s) s = ss.insertSheet(name);
  return s;
}
