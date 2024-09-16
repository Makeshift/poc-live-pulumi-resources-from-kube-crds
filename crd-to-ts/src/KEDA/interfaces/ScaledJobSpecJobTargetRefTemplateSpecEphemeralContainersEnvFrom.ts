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

import { ScaledJobSpecJobTargetRefTemplateSpecEphemeralContainersEnvFromConfigMapRef } from './ScaledJobSpecJobTargetRefTemplateSpecEphemeralContainersEnvFromConfigMapRef';
import { ScaledJobSpecJobTargetRefTemplateSpecEphemeralContainersEnvFromSecretRef } from './ScaledJobSpecJobTargetRefTemplateSpecEphemeralContainersEnvFromSecretRef';

/**
 * EnvFromSource represents the source of a set of ConfigMaps
 *
 * @export
 */
export interface ScaledJobSpecJobTargetRefTemplateSpecEphemeralContainersEnvFrom {
  /** configMapRef
   * The ConfigMap to select from
   *
   * @required {false}
   */
  configMapRef?: ScaledJobSpecJobTargetRefTemplateSpecEphemeralContainersEnvFromConfigMapRef;
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
  secretRef?: ScaledJobSpecJobTargetRefTemplateSpecEphemeralContainersEnvFromSecretRef;
}