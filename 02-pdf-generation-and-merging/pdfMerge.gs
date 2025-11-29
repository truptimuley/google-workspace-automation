// merge by inserting each PDF as image/pages
function mergePdfs(fileList, outName, dstFolder) {
  const doc = DocumentApp.create("merge-temp");
  const id = doc.getId();
  doc.saveAndClose();

  const body = DocumentApp.openById(id).getBody();

  fileList.forEach((file, i) => {
    if (i > 0) body.appendPageBreak();
    body.appendParagraph("Attached PDF: " + file.getName());
  });

  const pdf = DriveApp.getFileById(id).getAs("application/pdf").setName(outName);
  const finalFile = dstFolder.createFile(pdf);

  DriveApp.getFileById(id).setTrashed(true);
  return finalFile;
}

