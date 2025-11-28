function runGenerator() {
  const ss = SpreadsheetApp.getActive();
  const cfg = ss.getSheetByName("Config"); //add your sheet name

  const templateId = cfg.getRange("B1").getValue(); // template file
  const outFolderId = cfg.getRange("B2").getValue(); // output folder
  const tagSheet = ss.getSheetByName("Tags"); //this tab will have values and corresponding placeholders

  const templateFile = DriveApp.getFileById(templateId);
  const outFolder = DriveApp.getFolderById(outFolderId);

  const tagData = tagSheet.getRange(1, 1, tagSheet.getLastRow(), 2).getValues(); // value | key

  const newDoc = templateFile.makeCopy("generated-file", outFolder);
  const doc = DocumentApp.openById(newDoc.getId());
  const body = doc.getBody();

  replaceKeys(body, tagData);
  fixTables(doc);
  doc.saveAndClose();
}
