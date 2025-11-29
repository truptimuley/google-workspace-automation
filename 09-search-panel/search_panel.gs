// search_panel.gs
// menu, open sidebar, server helpers

function onOpen() {
  SpreadsheetApp.getUi()
    .createMenu("🔍 Search Tools")
    .addItem("Open Search Panel", "openSearchPanel")
    .addToUi();
}

function openSearchPanel() {
  const html = HtmlService.createHtmlOutputFromFile("SearchPanel")
    .setTitle("Search & Select")
    .setWidth(300);
  SpreadsheetApp.getUi().showSidebar(html);
}

function getSearchList(selectedValue) {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("import_capi_inputs");
  if (!sheet) return [];
  const lastRow = sheet.getLastRow();
  if (lastRow < 1) return [];

  const colB = sheet.getRange(1, 2, lastRow).getValues().flat(); // B
  const colD = sheet.getRange(1, 4, lastRow).getValues().flat(); // D

  const result = [];
  for (let i = 0; i < lastRow; i++) {
    if (colD[i] === selectedValue && colB[i]) result.push(colB[i]);
  }
  return result;
}

function setSelectedValue(value) {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  const cell = sheet.getActiveCell();
  cell.setValue(value);
}
