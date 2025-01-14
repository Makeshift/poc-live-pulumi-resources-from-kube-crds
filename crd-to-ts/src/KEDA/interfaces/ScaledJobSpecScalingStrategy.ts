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
 * ScalingStrategy defines the strategy of Scaling
 *
 * @export
 */
export interface ScaledJobSpecScalingStrategy {
  /** customScalingQueueLengthDeduction
   *
   * @required {false}
   * @format {int32}
   * @originalType {integer}
   */
  customScalingQueueLengthDeduction?: number;
  /** customScalingRunningJobPercentage
   *
   * @required {false}
   */
  customScalingRunningJobPercentage?: string;
  /** multipleScalersCalculation
   *
   * @required {false}
   */
  multipleScalersCalculation?: string;
  /** pendingPodConditions
   *
   * @required {false}
   */
  pendingPodConditions?: string[];
  /** strategy
   *
   * @required {false}
   */
  strategy?: string;
}
