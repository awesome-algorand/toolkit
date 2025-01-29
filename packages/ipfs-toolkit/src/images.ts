import {DEFAULT_GATEWAY} from "./constants";

/**
 * Checks if the given URL is an IPFS URL.
 *
 * @param {string} url - The URL to be evaluated.
 * @return {boolean} Returns true if the URL starts with "ipfs://", otherwise false.
 */
export function isIPFSUrl(url: string): boolean {
    return url.startsWith("ipfs://");
}

/**
 * Finds ARC/Image Metadata
 *
 * Searches for the image metadata in the JSON response.
 *
 * @param {string} cidUrl The CID URL to fetch the image metadata from.
 * @param {string} [ipfsGateway] The IPFS gateway to use for fetching the image metadata.
 * @return {Promise<string>} A promise that resolves to the URL of the image.
 * @throws {TypeError} Thrown if the URL is not an IPFS URL.
 * @throws {Error} Thrown if the image metadata cannot be found.
 * @throws {Error} Thrown if the content type is not supported.
 */
export async function toImageUrl(cidUrl: string, ipfsGateway: string = DEFAULT_GATEWAY): Promise<string> {
  if(!isIPFSUrl(cidUrl)) {
    throw new TypeError("Invalid IPFS URL");
  }

  let url = cidUrl.replace("ipfs://", ipfsGateway);

  // Handle the fetch
  const resp = await fetch(url);
  if(!resp.ok) {
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

  if (contentType == "application/json") {
    const json = await resp.json();
    // Assume the image is in the image field
    if (typeof json.image === "string" && isIPFSUrl(json.image)) {
      return json.image.replace("ipfs://", ipfsGateway);
    }
    throw new Error(`Failed to find image URL in JSON response: ${url}`);
  }

  throw new Error(`Not implemented: ${contentType}`);
}
