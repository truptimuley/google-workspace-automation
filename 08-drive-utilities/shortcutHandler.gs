// shortcutHandler.gs
// find shortcuts in a folder and log their target id

function resolveShortcutsInFolder() {
  var cfg = SpreadsheetApp.getActive().getSheetByName("Drive Tools");
  if (!cfg) throw new Error("Create sheet: Drive Tools (put folder id in B1)");
  var folderId = cfg.getRange("B1").getValue();
  var folder = DriveApp.getFolderById(folderId);
  var files = folder.getFiles();
  var out = [["Name","Id","IsShortcut","TargetId"]];
  while (files.hasNext()) {
    var f = files.next();
    var isShort = (f.getMimeType() === MimeType.SHORTCUT);
    var targetId = "";
    if (isShort) {
      try {
        var meta = Drive.Files.get(f.getId());
        targetId = meta.shortcutDetails && meta.shortcutDetails.targetId ? meta.shortcutDetails.targetId : "";
      } catch (e) {
        targetId = "err";
      }
    }
    out.push([f.getName(), f.getId(), isShort, targetId]);
  }
  var outSheet = SpreadsheetApp.getActive().getSheetByName("Shortcuts");
  if (!outSheet) outSheet = SpreadsheetApp.getActive().insertSheet("Shortcuts");
  outSheet.clear();
  outSheet.getRange(1,1,out.length,out[0].length).setValues(out);
}
