var METABASE_BASE = "https://metabase.dhruv-apps.com/"; // change if needed

function getToken(baseUrl, username, password) {
  var url = baseUrl + "api/session";
  var options = {
    method: "post",
    contentType: "application/json",
    payload: JSON.stringify({ username: username, password: password }),
    muteHttpExceptions: true
  };
  try {
    var resp = UrlFetchApp.fetch(url, options);
    if (resp.getResponseCode() !== 200) throw new Error("Auth failed: " + resp.getContentText());
    var data = JSON.parse(resp.getContentText());
    return data.id;
  } catch (e) {
    throw e;
  }
}

function getQuestionAndFillSheet(baseUrl, token, metabaseQuestionNum, sheetName) {
  var url = baseUrl + "api/card/" + metabaseQuestionNum + "/query/csv";
  var options = {
    method: "post",
    headers: { "Content-Type": "application/json", "X-Metabase-Session": token },
    muteHttpExceptions: true
  };
  try {
    var resp = UrlFetchApp.fetch(url, options);
  } catch (e) {
    return { success: false, error: e.toString() };
  }

  var code = resp.getResponseCode();
  if (code === 200 || code === 202) {
    try {
      var csv = Utilities.parseCsv(resp.getContentText());
    } catch (err) {
      return { success: false, error: "CSV parse error" };
    }
    try {
      fillSheet(csv, sheetName);
      return { success: true };
    } catch (e) {
      return { success: false, error: e.toString() };
    }
  } else if (code === 401) {
    var sp = PropertiesService.getScriptProperties();
    var user = sp.getProperty('USERNAME');
    var pass = sp.getProperty('PASSWORD');
    if (!user || !pass) return { success: false, error: "Set USERNAME/PASSWORD in Script Properties" };
    var newToken = getToken(baseUrl, user, pass);
    sp.setProperty('TOKEN', newToken);
    return { success: false, error: "Auth refreshed, retry" };
  } else {
    return { success: false, error: "Metabase error: " + resp.getContentText() };
  }
}

function getQuestionAsCSV(metabaseQuestionNum, sheetName) {
  var sp = PropertiesService.getScriptProperties();
  var token = sp.getProperty('TOKEN');
  var baseUrl = METABASE_BASE;
  if (!token) {
    var username = sp.getProperty('USERNAME');
    var password = sp.getProperty('PASSWORD');
    if (!username || !password) return { success: false, error: "Set USERNAME/PASSWORD in Script Properties" };
    token = getToken(baseUrl, username, password);
    sp.setProperty('TOKEN', token);
  }
  return getQuestionAndFillSheet(baseUrl, token, metabaseQuestionNum, sheetName);
}
