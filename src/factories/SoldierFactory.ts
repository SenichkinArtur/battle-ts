import { Soldier } from "../units/Soldier";
import { UnitInterface } from "../models";

export class SoldierFactory {
  static create(soldier: UnitInterface) {
    return new Soldier(soldier.recharge, soldier.health);
  }
}
