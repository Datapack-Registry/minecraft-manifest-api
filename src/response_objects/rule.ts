import type { RuleType } from './rule_type.ts';

export type Rule<Type extends RuleType> = {
  [key in Type]: {
    [key: string]: boolean | string;
  }
} & { action: string; };
