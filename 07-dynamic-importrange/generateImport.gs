// generateImport.gs
// main entry - reads controlling sheet and writes IMPORTRANGE formulas

function generateImports() {
  var ss = SpreadsheetApp.getActive();
  var ctrl = ss.getSheetByName("Controlling Sheet");
  if (!ctrl) throw new Error("Controlling Sheet not found");

  var targetSheet = ss.getSheetByName("Import"); // change if needed
  if (!targetSheet) targetSheet = ss.insertSheet("Import");

  var startRow = 6; // rows with config
  var endRow = 19;  // inclusive
  var targetCells = ["A1","B1","C1","D1","E1","F1","G1","H1","I1","J1","K1","L1","T1","U1"];

  dynamicImportRange(ctrl, targetSheet, startRow, endRow, targetCells);
}
