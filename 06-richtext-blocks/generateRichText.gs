// generateRichText.gs
// main runner - simple config

function generateRichText() {
  var ss = SpreadsheetApp.getActive();
  var tags = ss.getSheetByName("tags");
  var view = ss.getSheetByName("gen_view");
  if (!tags || !view) throw new Error("Missing sheets: tags / gen_view");

  // build blocks from column ranges (col start, col end, target cell)
  buildRichText(2,4,"A22"); // B-D -> A22
  buildRichText(5,7,"A25"); // E-G -> A25
  buildRichText(8,10,"A28"); // H-J -> A28
  buildRichText(11,13,"A31"); // K-M -> A31
}
