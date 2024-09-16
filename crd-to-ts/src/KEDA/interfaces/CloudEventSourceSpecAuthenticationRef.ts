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
 * AuthenticationRef points to the TriggerAuthentication or ClusterTriggerAuthentication object that
is used to authenticate the scaler with the environment
 *
 * @export
 */
export interface CloudEventSourceSpecAuthenticationRef {
  /** kind
   * Kind of the resource being referred to. Defaults to TriggerAuthentication.
   *
   * @required {false}
   */
  kind?: string;
  /** name
   *
   * @required {true}
   */
  name: string;
}
