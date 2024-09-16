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

import { ScaledJobSpecJobTargetRefTemplateSpecContainersLifecyclePreStopExec } from './ScaledJobSpecJobTargetRefTemplateSpecContainersLifecyclePreStopExec';
import { ScaledJobSpecJobTargetRefTemplateSpecContainersLifecyclePreStopHttpGet } from './ScaledJobSpecJobTargetRefTemplateSpecContainersLifecyclePreStopHttpGet';
import { ScaledJobSpecJobTargetRefTemplateSpecContainersLifecyclePreStopSleep } from './ScaledJobSpecJobTargetRefTemplateSpecContainersLifecyclePreStopSleep';
import { ScaledJobSpecJobTargetRefTemplateSpecContainersLifecyclePreStopTcpSocket } from './ScaledJobSpecJobTargetRefTemplateSpecContainersLifecyclePreStopTcpSocket';

/**
 * PreStop is called immediately before a container is terminated due to an
API request or management event such as liveness&#x2F;startup probe failure,
preemption, resource contention, etc. The handler is not called if the
container crashes or exits. The Pod&#39;s termination grace period countdown begins before the
PreStop hook is executed. Regardless of the outcome of the handler, the
container will eventually terminate within the Pod&#39;s termination grace
period (unless delayed by finalizers). Other management of the container blocks until the hook completes
or until the termination grace period is reached.
More info: https:&#x2F;&#x2F;kubernetes.io&#x2F;docs&#x2F;concepts&#x2F;containers&#x2F;container-lifecycle-hooks&#x2F;#container-hooks
 *
 * @export
 */
export interface ScaledJobSpecJobTargetRefTemplateSpecContainersLifecyclePreStop {
  /** exec
   * Exec specifies the action to take.
   *
   * @required {false}
   */
  exec?: ScaledJobSpecJobTargetRefTemplateSpecContainersLifecyclePreStopExec;
  /** httpGet
   * HTTPGet specifies the http request to perform.
   *
   * @required {false}
   */
  httpGet?: ScaledJobSpecJobTargetRefTemplateSpecContainersLifecyclePreStopHttpGet;
  /** sleep
   * Sleep represents the duration that the container should sleep before being terminated.
   *
   * @required {false}
   */
  sleep?: ScaledJobSpecJobTargetRefTemplateSpecContainersLifecyclePreStopSleep;
  /** tcpSocket
   * Deprecated. TCPSocket is NOT supported as a LifecycleHandler and kept
for the backward compatibility. There are no validation of this field and
lifecycle hooks will fail in runtime when tcp handler is specified.
   *
   * @required {false}
   */
  tcpSocket?: ScaledJobSpecJobTargetRefTemplateSpecContainersLifecyclePreStopTcpSocket;
}
