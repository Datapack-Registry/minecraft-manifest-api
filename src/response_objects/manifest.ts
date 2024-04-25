import type { Latest } from './latest.ts';
import type { Version } from './version.ts';

export interface Manifest {
  latest : Latest,
  versions : Version[]
}
