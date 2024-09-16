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
 * ContainerResizePolicy represents resource resize policy for the container.
 *
 * @export
 */
export interface ScaledJobSpecJobTargetRefTemplateSpecContainersResizePolicy {
  /** resourceName
   * Name of the resource to which this resource resize policy applies.
Supported values: cpu, memory.
   *
   * @required {true}
   */
  resourceName: string;
  /** restartPolicy
   * Restart policy to apply when specified resource is resized.
If not specified, it defaults to NotRequired.
   *
   * @required {true}
   */
  restartPolicy: string;
}