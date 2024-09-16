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

import { ScaledJobSpecJobTargetRefTemplateSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressions } from './ScaledJobSpecJobTargetRefTemplateSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressions';

/**
 * A label query over the set of namespaces that the term applies to.
The term is applied to the union of the namespaces selected by this field
and the ones listed in the namespaces field.
null selector and null or empty namespaces list means &quot;this pod&#39;s namespace&quot;.
An empty selector ({}) matches all namespaces.
 *
 * @export
 */
export interface ScaledJobSpecJobTargetRefTemplateSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelector {
  /** matchExpressions
   * A label selector requirement is a selector that contains values, a key, and an operator that
relates the key and values.
   *
   * @required {false}
   */
  matchExpressions?: ScaledJobSpecJobTargetRefTemplateSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressions[];
  /** matchLabels
   * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels
map is equivalent to an element of matchExpressions, whose key field is "key", the
operator is "In", and the values array contains only "value". The requirements are ANDed.
   *
   * @required {false}
   * @originalType {ScaledJobSpecJobTargetRefTemplateSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchLabels}
   */
  matchLabels?: {[key: string]: string};
}