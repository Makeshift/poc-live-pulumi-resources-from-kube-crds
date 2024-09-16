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

import { ScaledJobSpecJobTargetRefTemplateSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector } from './ScaledJobSpecJobTargetRefTemplateSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector';
import { ScaledJobSpecJobTargetRefTemplateSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelector } from './ScaledJobSpecJobTargetRefTemplateSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelector';

/**
 * Required. A pod affinity term, associated with the corresponding weight.
 *
 * @export
 */
export interface ScaledJobSpecJobTargetRefTemplateSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm {
  /** labelSelector
   * A label query over a set of resources, in this case pods.
If it's null, this PodAffinityTerm matches with no Pods.
   *
   * @required {false}
   */
  labelSelector?: ScaledJobSpecJobTargetRefTemplateSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector;
  /** matchLabelKeys
   *
   * @required {false}
   */
  matchLabelKeys?: string[];
  /** mismatchLabelKeys
   *
   * @required {false}
   */
  mismatchLabelKeys?: string[];
  /** namespaceSelector
   * A label query over the set of namespaces that the term applies to.
The term is applied to the union of the namespaces selected by this field
and the ones listed in the namespaces field.
null selector and null or empty namespaces list means "this pod's namespace".
An empty selector ({}) matches all namespaces.
   *
   * @required {false}
   */
  namespaceSelector?: ScaledJobSpecJobTargetRefTemplateSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelector;
  /** namespaces
   *
   * @required {false}
   */
  namespaces?: string[];
  /** topologyKey
   * This pod should be co-located (affinity) or not co-located (anti-affinity) with the pods matching
the labelSelector in the specified namespaces, where co-located is defined as running on a node
whose value of the label with key topologyKey matches that of any node on which any of the
selected pods is running.
Empty topologyKey is not allowed.
   *
   * @required {true}
   */
  topologyKey: string;
}
