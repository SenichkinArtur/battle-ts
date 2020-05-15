import { Soldier } from './Soldier';

export class Vehicle {
  recharge: number = 0;
  health: number = 0;
  operators: Soldier[] = [];
  constructor(recharge: number, health: number, operators: Soldier[]) {
    this.recharge = recharge;
    this.health = health;
    this.operators = operators;
  }
}
