import {expect, test, describe} from 'vitest'
import {toFeatureCollection} from "./feature-collection";

import fullFixtures from '../../test/fixtures/full.fixtures.json'
import fullGolden from './feature-collection.test.full.golden.json'
// TODO: other fixtures
// import briefFixtures from '../fixtures/brief.fixtures.json'
// import tinyFixtures from '../fixtures/tiny.fixtures.json'
import {NfdRecordCollection} from "@awesome-algorand/nfd-fetch";
import {createMockFetch} from "../../test/mock";


describe("Feature Collection", () => {
    if(typeof process.env.INTEGRATION === 'undefined'){
        global.fetch = createMockFetch()
    }
    test("toFeatureCollection", async () => {
        expect(await toFeatureCollection([])).toEqual({
            "features": [],
            "type": "FeatureCollection",
        })
        expect(await toFeatureCollection(fullFixtures as unknown as NfdRecordCollection)).toEqual(fullGolden)
    }, 10000)


})

