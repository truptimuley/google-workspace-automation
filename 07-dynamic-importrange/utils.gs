// ui.gs
// small menu entry

function onOpen() {
  var ui = SpreadsheetApp.getUi();
  ui.createMenu('Import Tools')
    .addItem('Generate IMPORTRANGE', 'generateImports')
    .addToUi();
}
