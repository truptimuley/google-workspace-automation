// export doc to pdf via URL
function exportAsPdf(fileId, name, folder) {
  const token = ScriptApp.getOAuthToken();

  const url = `https://docs.google.com/document/d/${fileId}/export?format=pdf`;

  const blob = UrlFetchApp.fetch(url, {
    headers: { Authorization: "Bearer " + token }
  }).getBlob().setName(name);

  return folder.createFile(blob);
}
