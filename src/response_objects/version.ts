import type { VersionType } from './version_type.ts';

export interface Version {
  id : string,
  type : VersionType,
  url : string,
  time : string,
  releaseTime : string,
  sha1 : string,
  complianceLevel : number
}
