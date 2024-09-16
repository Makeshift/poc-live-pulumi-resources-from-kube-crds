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

import { ScaledJobSpecJobTargetRefTemplateSpecVolumesDownwardAPIItems } from './ScaledJobSpecJobTargetRefTemplateSpecVolumesDownwardAPIItems';

/**
 * downwardAPI represents downward API about the pod that should populate this volume
 *
 * @export
 */
export interface ScaledJobSpecJobTargetRefTemplateSpecVolumesDownwardAPI {
  /** defaultMode
   * Optional: mode bits to use on created files by default. Must be a
Optional: mode bits used to set permissions on created files by default.
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
   * DownwardAPIVolumeFile represents information to create the file containing the pod field
   *
   * @required {false}
   */
  items?: ScaledJobSpecJobTargetRefTemplateSpecVolumesDownwardAPIItems[];
}
