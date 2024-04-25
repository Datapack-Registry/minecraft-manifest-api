import type { Manifest } from './response_objects/manifest.ts';

export default function getManifestData(apiEndpoint: string) : Promise<Manifest> {
  return fetch(apiEndpoint).then((response) => response.json()) as Promise<Manifest>
}
