import { UnitInterface } from "../models";

export class Squad {
  type: string = '';
  units: UnitInterface[] = [];
  constructor(type: string, units: UnitInterface[]) {
    this.type = type;
    this.units = units;
  }
}
