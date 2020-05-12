import fs from 'fs';
import { Battle } from './core/battle';

export class Application {
  async init() {
    const data = JSON.parse(fs.readFileSync('./data/data.json', 'utf-8'));
    const battle = new Battle(data.armies);
    battle.start();
  }
}
