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
 * GRPC specifies an action involving a GRPC port.
 *
 * @export
 */
export interface ScaledJobSpecJobTargetRefTemplateSpecEphemeralContainersStartupProbeGrpc {
  /** port
   * Port number of the gRPC service. Number must be in the range 1 to 65535.
   *
   * @required {true}
   * @format {int32}
   * @originalType {integer}
   */
  port: number;
  /** service
   * Service is the name of the service to place in the gRPC HealthCheckRequest
(see https://github.com/grpc/grpc/blob/master/doc/health-checking.md).


If this is not specified, the default behavior is defined by gRPC.
   *
   * @required {false}
   */
  service?: string;
}
