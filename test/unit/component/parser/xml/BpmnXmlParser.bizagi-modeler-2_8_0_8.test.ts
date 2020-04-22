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
import BpmnXmlParser from '../../../../../src/component/parser/xml/BpmnXmlParser';
import arrayContaining = jasmine.arrayContaining;
import anything = jasmine.anything;

describe('parse bpmn as xml for Bizagi Modeler 2.8.0.8', () => {
  it('bpmn with process with extension, ensure elements are present', () => {
    const a20Processe = `<?xml version="1.0"?>
<definitions xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" id="_2014120801424" targetNamespace="http://www.bizagi.com/definitions/_2014120801424" xmlns="http://www.omg.org/spec/BPMN/20100524/MODEL">
  <process id="WFP-6-" isExecutable="false">
    <startEvent id="_6b5db6a9-037a-49ad-9201-09201e2aaa97" name="Start Event">
      <extensionElements>
        <bizagi:BizagiExtensions xmlns:bizagi="http://www.bizagi.com/bpmn20">
          <bizagi:BizagiProperties>
            <bizagi:BizagiProperty name="bgColor" value="White" />
            <bizagi:BizagiProperty name="borderColor" value="Black" />
          </bizagi:BizagiProperties>
        </bizagi:BizagiExtensions>
      </extensionElements>
      <outgoing>_b50f530c-3450-4e1a-b81f-ea346dc6e1cb</outgoing>
    </startEvent>
    <task id="_5a972b87-735d-454a-b31c-f52fb3afc5c7" name="Task 1">
      <extensionElements>
        <bizagi:BizagiExtensions xmlns:bizagi="http://www.bizagi.com/bpmn20">
          <bizagi:BizagiProperties>
            <bizagi:BizagiProperty name="bgColor" value="White" />
            <bizagi:BizagiProperty name="borderColor" value="Black" />
          </bizagi:BizagiProperties>
        </bizagi:BizagiExtensions>
      </extensionElements>
      <incoming>_b50f530c-3450-4e1a-b81f-ea346dc6e1cb</incoming>
      <outgoing>_fe74c141-8843-4b00-a704-5e5e13be53b0</outgoing>
    </task>
    <endEvent id="_258f51eb-b764-4a71-b681-3a01cca14143" name="End Event">
      <extensionElements>
        <bizagi:BizagiExtensions xmlns:bizagi="http://www.bizagi.com/bpmn20">
          <bizagi:BizagiProperties>
            <bizagi:BizagiProperty name="bgColor" value="White" />
            <bizagi:BizagiProperty name="borderColor" value="Black" />
          </bizagi:BizagiProperties>
        </bizagi:BizagiExtensions>
      </extensionElements>
      <incoming>_a3d40a56-9b7f-417e-911e-d39e7f18b90c</incoming>
      <incoming>_d4ce87c6-1373-45d6-a3b4-fbb2a04ee2e5</incoming>
    </endEvent>
    <task id="_4f7d62d7-f0e6-46bc-be00-69e02da38f65" name="Task 2">
      <extensionElements>
        <bizagi:BizagiExtensions xmlns:bizagi="http://www.bizagi.com/bpmn20">
          <bizagi:BizagiProperties>
            <bizagi:BizagiProperty name="bgColor" value="White" />
            <bizagi:BizagiProperty name="borderColor" value="Black" />
          </bizagi:BizagiProperties>
        </bizagi:BizagiExtensions>
      </extensionElements>
      <incoming>_f1478fb7-98c4-4c01-8c15-68bd04c91535</incoming>
      <outgoing>_a3d40a56-9b7f-417e-911e-d39e7f18b90c</outgoing>
    </task>
    <task id="_e6eb725a-34bc-45c7-aed0-9f9596cd7bee" name="Task 3">
      <extensionElements>
        <bizagi:BizagiExtensions xmlns:bizagi="http://www.bizagi.com/bpmn20">
          <bizagi:BizagiProperties>
            <bizagi:BizagiProperty name="bgColor" value="White" />
            <bizagi:BizagiProperty name="borderColor" value="Black" />
          </bizagi:BizagiProperties>
        </bizagi:BizagiExtensions>
      </extensionElements>
      <incoming>_a1570a53-28d2-41b1-a3a2-3e50c00d747e</incoming>
      <outgoing>_e9ebc7c7-995d-46db-86ce-d823bc2b4687</outgoing>
    </task>
    <exclusiveGateway id="_35fe57a7-1302-44e2-bf58-032f11af7ecb" name="Gateway  (Split Flow)" gatewayDirection="Diverging">
      <extensionElements>
        <bizagi:BizagiExtensions xmlns:bizagi="http://www.bizagi.com/bpmn20">
          <bizagi:BizagiProperties>
            <bizagi:BizagiProperty name="bgColor" value="White" />
            <bizagi:BizagiProperty name="borderColor" value="Black" />
          </bizagi:BizagiProperties>
        </bizagi:BizagiExtensions>
      </extensionElements>
      <incoming>_fe74c141-8843-4b00-a704-5e5e13be53b0</incoming>
      <outgoing>_f1478fb7-98c4-4c01-8c15-68bd04c91535</outgoing>
      <outgoing>_a1570a53-28d2-41b1-a3a2-3e50c00d747e</outgoing>
      <outgoing>_20ebb3c1-5178-4c7c-a91d-23e58f2aa73b</outgoing>
    </exclusiveGateway>
    <task id="_7d399717-1aba-47ac-8d7d-8aaa033255e0" name="Task 4">
      <extensionElements>
        <bizagi:BizagiExtensions xmlns:bizagi="http://www.bizagi.com/bpmn20">
          <bizagi:BizagiProperties>
            <bizagi:BizagiProperty name="bgColor" value="White" />
            <bizagi:BizagiProperty name="borderColor" value="Black" />
          </bizagi:BizagiProperties>
        </bizagi:BizagiExtensions>
      </extensionElements>
      <incoming>_20ebb3c1-5178-4c7c-a91d-23e58f2aa73b</incoming>
      <outgoing>_698b593f-18eb-42ea-b8cd-bcd51e1514cc</outgoing>
    </task>
    <exclusiveGateway id="_33c66216-391c-49c2-aa19-d8f0b7f5f91d" name="Gateway  (Merge Flows)" gatewayDirection="Converging">
      <extensionElements>
        <bizagi:BizagiExtensions xmlns:bizagi="http://www.bizagi.com/bpmn20">
          <bizagi:BizagiProperties>
            <bizagi:BizagiProperty name="bgColor" value="White" />
            <bizagi:BizagiProperty name="borderColor" value="Black" />
          </bizagi:BizagiProperties>
        </bizagi:BizagiExtensions>
      </extensionElements>
      <incoming>_e9ebc7c7-995d-46db-86ce-d823bc2b4687</incoming>
      <incoming>_698b593f-18eb-42ea-b8cd-bcd51e1514cc</incoming>
      <outgoing>_d4ce87c6-1373-45d6-a3b4-fbb2a04ee2e5</outgoing>
    </exclusiveGateway>
    <sequenceFlow id="_b50f530c-3450-4e1a-b81f-ea346dc6e1cb" name="" sourceRef="_6b5db6a9-037a-49ad-9201-09201e2aaa97" targetRef="_5a972b87-735d-454a-b31c-f52fb3afc5c7">
      <extensionElements>
        <bizagi:BizagiExtensions xmlns:bizagi="http://www.bizagi.com/bpmn20">
          <bizagi:BizagiProperties>
            <bizagi:BizagiProperty name="bgColor" value="White" />
            <bizagi:BizagiProperty name="borderColor" value="Black" />
          </bizagi:BizagiProperties>
        </bizagi:BizagiExtensions>
      </extensionElements>
    </sequenceFlow>
    <sequenceFlow id="_fe74c141-8843-4b00-a704-5e5e13be53b0" name="" sourceRef="_5a972b87-735d-454a-b31c-f52fb3afc5c7" targetRef="_35fe57a7-1302-44e2-bf58-032f11af7ecb">
      <extensionElements>
        <bizagi:BizagiExtensions xmlns:bizagi="http://www.bizagi.com/bpmn20">
          <bizagi:BizagiProperties>
            <bizagi:BizagiProperty name="bgColor" value="White" />
            <bizagi:BizagiProperty name="borderColor" value="Black" />
          </bizagi:BizagiProperties>
        </bizagi:BizagiExtensions>
      </extensionElements>
    </sequenceFlow>
    <sequenceFlow id="_f1478fb7-98c4-4c01-8c15-68bd04c91535" name="" sourceRef="_35fe57a7-1302-44e2-bf58-032f11af7ecb" targetRef="_4f7d62d7-f0e6-46bc-be00-69e02da38f65">
      <extensionElements>
        <bizagi:BizagiExtensions xmlns:bizagi="http://www.bizagi.com/bpmn20">
          <bizagi:BizagiProperties>
            <bizagi:BizagiProperty name="bgColor" value="White" />
            <bizagi:BizagiProperty name="borderColor" value="Black" />
          </bizagi:BizagiProperties>
        </bizagi:BizagiExtensions>
      </extensionElements>
    </sequenceFlow>
    <sequenceFlow id="_a3d40a56-9b7f-417e-911e-d39e7f18b90c" name="" sourceRef="_4f7d62d7-f0e6-46bc-be00-69e02da38f65" targetRef="_258f51eb-b764-4a71-b681-3a01cca14143">
      <extensionElements>
        <bizagi:BizagiExtensions xmlns:bizagi="http://www.bizagi.com/bpmn20">
          <bizagi:BizagiProperties>
            <bizagi:BizagiProperty name="bgColor" value="White" />
            <bizagi:BizagiProperty name="borderColor" value="Black" />
          </bizagi:BizagiProperties>
        </bizagi:BizagiExtensions>
      </extensionElements>
    </sequenceFlow>
    <sequenceFlow id="_e9ebc7c7-995d-46db-86ce-d823bc2b4687" name="" sourceRef="_e6eb725a-34bc-45c7-aed0-9f9596cd7bee" targetRef="_33c66216-391c-49c2-aa19-d8f0b7f5f91d">
      <extensionElements>
        <bizagi:BizagiExtensions xmlns:bizagi="http://www.bizagi.com/bpmn20">
          <bizagi:BizagiProperties>
            <bizagi:BizagiProperty name="bgColor" value="White" />
            <bizagi:BizagiProperty name="borderColor" value="Black" />
          </bizagi:BizagiProperties>
        </bizagi:BizagiExtensions>
      </extensionElements>
    </sequenceFlow>
    <sequenceFlow id="_698b593f-18eb-42ea-b8cd-bcd51e1514cc" name="" sourceRef="_7d399717-1aba-47ac-8d7d-8aaa033255e0" targetRef="_33c66216-391c-49c2-aa19-d8f0b7f5f91d">
      <extensionElements>
        <bizagi:BizagiExtensions xmlns:bizagi="http://www.bizagi.com/bpmn20">
          <bizagi:BizagiProperties>
            <bizagi:BizagiProperty name="bgColor" value="White" />
            <bizagi:BizagiProperty name="borderColor" value="Black" />
          </bizagi:BizagiProperties>
        </bizagi:BizagiExtensions>
      </extensionElements>
    </sequenceFlow>
    <sequenceFlow id="_d4ce87c6-1373-45d6-a3b4-fbb2a04ee2e5" name="" sourceRef="_33c66216-391c-49c2-aa19-d8f0b7f5f91d" targetRef="_258f51eb-b764-4a71-b681-3a01cca14143">
      <extensionElements>
        <bizagi:BizagiExtensions xmlns:bizagi="http://www.bizagi.com/bpmn20">
          <bizagi:BizagiProperties>
            <bizagi:BizagiProperty name="bgColor" value="White" />
            <bizagi:BizagiProperty name="borderColor" value="Black" />
          </bizagi:BizagiProperties>
        </bizagi:BizagiExtensions>
      </extensionElements>
    </sequenceFlow>
    <sequenceFlow id="_a1570a53-28d2-41b1-a3a2-3e50c00d747e" name="" sourceRef="_35fe57a7-1302-44e2-bf58-032f11af7ecb" targetRef="_e6eb725a-34bc-45c7-aed0-9f9596cd7bee">
      <extensionElements>
        <bizagi:BizagiExtensions xmlns:bizagi="http://www.bizagi.com/bpmn20">
          <bizagi:BizagiProperties>
            <bizagi:BizagiProperty name="bgColor" value="White" />
            <bizagi:BizagiProperty name="borderColor" value="Black" />
          </bizagi:BizagiProperties>
        </bizagi:BizagiExtensions>
      </extensionElements>
    </sequenceFlow>
    <sequenceFlow id="_20ebb3c1-5178-4c7c-a91d-23e58f2aa73b" name="" sourceRef="_35fe57a7-1302-44e2-bf58-032f11af7ecb" targetRef="_7d399717-1aba-47ac-8d7d-8aaa033255e0">
      <extensionElements>
        <bizagi:BizagiExtensions xmlns:bizagi="http://www.bizagi.com/bpmn20">
          <bizagi:BizagiProperties>
            <bizagi:BizagiProperty name="bgColor" value="White" />
            <bizagi:BizagiProperty name="borderColor" value="Black" />
          </bizagi:BizagiProperties>
        </bizagi:BizagiExtensions>
      </extensionElements>
    </sequenceFlow>
  </process>
  <process id="Id_55a65f07-b366-4943-8120-51e834197488">
    <laneSet id="Id_e96e2982-221b-4cd4-967a-2922cb58079e" />
  </process>
  <collaboration id="Id_f860e7d7-a3df-4807-ae81-26e8b801893e" name="Diagram 2">
    <participant id="Id_e73aa4c4-2383-4c79-99b2-4270421d213d" processRef="WFP-6-">
      <extensionElements>
        <bizagi:BizagiExtensions xmlns:bizagi="http://www.bizagi.com/bpmn20">
          <bizagi:BizagiProperties>
            <bizagi:BizagiProperty name="bgColor" value="White" />
            <bizagi:BizagiProperty name="borderColor" value="Black" />
          </bizagi:BizagiProperties>
        </bizagi:BizagiExtensions>
      </extensionElements>
    </participant>
    <participant id="Id_0c7bd657-1505-4ca5-8a47-15bbb5a83523" processRef="Id_55a65f07-b366-4943-8120-51e834197488">
      <extensionElements>
        <bizagi:BizagiExtensions xmlns:bizagi="http://www.bizagi.com/bpmn20">
          <bizagi:BizagiProperties>
            <bizagi:BizagiProperty name="bgColor" value="White" />
            <bizagi:BizagiProperty name="borderColor" value="Black" />
            <bizagi:BizagiProperty name="isMainParticipant" />
          </bizagi:BizagiProperties>
        </bizagi:BizagiExtensions>
      </extensionElements>
    </participant>
  </collaboration>
  <BPMNDiagram id="Diagram_b34aa446-8da3-43b6-a90c-b97299544a16" xmlns="http://www.omg.org/spec/BPMN/20100524/DI">
    <BPMNPlane id="DiagramElement_1f749ba5-7c1e-4cf5-b3d3-8d77d14be642" bpmnElement="Id_f860e7d7-a3df-4807-ae81-26e8b801893e">
      <extension xmlns="http://www.omg.org/spec/DD/20100524/DI" />
      <BPMNShape id="DiagramElement_6765b470-4524-4867-bd29-6a62952a4d32" bpmnElement="Id_e73aa4c4-2383-4c79-99b2-4270421d213d" isHorizontal="true">
        <extension xmlns="http://www.omg.org/spec/DD/20100524/DI" />
        <Bounds x="30" y="30" width="712" height="358" xmlns="http://www.omg.org/spec/DD/20100524/DC" />
      </BPMNShape>
      <BPMNShape id="DiagramElement_3a35cb40-a868-45b0-b5e6-60c242998705" bpmnElement="_6b5db6a9-037a-49ad-9201-09201e2aaa97">
        <extension xmlns="http://www.omg.org/spec/DD/20100524/DI" />
        <Bounds x="120" y="174" width="30" height="30" xmlns="http://www.omg.org/spec/DD/20100524/DC" />
        <BPMNLabel id="DiagramElement_05d5265d-2b92-499c-a022-e339533d6089" labelStyle="Style_35e829d8-1dc4-443b-8f15-7bfc8038eab5">
          <extension xmlns="http://www.omg.org/spec/DD/20100524/DI" />
          <Bounds x="87.67767333984375" y="209.33334350585937" width="0" height="0" xmlns="http://www.omg.org/spec/DD/20100524/DC" />
        </BPMNLabel>
      </BPMNShape>
      <BPMNShape id="DiagramElement_57dad906-f70a-4843-ab50-5cf02eabb1e5" bpmnElement="_5a972b87-735d-454a-b31c-f52fb3afc5c7">
        <extension xmlns="http://www.omg.org/spec/DD/20100524/DI" />
        <Bounds x="186" y="155" width="83" height="68" xmlns="http://www.omg.org/spec/DD/20100524/DC" />
        <BPMNLabel id="DiagramElement_9488c098-c643-40ca-ac95-62ed571a3baa" labelStyle="Style_6b41969d-9f3b-4d41-be89-6b5b6a905a1d">
          <extension xmlns="http://www.omg.org/spec/DD/20100524/DI" />
          <Bounds x="191.33334350585937" y="182.58187866210937" width="0" height="0" xmlns="http://www.omg.org/spec/DD/20100524/DC" />
        </BPMNLabel>
      </BPMNShape>
      <BPMNShape id="DiagramElement_facf6d26-5d6d-4c41-b060-d0cc9f250b4c" bpmnElement="_258f51eb-b764-4a71-b681-3a01cca14143">
        <extension xmlns="http://www.omg.org/spec/DD/20100524/DI" />
        <Bounds x="670" y="142" width="32" height="32" xmlns="http://www.omg.org/spec/DD/20100524/DC" />
        <BPMNLabel id="DiagramElement_7e200536-b5fd-4722-802e-131929e4c890" labelStyle="Style_d0491eba-3243-4e39-a2ae-358f99a6e57c">
          <extension xmlns="http://www.omg.org/spec/DD/20100524/DI" />
          <Bounds x="590.5963134765625" y="155.59762573242187" width="0" height="0" xmlns="http://www.omg.org/spec/DD/20100524/DC" />
        </BPMNLabel>
      </BPMNShape>
      <BPMNShape id="DiagramElement_4f88b7cd-320d-4003-be8d-56a557de8396" bpmnElement="_4f7d62d7-f0e6-46bc-be00-69e02da38f65">
        <extension xmlns="http://www.omg.org/spec/DD/20100524/DI" />
        <Bounds x="414" y="70" width="83" height="68" xmlns="http://www.omg.org/spec/DD/20100524/DC" />
        <BPMNLabel id="DiagramElement_a35c3f30-667f-4906-8c2f-70fb0e186fb7" labelStyle="Style_9f3fab87-242d-4376-af4b-366937b1ce20">
          <extension xmlns="http://www.omg.org/spec/DD/20100524/DI" />
          <Bounds x="419.33334350585937" y="97.581878662109375" width="0" height="0" xmlns="http://www.omg.org/spec/DD/20100524/DC" />
        </BPMNLabel>
      </BPMNShape>
      <BPMNShape id="DiagramElement_6fa29b15-cbae-410b-80fd-0421110a9e17" bpmnElement="_e6eb725a-34bc-45c7-aed0-9f9596cd7bee">
        <extension xmlns="http://www.omg.org/spec/DD/20100524/DI" />
        <Bounds x="414" y="155" width="83" height="68" xmlns="http://www.omg.org/spec/DD/20100524/DC" />
        <BPMNLabel id="DiagramElement_ab28d7c3-b86b-4ad2-8181-8ece1c76c807" labelStyle="Style_0cd7ecae-0a83-4e65-93e2-fb4d6590d3fb">
          <extension xmlns="http://www.omg.org/spec/DD/20100524/DI" />
          <Bounds x="419.33334350585937" y="182.58187866210937" width="0" height="0" xmlns="http://www.omg.org/spec/DD/20100524/DC" />
        </BPMNLabel>
      </BPMNShape>
      <BPMNShape id="DiagramElement_fb690f75-3550-4078-b911-8b7d597928ef" bpmnElement="_35fe57a7-1302-44e2-bf58-032f11af7ecb">
        <extension xmlns="http://www.omg.org/spec/DD/20100524/DI" />
        <Bounds x="333" y="168" width="42" height="42" xmlns="http://www.omg.org/spec/DD/20100524/DC" />
        <BPMNLabel id="DiagramElement_455a3648-b363-4cac-a96b-99fe2fcf3428" labelStyle="Style_bcf36f6d-d912-4861-a544-73ed2837a7e8">
          <extension xmlns="http://www.omg.org/spec/DD/20100524/DI" />
          <Bounds x="270.79318237304687" y="209.26589965820313" width="0" height="0" xmlns="http://www.omg.org/spec/DD/20100524/DC" />
        </BPMNLabel>
      </BPMNShape>
      <BPMNShape id="DiagramElement_377da205-5851-4e7f-a3c2-dadd4dc1da2b" bpmnElement="_7d399717-1aba-47ac-8d7d-8aaa033255e0">
        <extension xmlns="http://www.omg.org/spec/DD/20100524/DI" />
        <Bounds x="414" y="250" width="83" height="68" xmlns="http://www.omg.org/spec/DD/20100524/DC" />
        <BPMNLabel id="DiagramElement_90a06af7-c3b5-4bab-90f2-832a395a1fae" labelStyle="Style_5f26b270-7166-47bf-8263-537f015a74d8">
          <extension xmlns="http://www.omg.org/spec/DD/20100524/DI" />
          <Bounds x="419.33334350585937" y="277.58187866210937" width="0" height="0" xmlns="http://www.omg.org/spec/DD/20100524/DC" />
        </BPMNLabel>
      </BPMNShape>
      <BPMNShape id="DiagramElement_9701f195-6b26-44ce-9dc0-b7130c20b925" bpmnElement="_33c66216-391c-49c2-aa19-d8f0b7f5f91d">
        <extension xmlns="http://www.omg.org/spec/DD/20100524/DI" />
        <Bounds x="555" y="213" width="42" height="42" xmlns="http://www.omg.org/spec/DD/20100524/DC" />
        <BPMNLabel id="DiagramElement_1997c114-c1f6-426f-93e5-e8dbfa3bb53e" labelStyle="Style_cfaf7b76-be90-4d54-816a-d3bef5e5f782">
          <extension xmlns="http://www.omg.org/spec/DD/20100524/DI" />
          <Bounds x="588.32073974609375" y="245.41024780273437" width="0" height="0" xmlns="http://www.omg.org/spec/DD/20100524/DC" />
        </BPMNLabel>
      </BPMNShape>
      <BPMNEdge id="DiagramElement_59ed7a00-ed2f-4885-bba7-ccc9367a9459" bpmnElement="_b50f530c-3450-4e1a-b81f-ea346dc6e1cb">
        <extension xmlns="http://www.omg.org/spec/DD/20100524/DI" />
        <waypoint x="150" y="189" xmlns="http://www.omg.org/spec/DD/20100524/DI" />
        <waypoint x="168" y="189" xmlns="http://www.omg.org/spec/DD/20100524/DI" />
        <waypoint x="186" y="189" xmlns="http://www.omg.org/spec/DD/20100524/DI" />
        <BPMNLabel id="DiagramElement_57656087-6f6b-4463-883b-790befbab240" labelStyle="Style_ddf6fbe3-d40d-4a94-a95a-71741047bfc6">
          <extension xmlns="http://www.omg.org/spec/DD/20100524/DI" />
          <Bounds x="0" y="0" width="0" height="0" xmlns="http://www.omg.org/spec/DD/20100524/DC" />
        </BPMNLabel>
      </BPMNEdge>
      <BPMNEdge id="DiagramElement_095cf762-c4f4-47e1-83fe-a0949e335721" bpmnElement="_fe74c141-8843-4b00-a704-5e5e13be53b0">
        <extension xmlns="http://www.omg.org/spec/DD/20100524/DI" />
        <waypoint x="269" y="189" xmlns="http://www.omg.org/spec/DD/20100524/DI" />
        <waypoint x="287" y="189" xmlns="http://www.omg.org/spec/DD/20100524/DI" />
        <waypoint x="333" y="189" xmlns="http://www.omg.org/spec/DD/20100524/DI" />
        <BPMNLabel id="DiagramElement_d4f332af-efa1-4beb-bf87-e43f367ed518" labelStyle="Style_225ae7d1-1ded-4185-b2cb-e28062ddc19a">
          <extension xmlns="http://www.omg.org/spec/DD/20100524/DI" />
          <Bounds x="0" y="0" width="0" height="0" xmlns="http://www.omg.org/spec/DD/20100524/DC" />
        </BPMNLabel>
      </BPMNEdge>
      <BPMNEdge id="DiagramElement_15bccf31-cdbf-4cc1-93ea-0b72eab62823" bpmnElement="_f1478fb7-98c4-4c01-8c15-68bd04c91535">
        <extension xmlns="http://www.omg.org/spec/DD/20100524/DI" />
        <waypoint x="354" y="168" xmlns="http://www.omg.org/spec/DD/20100524/DI" />
        <waypoint x="354" y="104" xmlns="http://www.omg.org/spec/DD/20100524/DI" />
        <waypoint x="414" y="104" xmlns="http://www.omg.org/spec/DD/20100524/DI" />
        <BPMNLabel id="DiagramElement_2a4af27a-1e7b-490c-84e2-cd438e4fdd24" labelStyle="Style_66863169-173a-4100-9414-734fabb5d715">
          <extension xmlns="http://www.omg.org/spec/DD/20100524/DI" />
          <Bounds x="0" y="0" width="0" height="0" xmlns="http://www.omg.org/spec/DD/20100524/DC" />
        </BPMNLabel>
      </BPMNEdge>
      <BPMNEdge id="DiagramElement_66b94eb6-eb20-4c12-a675-d81f59dafd24" bpmnElement="_a3d40a56-9b7f-417e-911e-d39e7f18b90c">
        <extension xmlns="http://www.omg.org/spec/DD/20100524/DI" />
        <waypoint x="497" y="104" xmlns="http://www.omg.org/spec/DD/20100524/DI" />
        <waypoint x="686" y="104" xmlns="http://www.omg.org/spec/DD/20100524/DI" />
        <waypoint x="686" y="142" xmlns="http://www.omg.org/spec/DD/20100524/DI" />
        <BPMNLabel id="DiagramElement_b4c280d2-3df8-447f-bdd2-a721a5a2f5c2" labelStyle="Style_762fccf2-0043-4a84-a942-3714e7b6972c">
          <extension xmlns="http://www.omg.org/spec/DD/20100524/DI" />
          <Bounds x="0" y="0" width="0" height="0" xmlns="http://www.omg.org/spec/DD/20100524/DC" />
        </BPMNLabel>
      </BPMNEdge>
      <BPMNEdge id="DiagramElement_55d1c211-1bcd-47d8-ba35-6f6fc245c3b0" bpmnElement="_e9ebc7c7-995d-46db-86ce-d823bc2b4687">
        <extension xmlns="http://www.omg.org/spec/DD/20100524/DI" />
        <waypoint x="497" y="189" xmlns="http://www.omg.org/spec/DD/20100524/DI" />
        <waypoint x="576" y="189" xmlns="http://www.omg.org/spec/DD/20100524/DI" />
        <waypoint x="576" y="213" xmlns="http://www.omg.org/spec/DD/20100524/DI" />
        <BPMNLabel id="DiagramElement_5120a32a-3702-4b10-9979-4723e44b58e2" labelStyle="Style_8d103aea-54c4-4980-a703-c0d7a3fa464c">
          <extension xmlns="http://www.omg.org/spec/DD/20100524/DI" />
          <Bounds x="0" y="0" width="0" height="0" xmlns="http://www.omg.org/spec/DD/20100524/DC" />
        </BPMNLabel>
      </BPMNEdge>
      <BPMNEdge id="DiagramElement_b2bc2537-a88d-4bde-bf8e-0f1b63c1b744" bpmnElement="_698b593f-18eb-42ea-b8cd-bcd51e1514cc">
        <extension xmlns="http://www.omg.org/spec/DD/20100524/DI" />
        <waypoint x="497" y="284" xmlns="http://www.omg.org/spec/DD/20100524/DI" />
        <waypoint x="576" y="284" xmlns="http://www.omg.org/spec/DD/20100524/DI" />
        <waypoint x="576" y="255" xmlns="http://www.omg.org/spec/DD/20100524/DI" />
        <BPMNLabel id="DiagramElement_04a99ea2-65e4-4c20-8736-7b4bca9032a5" labelStyle="Style_a988b042-2560-46d6-804d-b036af31061c">
          <extension xmlns="http://www.omg.org/spec/DD/20100524/DI" />
          <Bounds x="0" y="0" width="0" height="0" xmlns="http://www.omg.org/spec/DD/20100524/DC" />
        </BPMNLabel>
      </BPMNEdge>
      <BPMNEdge id="DiagramElement_e8a0e20e-20da-4329-85e6-4f4dce80e96f" bpmnElement="_d4ce87c6-1373-45d6-a3b4-fbb2a04ee2e5">
        <extension xmlns="http://www.omg.org/spec/DD/20100524/DI" />
        <waypoint x="597" y="234" xmlns="http://www.omg.org/spec/DD/20100524/DI" />
        <waypoint x="686" y="234" xmlns="http://www.omg.org/spec/DD/20100524/DI" />
        <waypoint x="686" y="174" xmlns="http://www.omg.org/spec/DD/20100524/DI" />
        <BPMNLabel id="DiagramElement_6d1125be-76a7-4bfe-af08-de5a7d8e5804" labelStyle="Style_985bb54f-4704-4a53-b2d9-430ee17e5409">
          <extension xmlns="http://www.omg.org/spec/DD/20100524/DI" />
          <Bounds x="0" y="0" width="0" height="0" xmlns="http://www.omg.org/spec/DD/20100524/DC" />
        </BPMNLabel>
      </BPMNEdge>
      <BPMNEdge id="DiagramElement_f07d56b2-56f4-4bde-bad9-d285df8be9c7" bpmnElement="_a1570a53-28d2-41b1-a3a2-3e50c00d747e">
        <extension xmlns="http://www.omg.org/spec/DD/20100524/DI" />
        <waypoint x="374" y="189" xmlns="http://www.omg.org/spec/DD/20100524/DI" />
        <waypoint x="392" y="189" xmlns="http://www.omg.org/spec/DD/20100524/DI" />
        <waypoint x="414" y="189" xmlns="http://www.omg.org/spec/DD/20100524/DI" />
        <BPMNLabel id="DiagramElement_14a3c913-8de5-434c-aefa-3a50fecdf778" labelStyle="Style_74553b0e-62f2-4291-9189-2d6885116503">
          <extension xmlns="http://www.omg.org/spec/DD/20100524/DI" />
          <Bounds x="0" y="0" width="0" height="0" xmlns="http://www.omg.org/spec/DD/20100524/DC" />
        </BPMNLabel>
      </BPMNEdge>
      <BPMNEdge id="DiagramElement_b053dd6f-d349-4d60-859b-57660e06a280" bpmnElement="_20ebb3c1-5178-4c7c-a91d-23e58f2aa73b">
        <extension xmlns="http://www.omg.org/spec/DD/20100524/DI" />
        <waypoint x="354" y="210" xmlns="http://www.omg.org/spec/DD/20100524/DI" />
        <waypoint x="354" y="284" xmlns="http://www.omg.org/spec/DD/20100524/DI" />
        <waypoint x="414" y="284" xmlns="http://www.omg.org/spec/DD/20100524/DI" />
        <BPMNLabel id="DiagramElement_41c8942b-b95b-4dab-8cb6-0dc3a257eac6" labelStyle="Style_07d0e40b-5e52-4c2f-a428-a92f8d77ce78">
          <extension xmlns="http://www.omg.org/spec/DD/20100524/DI" />
          <Bounds x="0" y="0" width="0" height="0" xmlns="http://www.omg.org/spec/DD/20100524/DC" />
        </BPMNLabel>
      </BPMNEdge>
      <BPMNShape id="DiagramElement_ab684c07-8a7a-43dd-93a5-1720bb925831" bpmnElement="Id_0c7bd657-1505-4ca5-8a47-15bbb5a83523" isHorizontal="true">
        <extension xmlns="http://www.omg.org/spec/DD/20100524/DI" />
        <Bounds x="30" y="30" width="0" height="0" xmlns="http://www.omg.org/spec/DD/20100524/DC" />
      </BPMNShape>
    </BPMNPlane>
    <BPMNLabelStyle id="Style_35e829d8-1dc4-443b-8f15-7bfc8038eab5">
      <Font name="Arial" size="8" isBold="false" isItalic="false" isUnderline="false" isStrikeThrough="false" xmlns="http://www.omg.org/spec/DD/20100524/DC" />
    </BPMNLabelStyle>
    <BPMNLabelStyle id="Style_6b41969d-9f3b-4d41-be89-6b5b6a905a1d">
      <Font name="Arial" size="8" isBold="false" isItalic="false" isUnderline="false" isStrikeThrough="false" xmlns="http://www.omg.org/spec/DD/20100524/DC" />
    </BPMNLabelStyle>
    <BPMNLabelStyle id="Style_d0491eba-3243-4e39-a2ae-358f99a6e57c">
      <Font name="Arial" size="8" isBold="false" isItalic="false" isUnderline="false" isStrikeThrough="false" xmlns="http://www.omg.org/spec/DD/20100524/DC" />
    </BPMNLabelStyle>
    <BPMNLabelStyle id="Style_9f3fab87-242d-4376-af4b-366937b1ce20">
      <Font name="Arial" size="8" isBold="false" isItalic="false" isUnderline="false" isStrikeThrough="false" xmlns="http://www.omg.org/spec/DD/20100524/DC" />
    </BPMNLabelStyle>
    <BPMNLabelStyle id="Style_0cd7ecae-0a83-4e65-93e2-fb4d6590d3fb">
      <Font name="Arial" size="8" isBold="false" isItalic="false" isUnderline="false" isStrikeThrough="false" xmlns="http://www.omg.org/spec/DD/20100524/DC" />
    </BPMNLabelStyle>
    <BPMNLabelStyle id="Style_bcf36f6d-d912-4861-a544-73ed2837a7e8">
      <Font name="Arial" size="8" isBold="false" isItalic="false" isUnderline="false" isStrikeThrough="false" xmlns="http://www.omg.org/spec/DD/20100524/DC" />
    </BPMNLabelStyle>
    <BPMNLabelStyle id="Style_5f26b270-7166-47bf-8263-537f015a74d8">
      <Font name="Arial" size="8" isBold="false" isItalic="false" isUnderline="false" isStrikeThrough="false" xmlns="http://www.omg.org/spec/DD/20100524/DC" />
    </BPMNLabelStyle>
    <BPMNLabelStyle id="Style_cfaf7b76-be90-4d54-816a-d3bef5e5f782">
      <Font name="Arial" size="8" isBold="false" isItalic="false" isUnderline="false" isStrikeThrough="false" xmlns="http://www.omg.org/spec/DD/20100524/DC" />
    </BPMNLabelStyle>
    <BPMNLabelStyle id="Style_ddf6fbe3-d40d-4a94-a95a-71741047bfc6">
      <Font name="Segoe UI" size="8" isBold="false" isItalic="false" isUnderline="false" isStrikeThrough="false" xmlns="http://www.omg.org/spec/DD/20100524/DC" />
    </BPMNLabelStyle>
    <BPMNLabelStyle id="Style_225ae7d1-1ded-4185-b2cb-e28062ddc19a">
      <Font name="Segoe UI" size="8" isBold="false" isItalic="false" isUnderline="false" isStrikeThrough="false" xmlns="http://www.omg.org/spec/DD/20100524/DC" />
    </BPMNLabelStyle>
    <BPMNLabelStyle id="Style_66863169-173a-4100-9414-734fabb5d715">
      <Font name="Segoe UI" size="8" isBold="false" isItalic="false" isUnderline="false" isStrikeThrough="false" xmlns="http://www.omg.org/spec/DD/20100524/DC" />
    </BPMNLabelStyle>
    <BPMNLabelStyle id="Style_762fccf2-0043-4a84-a942-3714e7b6972c">
      <Font name="Segoe UI" size="8" isBold="false" isItalic="false" isUnderline="false" isStrikeThrough="false" xmlns="http://www.omg.org/spec/DD/20100524/DC" />
    </BPMNLabelStyle>
    <BPMNLabelStyle id="Style_8d103aea-54c4-4980-a703-c0d7a3fa464c">
      <Font name="Segoe UI" size="8" isBold="false" isItalic="false" isUnderline="false" isStrikeThrough="false" xmlns="http://www.omg.org/spec/DD/20100524/DC" />
    </BPMNLabelStyle>
    <BPMNLabelStyle id="Style_a988b042-2560-46d6-804d-b036af31061c">
      <Font name="Segoe UI" size="8" isBold="false" isItalic="false" isUnderline="false" isStrikeThrough="false" xmlns="http://www.omg.org/spec/DD/20100524/DC" />
    </BPMNLabelStyle>
    <BPMNLabelStyle id="Style_985bb54f-4704-4a53-b2d9-430ee17e5409">
      <Font name="Segoe UI" size="8" isBold="false" isItalic="false" isUnderline="false" isStrikeThrough="false" xmlns="http://www.omg.org/spec/DD/20100524/DC" />
    </BPMNLabelStyle>
    <BPMNLabelStyle id="Style_74553b0e-62f2-4291-9189-2d6885116503">
      <Font name="Segoe UI" size="8" isBold="false" isItalic="false" isUnderline="false" isStrikeThrough="false" xmlns="http://www.omg.org/spec/DD/20100524/DC" />
    </BPMNLabelStyle>
    <BPMNLabelStyle id="Style_07d0e40b-5e52-4c2f-a428-a92f8d77ce78">
      <Font name="Segoe UI" size="8" isBold="false" isItalic="false" isUnderline="false" isStrikeThrough="false" xmlns="http://www.omg.org/spec/DD/20100524/DC" />
    </BPMNLabelStyle>
  </BPMNDiagram>
</definitions>`;

    const json = new BpmnXmlParser().parse(a20Processe);

    expect(json).toMatchObject({
      definitions: {
        process: [
          {
            id: 'WFP-6-',
            isExecutable: false,
            startEvent: {
              id: '_6b5db6a9-037a-49ad-9201-09201e2aaa97',
              name: 'Start Event',
              extensionElements: {
                BizagiExtensions: {
                  BizagiProperties: {
                    BizagiProperty: [
                      { name: 'bgColor', value: 'White' },
                      { name: 'borderColor', value: 'Black' },
                    ],
                  },
                },
              },
              outgoing: '_b50f530c-3450-4e1a-b81f-ea346dc6e1cb',
            },
            endEvent: {
              id: '_258f51eb-b764-4a71-b681-3a01cca14143',
              name: 'End Event',
              extensionElements: anything(),
              incoming: ['_a3d40a56-9b7f-417e-911e-d39e7f18b90c', '_d4ce87c6-1373-45d6-a3b4-fbb2a04ee2e5'],
            },
            task: arrayContaining([anything()]),
            exclusiveGateway: arrayContaining([anything()]),
            sequenceFlow: arrayContaining([anything()]),
          },
          anything(),
        ],
        BPMNDiagram: {
          BPMNPlane: {
            BPMNShape: arrayContaining([anything()]),
            BPMNEdge: arrayContaining([
              {
                id: 'DiagramElement_59ed7a00-ed2f-4885-bba7-ccc9367a9459',
                bpmnElement: '_b50f530c-3450-4e1a-b81f-ea346dc6e1cb',
                waypoint: [anything(), anything(), anything()],
                BPMNLabel: {
                  Bounds: {
                    height: 0,
                    width: 0,
                    x: 0,
                    y: 0,
                  },
                  extension: '',
                  id: 'DiagramElement_57656087-6f6b-4463-883b-790befbab240',
                  labelStyle: 'Style_ddf6fbe3-d40d-4a94-a95a-71741047bfc6',
                },
                extension: '',
              },
            ]),
          },
          BPMNLabelStyle: arrayContaining([
            { id: 'Style_6b41969d-9f3b-4d41-be89-6b5b6a905a1d', Font: { name: 'Arial', size: 8, isBold: false, isItalic: false, isStrikeThrough: false, isUnderline: false } },
          ]),
        },
      },
    });

    expect(json.definitions.process[0].task).toHaveLength(4);
    expect(json.definitions.process[0].exclusiveGateway).toHaveLength(2);
    expect(json.definitions.process[0].sequenceFlow).toHaveLength(9);
    expect(json.definitions.BPMNDiagram.BPMNPlane.BPMNShape).toHaveLength(10);
    expect(json.definitions.BPMNDiagram.BPMNPlane.BPMNEdge).toHaveLength(9);
    expect(json.definitions.BPMNDiagram.BPMNLabelStyle).toHaveLength(17);
  });
});
