import { Squad } from "../units/Squad";
import { SoldierFactory } from "./SoldierFactory";
import { VehicleFactory } from "./VehicleFactory";
import { UnitType, SquadInterface } from '../models';

export class SquadFactory {
  static create(squad: SquadInterface) {
    switch (squad.type) {
      case UnitType.Vehicles: {
        const vehicles = squad.units.map(unit => VehicleFactory.create(unit));
        return new Squad(squad.type, vehicles);
      }
      case UnitType.Soldiers: {
        const soldiers = squad.units.map(unit => SoldierFactory.create(unit));
        return new Squad(squad.type, soldiers)
      }
      default: {
        return new Squad(squad.type, []);
      }
    }
  }
}
