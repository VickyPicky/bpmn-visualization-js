/**
 * Copyright 2020 Bonitasoft S.A.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import { ShapeBpmnElementKind } from './ShapeBpmnElementKind';

export type BpmnEventKind =
  | ShapeBpmnElementKind.EVENT_BOUNDARY
  | ShapeBpmnElementKind.EVENT_START
  | ShapeBpmnElementKind.EVENT_END
  | ShapeBpmnElementKind.EVENT_INTERMEDIATE_THROW
  | ShapeBpmnElementKind.EVENT_INTERMEDIATE_CATCH;

// TODO move to ShapeBpmnElementKind? and rename into ShapeBpmnElementKindUtil?
// TODO bpmnEventKinds currently hosted in ProcessConverter may be hosted here
export default class ShapeUtil {
  private static readonly EVENT_KINDS = ShapeUtil.filterKind('Event');
  private static readonly GATEWAY_KINDS = ShapeUtil.filterKind('Gateway');

  // TODO : To modify when we will support globalTask (They are not considered as Task in the BPMN Semantic)
  private static TASK_KINDS = ShapeUtil.filterKind('Task', true);

  private static ACTIVITY_KINDS = [...ShapeUtil.TASK_KINDS, ShapeBpmnElementKind.CALL_ACTIVITY, ShapeBpmnElementKind.SUB_PROCESS];
  private static FLOWNODE_WITH_DEFAULT_SEQUENCE_FLOW_KINDS = [
    ...ShapeUtil.ACTIVITY_KINDS,
    ShapeBpmnElementKind.GATEWAY_EXCLUSIVE,
    ShapeBpmnElementKind.GATEWAY_INCLUSIVE,

    // TODO: Uncomment when complex gateway are supported
    // ShapeBpmnElementKind.GATEWAY_COMPLEX,
  ];

  private static filterKind(suffix: string, ignoreCase = false): ShapeBpmnElementKind[] {
    return Object.values(ShapeBpmnElementKind).filter(kind => {
      if (ignoreCase) {
        return kind.endsWith(suffix) || kind.toLowerCase().endsWith(suffix.toLowerCase());
      }
      return kind.endsWith(suffix);
    });
  }

  public static isEvent(kind: ShapeBpmnElementKind): boolean {
    return this.EVENT_KINDS.includes(kind);
  }

  public static isCallActivity(kind: ShapeBpmnElementKind): boolean {
    return ShapeBpmnElementKind.CALL_ACTIVITY === kind;
  }

  public static isSubProcess(kind: ShapeBpmnElementKind): boolean {
    return ShapeBpmnElementKind.SUB_PROCESS === kind;
  }

  public static isBoundaryEvent(kind: ShapeBpmnElementKind): boolean {
    return ShapeBpmnElementKind.EVENT_BOUNDARY === kind;
  }

  public static isStartEvent(kind: ShapeBpmnElementKind): boolean {
    return ShapeBpmnElementKind.EVENT_START === kind;
  }

  public static canHaveNoneEvent(kind: ShapeBpmnElementKind): boolean {
    return ShapeBpmnElementKind.EVENT_INTERMEDIATE_THROW === kind || ShapeBpmnElementKind.EVENT_END === kind || ShapeBpmnElementKind.EVENT_START === kind;
  }

  public static isActivity(kind: ShapeBpmnElementKind): boolean {
    return this.ACTIVITY_KINDS.includes(kind);
  }

  public static isWithDefaultSequenceFlow(kind: ShapeBpmnElementKind): boolean {
    return this.FLOWNODE_WITH_DEFAULT_SEQUENCE_FLOW_KINDS.includes(kind);
  }

  // TODO should we clone the array to avoid modifications of this ref array by client code?
  // topLevelBpmnEventKinds to not mixed with the bpmnEventKinds that currently are the list of non None event subtypes
  public static topLevelBpmnEventKinds(): ShapeBpmnElementKind[] {
    return this.EVENT_KINDS;
  }

  public static activityKinds(): ShapeBpmnElementKind[] {
    return this.ACTIVITY_KINDS;
  }

  public static taskKinds(): ShapeBpmnElementKind[] {
    return this.TASK_KINDS;
  }

  public static gatewayKinds(): ShapeBpmnElementKind[] {
    return this.GATEWAY_KINDS;
  }

  public static flowNodeKinds(): ShapeBpmnElementKind[] {
    return Object.values(ShapeBpmnElementKind).filter(kind => {
      return !ShapeUtil.isPoolOrLane(kind);
    });
  }

  public static isPoolOrLane(kind: ShapeBpmnElementKind): boolean {
    return kind == ShapeBpmnElementKind.POOL || kind == ShapeBpmnElementKind.LANE;
  }
}
