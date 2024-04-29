import type { Version } from './interface/api/version.ts';
import type { GetVersion } from './interface/get_version.ts';
import type { VersionType } from './interface/version_type.ts';

export default function getVersion(versions : Version[]) : GetVersion {
  return {
    byId: (id : string) => versions.find((version) => version.id === id),
    byType: (type : VersionType) => versions.filter((version) => version.type === type),
    byTime: (time : Date) => versions.find((version) => version.time === time.toLocaleDateString()),
    byReleaseTime: (time : Date) => versions.find((version) => version.releaseTime === time.toLocaleDateString()),
    bySha1: (sha1 : string) => versions.find((version) => version.sha1 === sha1),
    byComplianceLevel: (complianceLevel : number) => versions.find((version) => version.complianceLevel === complianceLevel),
  }
}
