var fs = require('fs');
import { Battle } from './core/battle';

export class Application {
  async init() {
    const data = JSON.parse(fs.readFileSync('../data/data.json'));
    const battle = new Battle(data.armies);
    battle.start();
  }
}
