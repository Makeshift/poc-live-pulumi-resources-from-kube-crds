import { CloudEventSourceModel } from '../models/CloudEventSourceModel.v1alpha1';
import type { CloudEventSource as CloudEventSourceInterface } from '../interfaces/CloudEventSource';
import { generateCustomResourceClass } from '../../resource-template';

/** Generated from models/CloudEventSourceModel.v1alpha1.ts for CloudEventSource @ v1alpha1 */
export const CloudEventSource = generateCustomResourceClass<CloudEventSourceInterface>(
  {
    properties:
    {
      apiVersion: CloudEventSourceModel.apiGroup + '/' + CloudEventSourceModel.apiVersion,
      kind: CloudEventSourceModel.kind,
      group: CloudEventSourceModel.apiGroup
    }
  }
  );
