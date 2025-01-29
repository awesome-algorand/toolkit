import {type NfdRecord} from "@awesome-algorand/nfd-fetch";
import * as banner from "../banner.js";
import * as avatar from "../avatar.js";

const DEFAULT_COLOR = "#ff602e";

export type NfdImageRecord = {
    url: string;
    verified: boolean;
}

export type NfdGeoProperties = {
    name: string;
    "marker-color": string;
    timeChanged?: string;
    avatar?: NfdImageRecord
    banner?: NfdImageRecord
}

export async function toProperties(nfd: NfdRecord) {
    // Default properties
    const properties: NfdGeoProperties = {
        name: nfd.name,
        "marker-color": DEFAULT_COLOR,
        timeChanged: nfd.timeChanged,
    }
    // If the properties are not defined, return the default properties
    if(typeof nfd.properties === "undefined") {
        return properties
    }

    // Check if the avatar is set
    if(avatar.isSet(nfd.properties)) {
        properties.avatar = {
            verified: avatar.isVerified(nfd.properties),
            url: await avatar.getUrl(nfd.properties),
        }
    }

    // Check if the banner is set
    if(banner.isSet(nfd.properties)) {
        properties.banner = {
            verified: banner.isVerified(nfd.properties),
            url: await banner.getUrl(nfd.properties),
        }
    }

    return properties
}
