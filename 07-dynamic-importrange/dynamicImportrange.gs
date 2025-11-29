// dynamicImportrange.gs
// builds and writes IMPORTRANGE formulas based on control rows

function dynamicImportRange(ctrlSheet, targetSheet, startRow, endRow, targetCells) {
  var rows = ctrlSheet.getRange(startRow, 1, endRow - startRow + 1, 6).getValues();
  // expected layout per row: A? B? C=url D=sheetName E? F=range
  var out = [];
  var idx = 0;

  for (var r = 0; r < rows.length; r++) {
    var url = rows[r][2];    // column C
    var sheetName = rows[r][3]; // column D
    var range = rows[r][5];  // column F

    if (!url || !sheetName || !range) {
      // skip if incomplete
      continue;
    }

    var formula = buildImportrangeFormula(url, sheetName, range);
    var target = targetCells[idx] || ("Z" + (idx+1)); // fallback
    targetSheet.getRange(target).setFormula(formula);
    idx++;
  }
}

// helper: create proper IMPORTRANGE string
function buildImportrangeFormula(url, sheetName, range) {
  // sanitize inputs
  url = url.toString().trim();
  sheetName = sheetName.toString().trim();
  range = range.toString().trim();

  var ref = sheetName + "!" + range;
  // use double quotes around URL and ref
  return '=IMPORTRANGE("' + url + '","' + ref + '")';
}
