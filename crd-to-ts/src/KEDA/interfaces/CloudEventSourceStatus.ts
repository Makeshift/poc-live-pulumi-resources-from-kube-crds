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

import { CloudEventSourceStatusConditions } from './CloudEventSourceStatusConditions';

/**
 * CloudEventSourceStatus defines the observed state of CloudEventSource
 *
 * @export
 */
export interface CloudEventSourceStatus {
  /** conditions
   * Condition to store the condition state
   *
   * @required {false}
   */
  conditions?: CloudEventSourceStatusConditions[];
}
