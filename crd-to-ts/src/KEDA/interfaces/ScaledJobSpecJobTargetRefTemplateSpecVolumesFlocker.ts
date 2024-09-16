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
 * flocker represents a Flocker volume attached to a kubelet&#39;s host machine. This depends on the Flocker control service being running
 *
 * @export
 */
export interface ScaledJobSpecJobTargetRefTemplateSpecVolumesFlocker {
  /** datasetName
   * datasetName is Name of the dataset stored as metadata -> name on the dataset for Flocker
should be considered as deprecated
   *
   * @required {false}
   */
  datasetName?: string;
  /** datasetUUID
   * datasetUUID is the UUID of the dataset. This is unique identifier of a Flocker dataset
   *
   * @required {false}
   */
  datasetUUID?: string;
}