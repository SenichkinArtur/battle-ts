import { Vehicle } from '../units/Vehicle';
import { SoldierFactory } from './SoldierFactory';
import { UnitInterface } from '../models';

export class VehicleFactory {
  static create(vehicle: UnitInterface) {
    const operators = vehicle.operators; 
    const soldiers = operators ? operators.map(operator => SoldierFactory.create(operator)) : [];
    return new Vehicle(vehicle.recharge, vehicle.health, soldiers);
  }
}
