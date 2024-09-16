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

import { ScaledJobSpecJobTargetRefTemplateSpecInitContainersEnv } from './ScaledJobSpecJobTargetRefTemplateSpecInitContainersEnv';
import { ScaledJobSpecJobTargetRefTemplateSpecInitContainersEnvFrom } from './ScaledJobSpecJobTargetRefTemplateSpecInitContainersEnvFrom';
import { ScaledJobSpecJobTargetRefTemplateSpecInitContainersLifecycle } from './ScaledJobSpecJobTargetRefTemplateSpecInitContainersLifecycle';
import { ScaledJobSpecJobTargetRefTemplateSpecInitContainersLivenessProbe } from './ScaledJobSpecJobTargetRefTemplateSpecInitContainersLivenessProbe';
import { ScaledJobSpecJobTargetRefTemplateSpecInitContainersPorts } from './ScaledJobSpecJobTargetRefTemplateSpecInitContainersPorts';
import { ScaledJobSpecJobTargetRefTemplateSpecInitContainersReadinessProbe } from './ScaledJobSpecJobTargetRefTemplateSpecInitContainersReadinessProbe';
import { ScaledJobSpecJobTargetRefTemplateSpecInitContainersResizePolicy } from './ScaledJobSpecJobTargetRefTemplateSpecInitContainersResizePolicy';
import { ScaledJobSpecJobTargetRefTemplateSpecInitContainersResources } from './ScaledJobSpecJobTargetRefTemplateSpecInitContainersResources';
import { ScaledJobSpecJobTargetRefTemplateSpecInitContainersSecurityContext } from './ScaledJobSpecJobTargetRefTemplateSpecInitContainersSecurityContext';
import { ScaledJobSpecJobTargetRefTemplateSpecInitContainersStartupProbe } from './ScaledJobSpecJobTargetRefTemplateSpecInitContainersStartupProbe';
import { ScaledJobSpecJobTargetRefTemplateSpecInitContainersVolumeDevices } from './ScaledJobSpecJobTargetRefTemplateSpecInitContainersVolumeDevices';
import { ScaledJobSpecJobTargetRefTemplateSpecInitContainersVolumeMounts } from './ScaledJobSpecJobTargetRefTemplateSpecInitContainersVolumeMounts';

/**
 * A single application container that you want to run within a pod.
 *
 * @export
 */
