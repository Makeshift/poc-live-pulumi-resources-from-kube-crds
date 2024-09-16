import { ScaledObjectModel } from '../models/ScaledObjectModel.v1alpha1';
import type { ScaledObject as ScaledObjectInterface } from '../interfaces/ScaledObject';
import { generateCustomResourceClass } from '../../resource-template';

/** Generated from models/ScaledObjectModel.v1alpha1.ts for ScaledObject @ v1alpha1 */
export const ScaledObject = generateCustomResourceClass<ScaledObjectInterface>(
  {
    properties:
    {
      apiVersion: ScaledObjectModel.apiGroup + '/' + ScaledObjectModel.apiVersion,
      kind: ScaledObjectModel.kind,
      group: ScaledObjectModel.apiGroup
    }
  }
  );
