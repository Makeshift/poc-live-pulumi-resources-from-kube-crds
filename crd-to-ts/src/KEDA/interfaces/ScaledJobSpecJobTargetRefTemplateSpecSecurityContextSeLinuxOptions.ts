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
 * The SELinux context to be applied to all containers.
If unspecified, the container runtime will allocate a random SELinux context for each
container.  May also be set in SecurityContext.  If set in
both SecurityContext and PodSecurityContext, the value specified in SecurityContext
takes precedence for that container.
Note that this field cannot be set when spec.os.name is windows.
 *
 * @export
 */
export interface ScaledJobSpecJobTargetRefTemplateSpecSecurityContextSeLinuxOptions {
  /** level
   * Level is SELinux level label that applies to the container.
   *
   * @required {false}
   */
  level?: string;
  /** role
   * Role is a SELinux role label that applies to the container.
   *
   * @required {false}
   */
  role?: string;
  /** type
   * Type is a SELinux type label that applies to the container.
   *
   * @required {false}
   */
  type?: string;
  /** user
   * User is a SELinux user label that applies to the container.
   *
   * @required {false}
   */
  user?: string;
}
