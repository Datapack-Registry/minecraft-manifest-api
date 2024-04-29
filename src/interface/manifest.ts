import type { GetVersion } from './get_version.ts';

export interface Manifest {
  latestVersion : {
    release : string,
    snapshot : string
  },
  getVersion(id : string) : GetVersion,
  getAllVersions() : GetVersion[]
}
