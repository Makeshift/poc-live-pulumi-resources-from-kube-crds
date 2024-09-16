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
 * persistentVolumeClaimVolumeSource represents a reference to a
PersistentVolumeClaim in the same namespace.
More info: https:&#x2F;&#x2F;kubernetes.io&#x2F;docs&#x2F;concepts&#x2F;storage&#x2F;persistent-volumes#persistentvolumeclaims
 *
 * @export
 */
export interface ScaledJobSpecJobTargetRefTemplateSpecVolumesPersistentVolumeClaim {
  /** claimName
   * claimName is the name of a PersistentVolumeClaim in the same namespace as the pod using this volume.
More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#persistentvolumeclaims
   *
   * @required {true}
   */
  claimName: string;
  /** readOnly
   * readOnly Will force the ReadOnly setting in VolumeMounts.
Default false.
   *
   * @required {false}
   */
  readOnly?: boolean;
}