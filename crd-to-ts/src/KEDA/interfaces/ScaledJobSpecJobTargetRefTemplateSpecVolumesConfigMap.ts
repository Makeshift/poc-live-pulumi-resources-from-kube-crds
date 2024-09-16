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

import { ScaledJobSpecJobTargetRefTemplateSpecVolumesConfigMapItems } from './ScaledJobSpecJobTargetRefTemplateSpecVolumesConfigMapItems';

/**
 * configMap represents a configMap that should populate this volume
 *
 * @export
 */
export interface ScaledJobSpecJobTargetRefTemplateSpecVolumesConfigMap {
  /** defaultMode
   * defaultMode is optional: mode bits used to set permissions on created files by default.
Must be an octal value between 0000 and 0777 or a decimal value between 0 and 511.
YAML accepts both octal and decimal values, JSON requires decimal values for mode bits.
Defaults to 0644.
Directories within the path are not affected by this setting.
This might be in conflict with other options that affect the file
mode, like fsGroup, and the result can be other mode bits set.
   *
   * @required {false}
   * @format {int32}
   * @originalType {integer}
   */
  defaultMode?: number;
  /** items
   * Maps a string key to a path within a volume.
   *
   * @required {false}
   */
  items?: ScaledJobSpecJobTargetRefTemplateSpecVolumesConfigMapItems[];
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