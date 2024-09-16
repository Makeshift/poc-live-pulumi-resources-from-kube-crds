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

import { ScaledJobSpecJobTargetRef } from './ScaledJobSpecJobTargetRef';
import { ScaledJobSpecRollout } from './ScaledJobSpecRollout';
import { ScaledJobSpecScalingStrategy } from './ScaledJobSpecScalingStrategy';
import { ScaledJobSpecTriggers } from './ScaledJobSpecTriggers';

/**
 * ScaledJobSpec defines the desired state of ScaledJob
 *
 * @export
 */
export interface ScaledJobSpec {
  /** envSourceContainerName
   *
   * @required {false}
   */
  envSourceContainerName?: string;
  /** failedJobsHistoryLimit
   *
   * @required {false}
   * @format {int32}
   * @originalType {integer}
   */
  failedJobsHistoryLimit?: number;
  /** jobTargetRef
   * JobSpec describes how the job execution will look like.
   *
   * @required {true}
   */
  jobTargetRef: ScaledJobSpecJobTargetRef;
  /** maxReplicaCount
   *
   * @required {false}
   * @format {int32}
   * @originalType {integer}
   */
  maxReplicaCount?: number;
  /** minReplicaCount
   *
   * @required {false}
   * @format {int32}
   * @originalType {integer}
   */
  minReplicaCount?: number;
  /** pollingInterval
   *
   * @required {false}
   * @format {int32}
   * @originalType {integer}
   */
  pollingInterval?: number;
  /** rollout
   * Rollout defines the strategy for job rollouts
   *
   * @required {false}
   */
  rollout?: ScaledJobSpecRollout;
  /** rolloutStrategy
   *
   * @required {false}
   */
  rolloutStrategy?: string;
  /** scalingStrategy
   * ScalingStrategy defines the strategy of Scaling
   *
   * @required {false}
   */
  scalingStrategy?: ScaledJobSpecScalingStrategy;
  /** successfulJobsHistoryLimit
   *
   * @required {false}
   * @format {int32}
   * @originalType {integer}
   */
  successfulJobsHistoryLimit?: number;
  /** triggers
   * ScaleTriggers reference the scaler that will be used
   *
   * @required {true}
   */
  triggers: ScaledJobSpecTriggers[];
}
