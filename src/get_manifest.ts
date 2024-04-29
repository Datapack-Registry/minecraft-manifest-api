import apiEndpoints from './api/api_endpoints.ts';
import fetchManifest from './api/fetch_manifest.ts';
import getVersion from './get_version.ts';
import type { Manifest } from './interface/manifest.ts';

export default async function getManifest(apiEndpoint : string = apiEndpoints.PISTON_META) : Promise<Manifest> {
  const data = await fetchManifest(apiEndpoint);

  return {
    latestVersion: data.latest,
    getVersion: (id : string) => getVersion(data.versions),
    getAllVersions: () => {}
    
  }
}
