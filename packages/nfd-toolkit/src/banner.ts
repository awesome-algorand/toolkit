import type {NFDProperties} from "@awesome-algorand/nfd-fetch";
import {toImageUrl, isIPFSUrl, DEFAULT_GATEWAY} from "@awesome-algorand/ipfs-toolkit";


export function isVerified(properties?: NFDProperties): boolean {
    return typeof properties?.verified?.banner === "string"
}


export function isUserDefined(properties?: NFDProperties): boolean {
    return typeof properties?.userDefined?.banner === "string";
}

export function isSet(properties?: NFDProperties): boolean {
    return isVerified(properties) || isUserDefined(properties);
}


/**
 * Retrieves the URL of an avatar image based on the provided properties.
 *
 * @param {NFDProperties} properties - The properties object containing avatar-related data.
 * @param {string} [ipfsGateway=DEFAULT_GATEWAY] - The IPFS gateway URL to be used for fetching images.
 * @return {Promise<string>} A promise that resolves with the avatar image URL as a string.
 * @throws {TypeError} If the avatar URL is not set.
 * @throws {Error} If the fetched IPFS URL is invalid or if the content type is unsupported.
 */
export async function getUrl(properties?: NFDProperties, ipfsGateway: string = DEFAULT_GATEWAY): Promise<string> {
    if(!isSet(properties)) {
        throw new TypeError("No banner URL set, use isSet to check if the avatar is defined.");
    }
    if (isVerified(properties) && isIPFSUrl(properties?.verified?.banner as string)) {
        return await toImageUrl(properties?.verified?.banner as string, ipfsGateway);
    }

    if (isUserDefined(properties) && isIPFSUrl(properties?.userDefined?.banner as string)) {
        return await toImageUrl(properties?.userDefined?.banner as string, ipfsGateway);
    }

    // Fetch the image URL
    const url = properties?.verified?.banner as string || properties?.userDefined?.banner as string
    const resp = await fetch(url);
    if (!resp.ok) {
        throw new Error(`Failed to fetch IPFS URL: ${url}`);
    }

    // Determine the content type
    const contentType = resp.headers.get("Content-Type");
    if(!contentType) {
        throw new Error(`Failed to determine content type for IPFS URL: ${url}`);
    }

    // Return the image URL
    if (contentType.startsWith("image/")) {
        return url;
    }

    // Fail if the content type is not supported
    throw new Error("Failed to determine banner URL.");
}
