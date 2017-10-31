interface FlowModel {
  id: number;
  name: string;
  description: string;

  sensorId: number;
  sensorCapabilityId: number;
  sensorValue: number;

  actuatorId: number;
  actuatorCapabilityIdIfSensorValMet: number;
  actuatorCapabilityIdIfSensorValNotMet: number;
  actuationValue: number;
}
