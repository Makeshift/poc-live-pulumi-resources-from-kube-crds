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

import { TriggerAuthenticationSpecAzureKeyVaultCredentialsClientSecret } from './TriggerAuthenticationSpecAzureKeyVaultCredentialsClientSecret';

export interface TriggerAuthenticationSpecAzureKeyVaultCredentials {
  /** clientId
   *
   * @required {true}
   */
  clientId: string;
  /** clientSecret
   *
   * @required {true}
   */
  clientSecret: TriggerAuthenticationSpecAzureKeyVaultCredentialsClientSecret;
  /** tenantId
   *
   * @required {true}
   */
  tenantId: string;
}
