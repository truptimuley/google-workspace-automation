// replace tags or placeholders inside document
function replaceKeys(body, pairs) {
  pairs.forEach(row => {
    const val = row[0];
    const key = row[1];
    if (key) body.replaceText(key, val);
  });
}

// replace inside header/footer if needed
function replaceInSections(doc, pairs) {
  const hd = doc.getHeader();
  const ft = doc.getFooter();
  if (!hd && !ft) return;

  pairs.forEach(row => {
    const val = row[0];
    const key = row[1];
    if (hd) hd.replaceText(key, val);
    if (ft) ft.replaceText(key, val);
  });
}
