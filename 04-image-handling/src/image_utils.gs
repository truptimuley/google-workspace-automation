// getDriveBlob(fileId)
function getDriveBlob(id) {
  try { return DriveApp.getFileById(id).getBlob(); }
  catch (e) { Logger.log("getDriveBlob err " + id); return null; }
}

// extract file id from various url patterns
function extractId(url) {
  if (!url) return null;
  var m = url.match(/\/d\/([a-zA-Z0-9_-]+)/);
  if (m) return m[1];
  m = url.match(/[?&]id=([a-zA-Z0-9_-]+)/);
  if (m) return m[1];
  if (/^[a-zA-Z0-9_-]{20,}$/.test(url)) return url;
  return null;
}

