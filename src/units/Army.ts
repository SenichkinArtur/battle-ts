import { Squad } from './Squad';

export class Army {
  squads: Squad[] = [];
  name: string = '';
  constructor(name: string, squads: Squad[]) {
    this.squads = squads;
    this.name = name;
  }
}
