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

import { TriggerAuthenticationSpecAwsSecretManagerCredentialsAccessKey } from './TriggerAuthenticationSpecAwsSecretManagerCredentialsAccessKey';
import { TriggerAuthenticationSpecAwsSecretManagerCredentialsAccessSecretKey } from './TriggerAuthenticationSpecAwsSecretManagerCredentialsAccessSecretKey';
import { TriggerAuthenticationSpecAwsSecretManagerCredentialsAccessToken } from './TriggerAuthenticationSpecAwsSecretManagerCredentialsAccessToken';

export interface TriggerAuthenticationSpecAwsSecretManagerCredentials {
  /** accessKey
   *
   * @required {true}
   */
  accessKey: TriggerAuthenticationSpecAwsSecretManagerCredentialsAccessKey;
  /** accessSecretKey
   *
   * @required {true}
   */
  accessSecretKey: TriggerAuthenticationSpecAwsSecretManagerCredentialsAccessSecretKey;
  /** accessToken
   *
   * @required {false}
   */
  accessToken?: TriggerAuthenticationSpecAwsSecretManagerCredentialsAccessToken;
}
