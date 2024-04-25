import type { Rule } from './rule.ts';
import type { RuleType } from './rule_type.ts';

export interface Argument<Type extends RuleType> {
  rules : Rule<Type>[],
  value : string | string[]
}
