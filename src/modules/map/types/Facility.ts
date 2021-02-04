export type Facility = {
  id: number;
  name: {
    fi: string;
    sv: string;
    en: string;
  };
  location: {
    crs: {
      type: string;
      properties: {
        name: string;
      };
    };
    bbox: number[];
    type: string;
    coordinates: any;
  };
  operatorId: number;
  type: string;
  status: string;
  pricingMethod: string;
  statusDescription?: string;
  softDeletedAt?: string;
  builtCapacity: {
    CAR: number;
  };
  usages: string[];
};
