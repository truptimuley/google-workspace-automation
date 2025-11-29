function getSheet(name) { return SpreadsheetApp.getActive().getSheetByName(name); }

function idFromImageFormula(formulaOrUrl) { return extractId(formulaOrUrl); }
