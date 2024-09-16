// @ts-nocheck
/**
 * 
 * 
 *
 * The version of the OpenAPI document: 
 * Contact Email: 
 * License: 
 *
 * NOTE: This file is auto generated by crdtotypes (https://github.com/yaacov/crdtoapi/).
 * https://github.com/yaacov/crdtoapi/README.crdtotypes
 */

import { ScaledJobSpecJobTargetRefSelectorMatchExpressions } from './ScaledJobSpecJobTargetRefSelectorMatchExpressions';

/**
 * A label query over pods that should match the pod count.
Normally, the system sets this field for you.
More info: https:&#x2F;&#x2F;kubernetes.io&#x2F;docs&#x2F;concepts&#x2F;overview&#x2F;working-with-objects&#x2F;labels&#x2F;#label-selectors
 *
 * @export
 */
export interface ScaledJobSpecJobTargetRefSelector {
  /** matchExpressions
   * A label selector requirement is a selector that contains values, a key, and an operator that
relates the key and values.
   *
   * @required {false}
   */
  matchExpressions?: ScaledJobSpecJobTargetRefSelectorMatchExpressions[];
  /** matchLabels
   * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels
map is equivalent to an element of matchExpressions, whose key field is "key", the
operator is "In", and the values array contains only "value". The requirements are ANDed.
   *
   * @required {false}
   * @originalType {ScaledJobSpecJobTargetRefSelectorMatchLabels}
   */
  matchLabels?: {[key: string]: string};
}
