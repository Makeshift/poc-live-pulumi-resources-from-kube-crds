import { ScaledJobModel } from '../models/ScaledJobModel.v1alpha1';
import type { ScaledJob as ScaledJobInterface } from '../interfaces/ScaledJob';
import { generateCustomResourceClass } from '../../resource-template';

/** Generated from models/ScaledJobModel.v1alpha1.ts for ScaledJob @ v1alpha1 */
export const ScaledJob = generateCustomResourceClass<ScaledJobInterface>(
  {
    properties:
    {
      apiVersion: ScaledJobModel.apiGroup + '/' + ScaledJobModel.apiVersion,
      kind: ScaledJobModel.kind,
      group: ScaledJobModel.apiGroup
    }
  }
  );
