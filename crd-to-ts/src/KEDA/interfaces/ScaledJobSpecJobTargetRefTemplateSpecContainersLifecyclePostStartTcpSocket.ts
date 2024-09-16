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
 * Deprecated. TCPSocket is NOT supported as a LifecycleHandler and kept
for the backward compatibility. There are no validation of this field and
lifecycle hooks will fail in runtime when tcp handler is specified.
 *
 * @export
 */
export interface ScaledJobSpecJobTargetRefTemplateSpecContainersLifecyclePostStartTcpSocket {
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
