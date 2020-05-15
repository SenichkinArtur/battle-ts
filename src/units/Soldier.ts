import { random } from '../helper/helper';

interface iSoldier {
  getAtackProbability: () => number;
  makeDamage: () => number;
}

export class Soldier implements iSoldier {
  recharge: number = 0;
  health: number = 0;
  experience: number = 0;
  constructor(recharge: number, health: number) {
    this.recharge = recharge;
    this.health = health;
    this.experience = 0;
  }

  getAtackProbability() {
    return 0.5 * (1 + this.health / 100) * random(50 + this.experience, 100) / 100;
  }

  makeDamage() {
    return 0.05 + this.experience / 100;
  }
}
