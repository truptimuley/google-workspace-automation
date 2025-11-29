// ui.gs
// menu entry

function onOpen() {
  var ui = SpreadsheetApp.getUi();
  ui.createMenu('Generator')
    .addItem('Start', 'generateRichText')
    .addToUi();
}
