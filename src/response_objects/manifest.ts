import type { Version } from './version.ts';

export interface Manifest {
  latest : {
    release : string,
    snapshot : string
  },
  versions : Version[]
}
