function importQuestion() {
  var ss = SpreadsheetApp.getActive();
  var sheet = ss.getActiveSheet();
  var name = sheet.getName();
  var match = name.match(/\(metabase\/([0-9]+)\)/);
  var qId;

  if (match) qId = match[1];
  else {
    var resp = Browser.inputBox('Enter Metabase question id', Browser.Buttons.OK_CANCEL);
    if (resp === 'cancel' || resp === 'false') return;
    qId = resp;
  }

  var status = getQuestionAsCSV(qId, sheet.getName());
  if (!status.success) {
    SpreadsheetApp.getUi().alert('Import failed: ' + status.error);
  } else {
    Logger.log('Imported question ' + qId);
  }
}

// Fetch all sheets named (metabase/xxx)
function timetrigger() {
  PropertiesService.getScriptProperties().deleteAllProperties();
  var ss = SpreadsheetApp.getActive();
  var metasheet = ss.getSheetByName("Metabase Details");
  if (!metasheet) {
    metasheet = ss.insertSheet("Metabase Details");
    metasheet.deleteColumns(5, 21);
  }
  metasheet.hideSheet();
  metasheet.getRange('A1:E').clear();
  metasheet.getRange("A1").setValue("Last Updated : " + new Date());

  var questions = getSheetNumbers();
  if (questions.length === 0) return;

  var results = [];
  for (var i = 0; i < questions.length; i++) {
    var q = questions[i];
    var status = getQuestionAsCSV(q.questionNumber, q.sheetName);
    results.push({ question: q.questionNumber, sheet: q.sheetName, success: status.success, error: status.error || '' });
  }

  var headers = ['Q.no.', 'Sheet', 'Success', 'Error'];
  metasheet.getRange("A1:D1").setValues([headers]);
  for (var j = 0; j < results.length; j++) {
    metasheet.getRange(j+2,1,1,4).setValues([[results[j].question, results[j].sheet, results[j].success, results[j].error]]);
  }
}
