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
 * GroupVersionKindResource provides unified structure for schema.GroupVersionKind and Resource
 *
 * @export
 */
export interface ScaledObjectStatusScaleTargetGVKR {
  /** group
   *
   * @required {true}
   */
  group: string;
  /** kind
   *
   * @required {true}
   */
  kind: string;
  /** resource
   *
   * @required {true}
   */
  resource: string;
  /** version
   *
   * @required {true}
   */
  version: string;
}