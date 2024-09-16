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

import { ScaledJobSpecJobTargetRefTemplateSpecContainersStartupProbeHttpGetHttpHeaders } from './ScaledJobSpecJobTargetRefTemplateSpecContainersStartupProbeHttpGetHttpHeaders';

/**
 * HTTPGet specifies the http request to perform.
 *
 * @export
 */
export interface ScaledJobSpecJobTargetRefTemplateSpecContainersStartupProbeHttpGet {
  /** host
   * Host name to connect to, defaults to the pod IP. You probably want to set
"Host" in httpHeaders instead.
   *
   * @required {false}
   */
  host?: string;
  /** httpHeaders
   * HTTPHeader describes a custom header to be used in HTTP probes
   *
   * @required {false}
   */
  httpHeaders?: ScaledJobSpecJobTargetRefTemplateSpecContainersStartupProbeHttpGetHttpHeaders[];
  /** path
   * Path to access on the HTTP server.
   *
   * @required {false}
   */
  path?: string;
  /** port
   * Name or number of the port to access on the container.
Number must be in the range 1 to 65535.
Name must be an IANA_SVC_NAME.
   *
   * @required {true}
   */
  port: undefined;
  /** scheme
   * Scheme to use for connecting to the host.
Defaults to HTTP.
   *
   * @required {false}
   */
  scheme?: string;
}
