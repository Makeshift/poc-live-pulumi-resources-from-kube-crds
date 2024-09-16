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

import { ScaledJobSpecJobTargetRefTemplateSpecVolumesCephfsSecretRef } from './ScaledJobSpecJobTargetRefTemplateSpecVolumesCephfsSecretRef';

/**
 * cephFS represents a Ceph FS mount on the host that shares a pod&#39;s lifetime
 *
 * @export
 */
export interface ScaledJobSpecJobTargetRefTemplateSpecVolumesCephfs {
  /** monitors
   *
   * @required {true}
   */
  monitors: string[];
  /** path
   * path is Optional: Used as the mounted root, rather than the full Ceph tree, default is /
   *
   * @required {false}
   */
  path?: string;
  /** readOnly
   * readOnly is Optional: Defaults to false (read/write). ReadOnly here will force
the ReadOnly setting in VolumeMounts.
More info: https://examples.k8s.io/volumes/cephfs/README.md#how-to-use-it
   *
   * @required {false}
   */
  readOnly?: boolean;
  /** secretFile
   * secretFile is Optional: SecretFile is the path to key ring for User, default is /etc/ceph/user.secret
More info: https://examples.k8s.io/volumes/cephfs/README.md#how-to-use-it
   *
   * @required {false}
   */
  secretFile?: string;
  /** secretRef
   * secretRef is Optional: SecretRef is reference to the authentication secret for User, default is empty.
More info: https://examples.k8s.io/volumes/cephfs/README.md#how-to-use-it
   *
   * @required {false}
   */
  secretRef?: ScaledJobSpecJobTargetRefTemplateSpecVolumesCephfsSecretRef;
  /** user
   * user is optional: User is the rados user name, default is admin
More info: https://examples.k8s.io/volumes/cephfs/README.md#how-to-use-it
   *
   * @required {false}
   */
  user?: string;
}