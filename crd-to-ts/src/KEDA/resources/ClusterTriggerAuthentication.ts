import { ClusterTriggerAuthenticationModel } from '../models/ClusterTriggerAuthenticationModel.v1alpha1';
import type { ClusterTriggerAuthentication as ClusterTriggerAuthenticationInterface } from '../interfaces/ClusterTriggerAuthentication';
import { generateCustomResourceClass } from '../../resource-template';

/** Generated from models/ClusterTriggerAuthenticationModel.v1alpha1.ts for ClusterTriggerAuthentication @ v1alpha1 */
export const ClusterTriggerAuthentication = generateCustomResourceClass<ClusterTriggerAuthenticationInterface>(
  {
    properties:
    {
      apiVersion: ClusterTriggerAuthenticationModel.apiGroup + '/' + ClusterTriggerAuthenticationModel.apiVersion,
      kind: ClusterTriggerAuthenticationModel.kind,
      group: ClusterTriggerAuthenticationModel.apiGroup
    }
  }
  );
