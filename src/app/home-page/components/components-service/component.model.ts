interface ComponentModel {
  deviceId: number;
  name: string;
  description: string;
  endpointRoot: string;
  componentType: {
    name: string;
    id: number;
  };
  capabilities: [
    {
      name: string;
      description: string;
      endpointUrl: string;
      id: number;
    }
  ];
  id: number;

}
