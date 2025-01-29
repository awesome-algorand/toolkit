import {bench, describe, expect} from "vitest";
import {toFeatureCollection} from "./feature-collection";

import fullFixtures from "../../test/fixtures/full.fixtures.json";
import tinyFixtures from "../../test/fixtures/tiny.fixtures.json";
import briefFixtures from "../../test/fixtures/brief.fixtures.json";

import {NfdRecordCollection} from "@awesome-algorand/nfd-fetch";
import {createMockFetch} from "../../test/mock";

describe("Feature Collection", () => {
    if(typeof process.env.INTEGRATION === 'undefined'){
        global.fetch = createMockFetch()
    }
    bench("empty input", async () => {
        await toFeatureCollection([])
    })
    bench("full fixture", async () => {
        await toFeatureCollection(fullFixtures as NfdRecordCollection)
    });
    bench("tiny fixture", async () => {
        await toFeatureCollection(tinyFixtures as NfdRecordCollection)
    });
    bench("brief fixture", async () => {
        await toFeatureCollection(briefFixtures as NfdRecordCollection)
    });
});
