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
 * ScaleTarget holds the reference to the scale target Object
 *
 * @export
 */
export interface ScaledObjectSpecScaleTargetRef {
  /** apiVersion
   *
   * @required {false}
   */
  apiVersion?: string;
  /** envSourceContainerName
   *
   * @required {false}
   */
  envSourceContainerName?: string;
  /** kind
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
