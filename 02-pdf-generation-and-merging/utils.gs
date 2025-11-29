function getConfig() {
  return {
    src: getSheet("Config").getRange("B1").getValue(),
    dst: getSheet("Config").getRange("B2").getValue()
  };
}

function cleanName(n) {
  return n.replace(/[^\w-]+/g, "_");
}

function deleteIfExists(folder, name) {
  const f = folder.getFilesByName(name);
  while (f.hasNext()) f.next().setTrashed(true);
}

function getSheet(n) {
  return SpreadsheetApp.getActive().getSheetByName(n);
}
