# @awesome-algorand/nfd-fetch

Experimental package for fetching data from NF Domains api.

## Building the client

Generate the TypeScript client using HeyApi

```bash
npm run generate
```

Build the library using

```bash
npm run build
```

## Usage

Install the library

```bash
npm install @awesome-algorand/nfd-fetch  @hey-api/client-fetch --save
```

```typescript
import {nfdBrowse, type NfdRecordCollection} from "@awesome-algorand/nfd-fetch";

await nfdBrowse({limit: 10, offset: 0, sort: "asc", order: "id"}).then((data: NfdRecordCollection) => {
    console.log(data);
}, {baseUrl: "https://api.nf.domains"});
```
