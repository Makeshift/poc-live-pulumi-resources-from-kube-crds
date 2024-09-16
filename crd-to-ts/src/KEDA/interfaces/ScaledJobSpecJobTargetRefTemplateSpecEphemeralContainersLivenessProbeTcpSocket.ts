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
 * TCPSocket specifies an action involving a TCP port.
 *
 * @export
 */
export interface ScaledJobSpecJobTargetRefTemplateSpecEphemeralContainersLivenessProbeTcpSocket {
  /** host
   * Optional: Host name to connect to, defaults to the pod IP.
   *
   * @required {false}
   */
  host?: string;
  /** port
   * Number or name of the port to access on the container.
Number must be in the range 1 to 65535.
Name must be an IANA_SVC_NAME.
   *
   * @required {true}
   */
  port: undefined;
}
