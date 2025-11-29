# Drive Utilities - examples

1. Create a sheet named `Drive Tools`.
2. Put a source folder ID in cell B1.
3. Run `listFilesInFolder()` to populate `Folder Files`.
4. Use `Drive Move` sheet with columns: FileId, NewName, DestFolderId to rename/move files and run `applyMoveRename()`.
5. To find shortcuts in folder run `resolveShortcutsInFolder()` (enable Advanced Drive Service first).
6. Run `exportFolderMetadata()` to create `Drive Metadata` sheet for audits.
