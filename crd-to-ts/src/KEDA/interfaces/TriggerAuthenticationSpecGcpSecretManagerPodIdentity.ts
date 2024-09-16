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

/**
 * AuthPodIdentity allows users to select the platform native identity
mechanism
 *
 * @export
 */
export interface TriggerAuthenticationSpecGcpSecretManagerPodIdentity {
  /** identityAuthorityHost
   * Set identityAuthorityHost to override the default Azure authority host. If this is set, then the IdentityTenantID must also be set
   *
   * @required {false}
   */
  identityAuthorityHost?: string;
  /** identityId
   *
   * @required {false}
   */
  identityId?: string;
  /** identityOwner
   * IdentityOwner configures which identity has to be used during auto discovery, keda or the scaled workload. Mutually exclusive with roleArn
   *
   * @required {false}
   * @originalType {string}
   */
  identityOwner?: 'keda' | 'workload';
  /** identityTenantId
   * Set identityTenantId to override the default Azure tenant id. If this is set, then the IdentityID must also be set
   *
   * @required {false}
   */
  identityTenantId?: string;
  /** provider
   * PodIdentityProvider contains the list of providers
   *
   * @required {true}
   * @originalType {string}
   */
  provider: 'azure-workload' | 'gcp' | 'aws' | 'aws-eks' | 'none';
  /** roleArn
   * RoleArn sets the AWS RoleArn to be used. Mutually exclusive with IdentityOwner
   *
   * @required {false}
   */
  roleArn?: string;
}
