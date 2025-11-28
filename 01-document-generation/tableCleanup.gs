// delete rows with empty text
function fixTables(doc) {
  const tables = doc.getBody().getTables();

  tables.forEach(t => {
    for (let r = t.getNumRows() - 1; r >= 0; r--) {
      const txt = t.getRow(r).getText().trim();
      if (!txt) t.removeRow(r);
    }
  });
}

// strip placeholder-style rows if needed
function stripPattern(doc, pattern) {
  const tables = doc.getBody().getTables();
  const rgx = new RegExp(pattern);

  tables.forEach(t => {
    for (let r = t.getNumRows() - 1; r >= 0; r--) {
      const txt = t.getRow(r).getText();
      if (rgx.test(txt)) t.removeRow(r);
    }
  });
}
