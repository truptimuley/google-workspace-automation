// quick fetch helpers
function getSheet(name) {
  return SpreadsheetApp.getActive().getSheetByName(name);
}

function getPairs(sheet, colA, colB) {
  const lr = sheet.getLastRow();
  return sheet.getRange(1, colA, lr, colB - colA + 1).getValues();
}

// pause for slow sheets
function wait(ms) {
  Utilities.sleep(ms);
}

// create timestamp names
function stampName(base) {
  const t = Utilities.formatDate(new Date(), "Asia/Kolkata", "yyyyMMdd_HHmm");
  return base + "_" + t;
}
