import {NfdRecordCollection} from "@awesome-algorand/nfd-fetch";
import type { FeatureCollection, Feature, Point } from "geojson";
import {NfdGeoProperties, toProperties} from "./properties.js";
import {toPosition} from "./position.js";

/**
 * Converts an NfdRecordCollection and a cache of existing features into a GeoJSON FeatureCollection.
 *
 * @param {NfdRecordCollection} nfd - The collection of NFD records to be transformed into a FeatureCollection.
 * @param {Feature<Point, NfdGeoProperties>[]} cache - An array of cached GeoJSON features used to optimize processing and avoid redundant data retrieval.
 * @return {Promise<FeatureCollection<Point, NfdGeoProperties>>} A promise that resolves to a GeoJSON FeatureCollection containing features derived from the input NFD records.
 */
export async function toFeatureCollection(nfd: NfdRecordCollection, cache: Feature<Point, NfdGeoProperties>[] = []): Promise<FeatureCollection<Point, NfdGeoProperties>>{
    return {
        type: "FeatureCollection",
        features: await Promise.all(
            nfd.map(async (record) => {
                const results = cache.find((point) => point.properties && point.properties.name === record.name);
                let position = typeof results !== 'undefined' ? results.geometry.coordinates : await toPosition(record?.properties);
                return {
                    type: "Feature",
                    geometry: {
                        type: "Point",
                        coordinates: position,
                    },
                    properties: await toProperties(record),
                };
            }),
        ),
    };
}
