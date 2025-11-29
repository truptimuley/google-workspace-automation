// buildRichText.gs
// create styled rich text in a cell

function buildRichText(colStart, colEnd, targetCell) {
  var ss = SpreadsheetApp.getActive();
  var tags = ss.getSheetByName("tags");
  var view = ss.getSheetByName("gen_view");
  var last = tags.getLastRow();
  if (last < 1) throw new Error("No data in tags");

  var numCols = colEnd - colStart + 1;
  var data = tags.getRange(1, colStart, last, numCols).getValues();
  var rows = data.filter(function(r){ return r[0]; }); // first col required
  if (rows.length === 0) throw new Error("No rows in range");

  var text = "";
  var styles = [];

  rows.forEach(function(r, idx){
    var title = r[0];
    var sub1 = r[1];
    var sub2 = r[2];

    var start = text.length;
    text += (idx+1) + ". " + title + "\n";
    var end = text.length;
    styles.push({s:start,e:end,b:true});

    if (sub1) { start = text.length; text += sub1 + "\n"; end = text.length; styles.push({s:start,e:end,b:false}); }
    if (sub2) { start = text.length; text += sub2; end = text.length; styles.push({s:start,e:end,b:false}); }

    if (idx < rows.length -1) text += "\n\n";
  });

  var builder = SpreadsheetApp.newRichTextValue().setText(text);
  styles.forEach(function(st){
    builder.setTextStyle(st.s, st.e,
      SpreadsheetApp.newTextStyle().setFontFamily("Karma").setFontSize(14).setBold(st.b).build());
  });

  view.getRange(targetCell).setRichTextValue(builder.build());
}
