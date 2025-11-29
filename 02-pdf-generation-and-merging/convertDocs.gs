// convert all docs in a folder
function convertDocs() {
  const cfg = getConfig();
  const src = DriveApp.getFolderById(cfg.src);
  const dst = DriveApp.getFolderById(cfg.dst);

  const files = src.getFiles();
  while (files.hasNext()) {
    let f = files.next();
    f = resolveShortcut(f);

    if (f.getMimeType() !== MimeType.GOOGLE_DOCS) continue;

    const blob = f.getAs(MimeType.PDF);
    const name = cleanName(f.getName()) + ".pdf";

    deleteIfExists(dst, name);
    dst.createFile(blob).setName(name);
  }
}

