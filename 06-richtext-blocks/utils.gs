function getSheet(name) {
  return SpreadsheetApp.getActive().getSheetByName(name);
}

function safeTrim(s) {
  return (s || "").toString().trim();
}
