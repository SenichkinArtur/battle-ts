import { Squad } from "../units/Squad";
import { SoldierFactory } from "./SoldierFactory";
import { VehicleFactory } from "./VehicleFactory";
import { UnitType, SquadInterface, UnitInterface } from '../models';

export class SquadFactory {
  static create(squad: SquadInterface) {
    switch (squad.type) {
      case UnitType.Vehicle: {
        const units: UnitInterface[] = squad.units;
        const vehicles = units.map(unit => VehicleFactory.create(unit));

        return new Squad(squad.type, vehicles);
      }
      case UnitType.Soldier: {
        const units: UnitInterface[] = squad.units;
        const soldiers = units.map(unit => SoldierFactory.create(unit));

        return new Squad(squad.type, soldiers)
      }
      default: {
        return new Squad(squad.type, []);
      }
    }
  }
}
