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
 * HTTPHeader describes a custom header to be used in HTTP probes
 *
 * @export
 */
export interface ScaledJobSpecJobTargetRefTemplateSpecContainersLivenessProbeHttpGetHttpHeaders {
  /** name
   * The header field name.
This will be canonicalized upon output, so case-variant names will be understood as the same header.
   *
   * @required {true}
   */
  name: string;
  /** value
   * The header field value
   *
   * @required {true}
   */
  value: string;
}