export interface ScaledJobSpecJobTargetRefTemplateSpecInitContainers {
  /** args
   *
   * @required {false}
   */
  args?: string[];
  /** command
   *
   * @required {false}
   */
  command?: string[];
  /** env
   * EnvVar represents an environment variable present in a Container.
   *
   * @required {false}
   */
  env?: ScaledJobSpecJobTargetRefTemplateSpecInitContainersEnv[];
  /** envFrom
   * EnvFromSource represents the source of a set of ConfigMaps
   *
   * @required {false}
   */
  envFrom?: ScaledJobSpecJobTargetRefTemplateSpecInitContainersEnvFrom[];
  /** image
   * Container image name.
More info: https://kubernetes.io/docs/concepts/containers/images
This field is optional to allow higher level config management to default or override
container images in workload controllers like Deployments and StatefulSets.
   *
   * @required {false}
   */
  image?: string;
  /** imagePullPolicy
   * Image pull policy.
One of Always, Never, IfNotPresent.
Defaults to Always if :latest tag is specified, or IfNotPresent otherwise.
Cannot be updated.
More info: https://kubernetes.io/docs/concepts/containers/images#updating-images
   *
   * @required {false}
   */
  imagePullPolicy?: string;
  /** lifecycle
   * Actions that the management system should take in response to container lifecycle events.
Cannot be updated.
   *
   * @required {false}
   */
  lifecycle?: ScaledJobSpecJobTargetRefTemplateSpecInitContainersLifecycle;
  /** livenessProbe
   * Periodic probe of container liveness.
Container will be restarted if the probe fails.
Cannot be updated.
More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes
   *
   * @required {false}
   */
  livenessProbe?: ScaledJobSpecJobTargetRefTemplateSpecInitContainersLivenessProbe;
  /** name
   * Name of the container specified as a DNS_LABEL.
Each container in a pod must have a unique name (DNS_LABEL).
Cannot be updated.
   *
   * @required {true}
   */
  name: string;
  /** ports
   * ContainerPort represents a network port in a single container.
   *
   * @required {false}
   */
  ports?: ScaledJobSpecJobTargetRefTemplateSpecInitContainersPorts[];
  /** readinessProbe
   * Periodic probe of container service readiness.
Container will be removed from service endpoints if the probe fails.
Cannot be updated.
More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes
   *
   * @required {false}
   */
  readinessProbe?: ScaledJobSpecJobTargetRefTemplateSpecInitContainersReadinessProbe;
  /** resizePolicy
   * ContainerResizePolicy represents resource resize policy for the container.
   *
   * @required {false}
   */
  resizePolicy?: ScaledJobSpecJobTargetRefTemplateSpecInitContainersResizePolicy[];
  /** resources
   * Compute Resources required by this container.
Cannot be updated.
More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
   *
   * @required {false}
   */
  resources?: ScaledJobSpecJobTargetRefTemplateSpecInitContainersResources;
  /** restartPolicy
   * RestartPolicy defines the restart behavior of individual containers in a pod.
This field may only be set for init containers, and the only allowed value is "Always".
For non-init containers or when this field is not specified,
the restart behavior is defined by the Pod's restart policy and the container type.
Setting the RestartPolicy as "Always" for the init container will have the following effect:
this init container will be continually restarted on
exit until all regular containers have terminated. Once all regular
containers have completed, all init containers with restartPolicy "Always"
will be shut down. This lifecycle differs from normal init containers and
is often referred to as a "sidecar" container. Although this init
container still starts in the init container sequence, it does not wait
for the container to complete before proceeding to the next init
container. Instead, the next init container starts immediately after this
init container is started, or after any startupProbe has successfully
completed.
   *
   * @required {false}
   */
  restartPolicy?: string;
  /** securityContext
   * SecurityContext defines the security options the container should be run with.
If set, the fields of SecurityContext override the equivalent fields of PodSecurityContext.
More info: https://kubernetes.io/docs/tasks/configure-pod-container/security-context/
   *
   * @required {false}
   */
  securityContext?: ScaledJobSpecJobTargetRefTemplateSpecInitContainersSecurityContext;
  /** startupProbe
   * StartupProbe indicates that the Pod has successfully initialized.
If specified, no other probes are executed until this completes successfully.
If this probe fails, the Pod will be restarted, just as if the livenessProbe failed.
This can be used to provide different probe parameters at the beginning of a Pod's lifecycle,
when it might take a long time to load data or warm a cache, than during steady-state operation.
This cannot be updated.
More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes
   *
   * @required {false}
   */
  startupProbe?: ScaledJobSpecJobTargetRefTemplateSpecInitContainersStartupProbe;
  /** stdin
   * Whether this container should allocate a buffer for stdin in the container runtime. If this
is not set, reads from stdin in the container will always result in EOF.
Default is false.
   *
   * @required {false}
   */
  stdin?: boolean;
  /** stdinOnce
   * Whether the container runtime should close the stdin channel after it has been opened by
a single attach. When stdin is true the stdin stream will remain open across multiple attach
sessions. If stdinOnce is set to true, stdin is opened on container start, is empty until the
first client attaches to stdin, and then remains open and accepts data until the client disconnects,
at which time stdin is closed and remains closed until the container is restarted. If this
flag is false, a container processes that reads from stdin will never receive an EOF.
Default is false
   *
   * @required {false}
   */
  stdinOnce?: boolean;
  /** terminationMessagePath
   * Optional: Path at which the file to which the container's termination message
will be written is mounted into the container's filesystem.
Message written is intended to be brief final status, such as an assertion failure message.
Will be truncated by the node if greater than 4096 bytes. The total message length across
all containers will be limited to 12kb.
Defaults to /dev/termination-log.
Cannot be updated.
   *
   * @required {false}
   */
  terminationMessagePath?: string;
  /** terminationMessagePolicy
   * Indicate how the termination message should be populated. File will use the contents of
terminationMessagePath to populate the container status message on both success and failure.
FallbackToLogsOnError will use the last chunk of container log output if the termination
message file is empty and the container exited with an error.
The log output is limited to 2048 bytes or 80 lines, whichever is smaller.
Defaults to File.
Cannot be updated.
   *
   * @required {false}
   */
  terminationMessagePolicy?: string;
  /** tty
   * Whether this container should allocate a TTY for itself, also requires 'stdin' to be true.
Default is false.
   *
   * @required {false}
   */
  tty?: boolean;
  /** volumeDevices
   * volumeDevice describes a mapping of a raw block device within a container.
   *
   * @required {false}
   */
  volumeDevices?: ScaledJobSpecJobTargetRefTemplateSpecInitContainersVolumeDevices[];
  /** volumeMounts
   * VolumeMount describes a mounting of a Volume within a container.
   *
   * @required {false}
   */
  volumeMounts?: ScaledJobSpecJobTargetRefTemplateSpecInitContainersVolumeMounts[];
  /** workingDir
   * Container's working directory.
If not specified, the container runtime's default will be used, which
might be configured in the container image.
Cannot be updated.
   *
   * @required {false}
   */
  workingDir?: string;
}
