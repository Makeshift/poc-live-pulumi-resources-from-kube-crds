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

import { ScaledJobSpecJobTargetRefTemplateSpecContainersEnvFromConfigMapRef } from './ScaledJobSpecJobTargetRefTemplateSpecContainersEnvFromConfigMapRef';
import { ScaledJobSpecJobTargetRefTemplateSpecContainersEnvFromSecretRef } from './ScaledJobSpecJobTargetRefTemplateSpecContainersEnvFromSecretRef';

/**
 * EnvFromSource represents the source of a set of ConfigMaps
 *
 * @export
 */
export interface ScaledJobSpecJobTargetRefTemplateSpecContainersEnvFrom {
  /** configMapRef
   * The ConfigMap to select from
   *
   * @required {false}
   */
  configMapRef?: ScaledJobSpecJobTargetRefTemplateSpecContainersEnvFromConfigMapRef;
  /** prefix
   * An optional identifier to prepend to each key in the ConfigMap. Must be a C_IDENTIFIER.
   *
   * @required {false}
   */
  prefix?: string;
  /** secretRef
   * The Secret to select from
   *
   * @required {false}
   */
  secretRef?: ScaledJobSpecJobTargetRefTemplateSpecContainersEnvFromSecretRef;
}
