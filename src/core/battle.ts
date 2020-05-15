import { Army } from '../units/Army';
import { ArmyFactory } from '../factories/ArmyFactory';
import { ArmyInterface } from '../models';

interface iBattle {
  start: () => void;
}

export class Battle implements iBattle {
  private armies: ArmyInterface[] = [];
  initializedArmies: Army[] = [];

  constructor(armies: ArmyInterface[]) {
    this.armies = armies;
  }

  start() {
    this.initializedArmies = this.armies.map(army => ArmyFactory.create(army));
    // console.log('armies: ', this.initializedArmies);
  }
}
