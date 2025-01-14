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

/**
 * resources represents the minimum resources the volume should have.
If RecoverVolumeExpansionFailure feature is enabled users are allowed to specify resource requirements
that are lower than previous value but must still be higher than capacity recorded in the
status field of the claim.
More info: https:&#x2F;&#x2F;kubernetes.io&#x2F;docs&#x2F;concepts&#x2F;storage&#x2F;persistent-volumes#resources
 *
 * @export
 */
export interface ScaledJobSpecJobTargetRefTemplateSpecVolumesEphemeralVolumeClaimTemplateSpecResources {
  /** limits
   * Limits describes the maximum amount of compute resources allowed.
More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
   *
   * @required {false}
   */
  limits?: ScaledJobSpecJobTargetRefTemplateSpecVolumesEphemeralVolumeClaimTemplateSpecResourcesLimits;
  /** requests
   * Requests describes the minimum amount of compute resources required.
If Requests is omitted for a container, it defaults to Limits if that is explicitly specified,
otherwise to an implementation-defined value. Requests cannot exceed Limits.
More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
   *
   * @required {false}
   */
  requests?: ScaledJobSpecJobTargetRefTemplateSpecVolumesEphemeralVolumeClaimTemplateSpecResourcesRequests;
}
