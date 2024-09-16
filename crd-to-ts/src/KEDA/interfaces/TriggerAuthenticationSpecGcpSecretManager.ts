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

import { TriggerAuthenticationSpecGcpSecretManagerCredentials } from './TriggerAuthenticationSpecGcpSecretManagerCredentials';
import { TriggerAuthenticationSpecGcpSecretManagerPodIdentity } from './TriggerAuthenticationSpecGcpSecretManagerPodIdentity';
import { TriggerAuthenticationSpecGcpSecretManagerSecrets } from './TriggerAuthenticationSpecGcpSecretManagerSecrets';

export interface TriggerAuthenticationSpecGcpSecretManager {
  /** credentials
   *
   * @required {false}
   */
  credentials?: TriggerAuthenticationSpecGcpSecretManagerCredentials;
  /** podIdentity
   * AuthPodIdentity allows users to select the platform native identity
mechanism
   *
   * @required {false}
   */
  podIdentity?: TriggerAuthenticationSpecGcpSecretManagerPodIdentity;
  /** secrets
   *
   * @required {true}
   */
  secrets: TriggerAuthenticationSpecGcpSecretManagerSecrets[];
}
