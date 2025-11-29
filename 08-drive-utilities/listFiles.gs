// listFiles.gs
// write file name + url + id into a sheet

function listFilesInFolder() {
  var cfg = SpreadsheetApp.getActive().getSheetByName("Drive Tools");
  if (!cfg) throw new Error("Create sheet: Drive Tools (put folder id in B1)");

  var folderId = cfg.getRange("B1").getValue();
  if (!folderId) throw new Error("Put folder ID in B1");

  var folder = DriveApp.getFolderById(folderId);
  var files = folder.getFiles();
  var out = [["Name","Url","Id","MimeType","Date Created"]];
  while (files.hasNext()) {
    var f = files.next();
    out.push([f.getName(), f.getUrl(), f.getId(), f.getMimeType(), f.getDateCreated()]);
  }

  var outSheet = SpreadsheetApp.getActive().getSheetByName("Folder Files");
  if (!outSheet) outSheet = SpreadsheetApp.getActive().insertSheet("Folder Files");
  outSheet.clear();
  outSheet.getRange(1,1,out.length,out[0].length).setValues(out);
}
