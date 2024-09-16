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
 * secretRef specifies the secret to use for obtaining the StorageOS API
credentials.  If not specified, default values will be attempted.
 *
 * @export
 */
export interface ScaledJobSpecJobTargetRefTemplateSpecVolumesStorageosSecretRef {
  /** name
   * Name of the referent.
More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
TODO: Add other useful fields. apiVersion, kind, uid?
   *
   * @required {false}
   */
  name?: string;
}