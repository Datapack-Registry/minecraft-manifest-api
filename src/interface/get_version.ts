import type { Version } from './api/version.ts';
import type { VersionType } from './version_type.ts';

export interface GetVersion {
  byId(id : string) : Version | undefined;
  byType(type : VersionType) : Version[];
  byTime(time : Date) : Version | undefined;
  byReleaseTime(time : Date) : Version | undefined;
  bySha1(sha1 : string) : Version | undefined;
  byComplianceLevel(complianceLevel : number) : Version | undefined;
}
