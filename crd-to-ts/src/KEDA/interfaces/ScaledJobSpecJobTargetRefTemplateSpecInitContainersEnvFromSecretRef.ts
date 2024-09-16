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
 * The Secret to select from
 *
 * @export
 */
export interface ScaledJobSpecJobTargetRefTemplateSpecInitContainersEnvFromSecretRef {
  /** name
   * Name of the referent.
More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
TODO: Add other useful fields. apiVersion, kind, uid?
   *
   * @required {false}
   */
  name?: string;
  /** optional
   * Specify whether the Secret must be defined
   *
   * @required {false}
   */
  optional?: boolean;
}
