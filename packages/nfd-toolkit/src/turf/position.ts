import type { Position } from "geojson";
import {geolocate} from "./osm.js";
import {NFDProperties} from "@awesome-algorand/nfd-fetch";

export async function toPosition(properties?: NFDProperties): Promise<Position>{
    if(typeof properties?.userDefined?.address !== "string"){
        // Middle of the ocean
        return [-40,25];
    }
    // Try to find the position
    const osm = await geolocate(properties.userDefined.address);
    return [parseFloat(osm.lon), parseFloat(osm.lat)];
}
