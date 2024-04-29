import  FetchError from '../error/fetch_error.ts';
import { JsonParseError } from '../error/json_parse_error.ts';
import type { Manifest } from '../response_objects/manifest.ts';

/**
 * This function fetches the manifest from the API and returns the parsed data.
 * 
 * @param apiEndpoint The URL of the API endpoint
 * @returns A promise that resolves to the parsed manifest
 */
export default function fetchManifest(apiEndpoint : string) : Promise<Manifest> {
  return fetch(apiEndpoint).then((response) => {
    if (response.ok) {
      try {
        return response.json() as Promise<Manifest>;
      } catch (error) {
        throw new JsonParseError(error as SyntaxError);
      }
    }

    throw new FetchError(
      response.url,
      response.status
    );
  })
}
