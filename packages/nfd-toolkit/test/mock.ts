import {vi} from 'vitest'
import {DEFAULT_IMAGE_URL} from "../src/constants.js";
import {DEFAULT_GATEWAY} from "@awesome-algorand/ipfs-toolkit";
import {OpenStreetResponse, OSM_URL} from "../src/turf/osm.js";

const ipfsMetadata: {[k: string]: {image: string}} = {
    "QmX29ZFav2SpJ7DXhXmLdZ22uKzV1WDycFy5VNLZib3EVE":{
       image:"ipfs://QmfEZK3nVHJGDQqjG8wEjrNMghQFdXygW8u7yyu2eVgtRu"
    },
}

const addresses: {[k: string]: Partial<OpenStreetResponse>} = {
    "Maryland, USA": {
        "lat": "39.5162401",
        "lon": "-76.9382069",
    },
    "Boulder, Colorado": {
        "lat": "40.0149856",
        "lon": "-105.270545",
    },
    "Sydney, Australia": {
        "lat": "-33.8698439",
        "lon": "151.2082848",
    },
    "~Poland": {
        "lat": "52.215933",
        "lon": "19.134422",
    },
    "Peru": {
        "lat": "-6.8699697",
        "lon": "-75.0458515",
    }
}
export function createMockFetch() {
    const mockFetch = vi.fn()
    mockFetch.mockImplementation(async (url: string) => {
        if(url.startsWith(DEFAULT_IMAGE_URL)){
            return {
                ok: true,
                status: 200,
                headers: new Headers({
                    "Content-Type": "image/png",
                }),
            }
        }
        // Handle IPFS Gateway and Image URL
        if(url.startsWith(DEFAULT_GATEWAY) && Object.keys(ipfsMetadata).some(cid => url.includes(cid))){
            const key = Object.keys(ipfsMetadata).find(cid => url.includes(cid))
            if(!key) throw new Error("Invalid CID")
            return {
                ok: true,
                status: 200,
                headers: new Headers({
                    "Content-Type": "application/json",
                }),
                json: async () => ipfsMetadata[key],
            }
        }else if(url.startsWith(DEFAULT_GATEWAY)){
            return {
                ok: true,
                status: 200,
                headers: new Headers({
                    "Content-Type": "image/png",
                }),
            }
        }

        // Handle OpenStreetMap API
        if (url.startsWith(OSM_URL)) {
            const address = url.split("q=")[1].replace(/"/g, "")
            const {lat, lon} = addresses[address]
            return {
                ok: true,
                status: 200,
                headers: new Headers({
                    "Content-Type": "application/json",
                }),
                json: async () => ([{
                    "lat": lat,
                    "lon": lon,
                    "importance": 0.6
                }]),
            }
        }
    })
    return mockFetch
}

