// deno-lint-ignore-file camelcase
import type { Argument } from './argument.ts';
import type { Asset } from './asset.ts';
import type { FileObject } from './file_object.ts';
import type { Artifact } from './artifact.ts';
import type { Library } from './library.ts';

export interface Package {
  arguments : {
    game : (string | Argument<'feature'>)[],
    jvm : (string | Argument<'os'>)[]
  },
  assetIndex : Asset,
  assets : string,
  complianceLevel : number,
  downloads : {
    client : FileObject
    client_mappings : FileObject
    server : FileObject
    server_mappings : FileObject
  },
  id : string,
  javaVersion : {
    component : string,
    majorVersion : number
  },
  libraries : Library[],
  logging : {
    client : {
      argument : string
      file : Artifact
      type : string
    }
  },
  mainClass : string,
  minimumLauncherVersion : number,
  releaseTime : string,
  time : string,
  type : string
}
