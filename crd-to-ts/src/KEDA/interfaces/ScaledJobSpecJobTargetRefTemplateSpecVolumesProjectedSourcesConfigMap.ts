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

import { ScaledJobSpecJobTargetRefTemplateSpecVolumesProjectedSourcesConfigMapItems } from './ScaledJobSpecJobTargetRefTemplateSpecVolumesProjectedSourcesConfigMapItems';

/**
 * configMap information about the configMap data to project
 *
 * @export
 */
export interface ScaledJobSpecJobTargetRefTemplateSpecVolumesProjectedSourcesConfigMap {
  /** items
   * Maps a string key to a path within a volume.
   *
   * @required {false}
   */
  items?: ScaledJobSpecJobTargetRefTemplateSpecVolumesProjectedSourcesConfigMapItems[];
  /** name
   * Name of the referent.
More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
TODO: Add other useful fields. apiVersion, kind, uid?
   *
   * @required {false}
   */
  name?: string;
  /** optional
   * optional specify whether the ConfigMap or its keys must be defined
   *
   * @required {false}
   */
  optional?: boolean;
}