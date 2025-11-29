function isTimeTriggerCreated() {
  var list = ScriptApp.getProjectTriggers();
  for (var i = 0; i < list.length; i++) {
    if (list[i].getHandlerFunction() === "timetrigger") return true;
  }
  return false;
}

function createTimeTrigger() {
  if (!isTimeTriggerCreated()) {
    ScriptApp.newTrigger("timetrigger").timeBased().everyHours(2).create();
  }
}

function deleteTimeTrigger() {
  var list = ScriptApp.getProjectTriggers();
  for (var i = 0; i < list.length; i++) {
    if (list[i].getHandlerFunction() === "timetrigger") ScriptApp.deleteTrigger(list[i]);
  }
}
