interface FlowModel {
  id: number;
  name: string;
  description: string;

  sensorId: number;
  sensorCapabilityId: number;
  sensorValue: number;

  actuatorId: number;
  actuatorCapabilityId: number;
  actuationValue: number;
}
