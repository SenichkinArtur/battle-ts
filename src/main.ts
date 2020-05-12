// import fs from 'fs';
var fs = require('fs');
import { Battle } from './core/battle';

export class Application {
  async init() {
    const json = JSON.parse(fs.readFileSync('../data/data.json'));
    const battle = new Battle(json.armies);
    battle.start();
  }
}
