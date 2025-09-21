[**patreon-dl**](../README.md)

***

[patreon-dl](../README.md) / DownloadTaskSkipReason

# Type Alias: DownloadTaskSkipReason

> **DownloadTaskSkipReason** = `object` & \{ `existingDestFilePath`: `string`; `name`: `"destFileExists"`; \} \| \{ `destFilename`: `string`; `itemType`: `"image"` \| `"audio"` \| `"attachment"`; `name`: `"includeMediaByFilenameUnfulfilled"`; `pattern`: `string`; \} \| \{ `name`: `"dependentTaskNotCompleted"`; \} \| \{ `name`: `"other"`; \}

Defined in: [src/downloaders/task/DownloadTask.ts:25](https://github.com/patrickkfkan/patreon-dl/blob/faebc79e7105b755ed4bb91829b93f102ad3b38c/src/downloaders/task/DownloadTask.ts#L25)

## Type declaration

### message

> **message**: `string`
