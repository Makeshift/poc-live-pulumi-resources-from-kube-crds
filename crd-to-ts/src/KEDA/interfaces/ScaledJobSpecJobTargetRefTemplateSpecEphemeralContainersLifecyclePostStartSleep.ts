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
 * Sleep represents the duration that the container should sleep before being terminated.
 *
 * @export
 */
export interface ScaledJobSpecJobTargetRefTemplateSpecEphemeralContainersLifecyclePostStartSleep {
  /** seconds
   * Seconds is the number of seconds to sleep.
   *
   * @required {true}
   * @format {int64}
   * @originalType {integer}
   */
  seconds: number;
}
