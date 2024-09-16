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

import { ScaledJobSpecJobTargetRefTemplateSpecContainersEnvValueFromConfigMapKeyRef } from './ScaledJobSpecJobTargetRefTemplateSpecContainersEnvValueFromConfigMapKeyRef';
import { ScaledJobSpecJobTargetRefTemplateSpecContainersEnvValueFromFieldRef } from './ScaledJobSpecJobTargetRefTemplateSpecContainersEnvValueFromFieldRef';
import { ScaledJobSpecJobTargetRefTemplateSpecContainersEnvValueFromResourceFieldRef } from './ScaledJobSpecJobTargetRefTemplateSpecContainersEnvValueFromResourceFieldRef';
import { ScaledJobSpecJobTargetRefTemplateSpecContainersEnvValueFromSecretKeyRef } from './ScaledJobSpecJobTargetRefTemplateSpecContainersEnvValueFromSecretKeyRef';

/**
 * Source for the environment variable&#39;s value. Cannot be used if value is not empty.
 *
 * @export
 */
export interface ScaledJobSpecJobTargetRefTemplateSpecContainersEnvValueFrom {
  /** configMapKeyRef
   * Selects a key of a ConfigMap.
   *
   * @required {false}
   */
  configMapKeyRef?: ScaledJobSpecJobTargetRefTemplateSpecContainersEnvValueFromConfigMapKeyRef;
  /** fieldRef
   * Selects a field of the pod: supports metadata.name, metadata.namespace, `metadata.labels['<KEY>']`, `metadata.annotations['<KEY>']`,
spec.nodeName, spec.serviceAccountName, status.hostIP, status.podIP, status.podIPs.
   *
   * @required {false}
   */
  fieldRef?: ScaledJobSpecJobTargetRefTemplateSpecContainersEnvValueFromFieldRef;
  /** resourceFieldRef
   * Selects a resource of the container: only resources limits and requests
(limits.cpu, limits.memory, limits.ephemeral-storage, requests.cpu, requests.memory and requests.ephemeral-storage) are currently supported.
   *
   * @required {false}
   */
  resourceFieldRef?: ScaledJobSpecJobTargetRefTemplateSpecContainersEnvValueFromResourceFieldRef;
  /** secretKeyRef
   * Selects a key of a secret in the pod's namespace
   *
   * @required {false}
   */
  secretKeyRef?: ScaledJobSpecJobTargetRefTemplateSpecContainersEnvValueFromSecretKeyRef;
}