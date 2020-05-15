import { Army } from '../units/Army';
import { SquadFactory } from './SquadFactory';
import { ArmyInterface } from '../models';

export class ArmyFactory {
  static create(army: ArmyInterface) {
    const squads = army.squads.map(squad => SquadFactory.create(squad));
    
    return new Army(army.name, squads);
  }
}
