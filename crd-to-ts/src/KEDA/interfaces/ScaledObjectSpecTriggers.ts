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

import { ScaledObjectSpecTriggersAuthenticationRef } from './ScaledObjectSpecTriggersAuthenticationRef';

/**
 * ScaleTriggers reference the scaler that will be used
 *
 * @export
 */
export interface ScaledObjectSpecTriggers {
  /** authenticationRef
   * AuthenticationRef points to the TriggerAuthentication or ClusterTriggerAuthentication object that
is used to authenticate the scaler with the environment
   *
   * @required {false}
   */
  authenticationRef?: ScaledObjectSpecTriggersAuthenticationRef;
  /** metadata
   *
   * @required {true}
   * @originalType {ScaledObjectSpecTriggersMetadata}
   */
  metadata: {[key: string]: string};
  /** metricType
   * MetricTargetType specifies the type of metric being targeted, and should be either
"Value", "AverageValue", or "Utilization"
   *
   * @required {false}
   */
  metricType?: string;
  /** name
   *
   * @required {false}
   */
  name?: string;
  /** type
   *
   * @required {true}
   */
  type: string;
  /** useCachedMetrics
   *
   * @required {false}
   */
  useCachedMetrics?: boolean;
}
