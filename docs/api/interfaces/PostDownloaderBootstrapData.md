[**patreon-dl**](../README.md)

***

[patreon-dl](../README.md) / PostDownloaderBootstrapData

# Interface: PostDownloaderBootstrapData

Defined in: [src/downloaders/Bootstrap.ts:17](https://github.com/patrickkfkan/patreon-dl/blob/faebc79e7105b755ed4bb91829b93f102ad3b38c/src/downloaders/Bootstrap.ts#L17)

## Extends

- [`BootstrapData`](BootstrapData.md)

## Properties

### postFetch

> **postFetch**: \{ `postId`: `string`; `type`: `"single"`; \} \| \{ `filters?`: `Record`\<`string`, `any`\>; `type`: `"byUser"`; `vanity`: `string`; \} \| \{ `filters?`: `Record`\<`string`, `any`\>; `type`: `"byUserId"`; `userId`: `string`; \} \| \{ `collectionId`: `string`; `filters?`: `Record`\<`string`, `any`\>; `type`: `"byCollection"`; \}

Defined in: [src/downloaders/Bootstrap.ts:19](https://github.com/patrickkfkan/patreon-dl/blob/faebc79e7105b755ed4bb91829b93f102ad3b38c/src/downloaders/Bootstrap.ts#L19)

***

### targetURL

> **targetURL**: `string`

Defined in: [src/downloaders/Bootstrap.ts:9](https://github.com/patrickkfkan/patreon-dl/blob/faebc79e7105b755ed4bb91829b93f102ad3b38c/src/downloaders/Bootstrap.ts#L9)

#### Inherited from

[`BootstrapData`](BootstrapData.md).[`targetURL`](BootstrapData.md#targeturl)

***

### type

> **type**: `"post"`

Defined in: [src/downloaders/Bootstrap.ts:18](https://github.com/patrickkfkan/patreon-dl/blob/faebc79e7105b755ed4bb91829b93f102ad3b38c/src/downloaders/Bootstrap.ts#L18)

#### Overrides

[`BootstrapData`](BootstrapData.md).[`type`](BootstrapData.md#type)
