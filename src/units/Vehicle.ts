import { Soldier } from './Soldier';

interface iVehicle {
  getAtackProbability: () => number;
  makeDamage: () => void;
}

export class Vehicle implements iVehicle {
  recharge: number = 0;
  health: number = 0;
  operators: Soldier[] = [];
  constructor(recharge: number, health: number, operators: Soldier[]) {
    this.recharge = recharge;
    this.health = health;
    this.operators = operators;
  }
  
  private getAvgOperatorsAtackSuccess(): number {
    return (this.operators.map(operator => operator.getAtackProbability())
      .reduce((sum, probability) => sum + probability)) / this.operators.length;
  }

  getAtackProbability() {
    return 0.5 * (1 + this.health / 100) * this.getAvgOperatorsAtackSuccess();
  }

  makeDamage() {
    this.health = 0.1 + this.operators.map(operator => operator.experience)
      .reduce((sum, exp) => sum + (exp / 100));
  }
}
