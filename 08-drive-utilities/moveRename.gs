// moveRename.gs
// control sheet: columns A=FileId, B=NewName, C=DestFolderId, D=Status

function applyMoveRename() {
  var ss = SpreadsheetApp.getActive();
  var sheet = ss.getSheetByName("Drive Move");
  if (!sheet) throw new Error("Create sheet: Drive Move");

  var rows = sheet.getDataRange().getValues();
  for (var i = 1; i < rows.length; i++) {
    var id = rows[i][0];
    var newName = rows[i][1];
    var dest = rows[i][2];
    if (!id) continue;
    try {
      var file = DriveApp.getFileById(id);
      if (newName) file.setName(newName);
      if (dest) {
        var folder = DriveApp.getFolderById(dest);
        folder.addFile(file);
        // remove from previous parent(s)
        var parents = file.getParents();
        while (parents.hasNext()) {
          var p = parents.next();
          if (p.getId() !== dest) p.removeFile(file);
        }
      }
      sheet.getRange(i+1,4).setValue("Done");
    } catch (e) {
      sheet.getRange(i+1,4).setValue("Error: " + e.message);
    }
  }
}
