// bulkDownload.gs
// create CSV-like sheet of metadata for audit or backup

function exportFolderMetadata() {
  var cfg = SpreadsheetApp.getActive().getSheetByName("Drive Tools");
  if (!cfg) throw new Error("Create sheet: Drive Tools (put folder id in B1)");
  var folderId = cfg.getRange("B1").getValue();
  var folder = DriveApp.getFolderById(folderId);
  var files = folder.getFiles();
  var out = [["Id","Name","Url","Owners","Size","MimeType","Created","Updated"]];
  while (files.hasNext()) {
    var f = files.next();
    var owners = f.getOwners().map(function(o){ return o.getEmail(); }).join(";");
    out.push([f.getId(), f.getName(), f.getUrl(), owners, f.getSize(), f.getMimeType(), f.getDateCreated(), f.getLastUpdated()]);
  }
  var s = SpreadsheetApp.getActive().getSheetByName("Drive Metadata");
  if (!s) s = SpreadsheetApp.getActive().insertSheet("Drive Metadata");
  s.clear();
  s.getRange(1,1,out.length,out[0].length).setValues(out);
}
