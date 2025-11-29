// resolve drive shortcut to real file
function resolveShortcut(file) {
  if (file.getMimeType() !== MimeType.SHORTCUT) return file;

  const data = Drive.Files.get(file.getId());
  const id = data.shortcutDetails?.targetId;
  if (!id) return file;

  return DriveApp.getFileById(id);
}
