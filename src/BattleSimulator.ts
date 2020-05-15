import { Battle } from './core/battle';
import { ArmyInterface } from './models';

interface iBattleSimulator {
  init: () => void;
}

export class BattleSimulator implements iBattleSimulator {
  private armies: ArmyInterface[] = [];
  constructor(armies: ArmyInterface[]) {
    this.armies = armies;
  }
  init() {
    const battle = new Battle(this.armies);
    battle.start();
  }
}
