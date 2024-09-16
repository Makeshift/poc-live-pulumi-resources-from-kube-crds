import { TriggerAuthenticationModel } from '../models/TriggerAuthenticationModel.v1alpha1';
import type { TriggerAuthentication as TriggerAuthenticationInterface } from '../interfaces/TriggerAuthentication';
import { generateCustomResourceClass } from '../../resource-template';

/** Generated from models/TriggerAuthenticationModel.v1alpha1.ts for TriggerAuthentication @ v1alpha1 */
export const TriggerAuthentication = generateCustomResourceClass<TriggerAuthenticationInterface>(
  {
    properties:
    {
      apiVersion: TriggerAuthenticationModel.apiGroup + '/' + TriggerAuthenticationModel.apiVersion,
      kind: TriggerAuthenticationModel.kind,
      group: TriggerAuthenticationModel.apiGroup
    }
  }
  );
