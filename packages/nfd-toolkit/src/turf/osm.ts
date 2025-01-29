import {mutex, sleep} from "../async.js";

export const OSM_URL = "https://nominatim.openstreetmap.org/search?format=json&q=";

export type OpenStreetResponse = {
    place_id: number;
    licence: "Data © OpenStreetMap contributors, ODbL 1.0. http://osm.org/copyright";
    osm_type: string;
    osm_id: number;
    lat: string;
    lon: string;
    class: string;
    type: string;
    place_rank: number;
    importance: number;
    addresstype: string;
    name: string;
    display_name: string;
    boundingbox: string[];
};

const DEFAULT_USER_AGENT = "nfd-toolkit";
/**
 * Geocode address string
 * @param address
 * @param userAgent
 * @param log
 */
export async function geolocate(address: string, userAgent: string = DEFAULT_USER_AGENT, log: boolean = false): Promise<OpenStreetResponse> {
    const options = {
        headers: {
            "User-Agent": userAgent,
        },
    }
    return mutex.runExclusive(async () => {
        const url = `${OSM_URL}"${address}"`
        log && console.log(
            "Mutex Gained Lock",
            url,
        );
        const res = await fetch(
            `${OSM_URL}"${address}"`, options,
        ).then(async (r) => {
            if (r.status !== 200) {
                log && console.log(await r.text());
                const sleepSeconds = 3;
                log && console.log(`Rate limited, sleeping for ${sleepSeconds} seconds`);
                await sleep(sleepSeconds * 1000);
                log && console.log(
                    "Mutex Still Locked",
                    url,
                );
                return await fetch(
                    url, options,
                ).then((r) => r.json());
            } else {
                return r.json();
            }
        });

        // TODO: Refine the model
        if (res.length > 0 && res[0].importance > 0.5) {
            return res[0];
        } else {
            return {lat: "25", lon: "-40", name: "Unknown"};
        }
    });
}
