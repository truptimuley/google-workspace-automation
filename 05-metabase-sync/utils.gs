function getSheet(name) {
  return SpreadsheetApp.getActive().getSheetByName(name);
}

function logInfo(msg) {
  Logger.log(msg);
}
