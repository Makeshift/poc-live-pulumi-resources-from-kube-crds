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

import { TriggerAuthenticationSpecAwsSecretManager } from './TriggerAuthenticationSpecAwsSecretManager';
import { TriggerAuthenticationSpecAzureKeyVault } from './TriggerAuthenticationSpecAzureKeyVault';
import { TriggerAuthenticationSpecConfigMapTargetRef } from './TriggerAuthenticationSpecConfigMapTargetRef';
import { TriggerAuthenticationSpecEnv } from './TriggerAuthenticationSpecEnv';
import { TriggerAuthenticationSpecGcpSecretManager } from './TriggerAuthenticationSpecGcpSecretManager';
import { TriggerAuthenticationSpecHashiCorpVault } from './TriggerAuthenticationSpecHashiCorpVault';
import { TriggerAuthenticationSpecPodIdentity } from './TriggerAuthenticationSpecPodIdentity';
import { TriggerAuthenticationSpecSecretTargetRef } from './TriggerAuthenticationSpecSecretTargetRef';

/**
 * TriggerAuthenticationSpec defines the various ways to authenticate
 *
 * @export
 */
export interface TriggerAuthenticationSpec {
  /** awsSecretManager
   * AwsSecretManager is used to authenticate using AwsSecretManager
   *
   * @required {false}
   */
  awsSecretManager?: TriggerAuthenticationSpecAwsSecretManager;
  /** azureKeyVault
   * AzureKeyVault is used to authenticate using Azure Key Vault
   *
   * @required {false}
   */
  azureKeyVault?: TriggerAuthenticationSpecAzureKeyVault;
  /** configMapTargetRef
   * AuthConfigMapTargetRef is used to authenticate using a reference to a config map
   *
   * @required {false}
   */
  configMapTargetRef?: TriggerAuthenticationSpecConfigMapTargetRef[];
  /** env
   * AuthEnvironment is used to authenticate using environment variables
in the destination ScaleTarget spec
   *
   * @required {false}
   */
  env?: TriggerAuthenticationSpecEnv[];
  /** gcpSecretManager
   *
   * @required {false}
   */
  gcpSecretManager?: TriggerAuthenticationSpecGcpSecretManager;
  /** hashiCorpVault
   * HashiCorpVault is used to authenticate using Hashicorp Vault
   *
   * @required {false}
   */
  hashiCorpVault?: TriggerAuthenticationSpecHashiCorpVault;
  /** podIdentity
   * AuthPodIdentity allows users to select the platform native identity
mechanism
   *
   * @required {false}
   */
  podIdentity?: TriggerAuthenticationSpecPodIdentity;
  /** secretTargetRef
   * AuthSecretTargetRef is used to authenticate using a reference to a secret
   *
   * @required {false}
   */
  secretTargetRef?: TriggerAuthenticationSpecSecretTargetRef[];
}
