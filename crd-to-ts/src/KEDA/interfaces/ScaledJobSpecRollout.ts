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
 * Rollout defines the strategy for job rollouts
 *
 * @export
 */
export interface ScaledJobSpecRollout {
  /** propagationPolicy
   *
   * @required {false}
   */
  propagationPolicy?: string;
  /** strategy
   *
   * @required {false}
   */
  strategy?: string;
}
