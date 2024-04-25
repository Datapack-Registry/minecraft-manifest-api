import type { Artifact } from './artifact.ts';
import type { Rule } from './rule.ts';

export interface Library {
  downloads : {
    artifact : Artifact
  },
  name : string,
  rules? : Rule<'os'>[]
}
