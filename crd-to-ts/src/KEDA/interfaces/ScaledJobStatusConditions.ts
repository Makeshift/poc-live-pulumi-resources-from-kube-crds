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
 * Condition to store the condition state
 *
 * @export
 */
export interface ScaledJobStatusConditions {
  /** message
   * A human readable message indicating details about the transition.
   *
   * @required {false}
   */
  message?: string;
  /** reason
   * The reason for the condition's last transition.
   *
   * @required {false}
   */
  reason?: string;
  /** status
   * Status of the condition, one of True, False, Unknown.
   *
   * @required {true}
   */
  status: string;
  /** type
   * Type of condition
   *
   * @required {true}
   */
  type: string;
}
