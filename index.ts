import fs from 'fs';
import { BattleSimulator } from './src/BattleSimulator';

const main = async (): Promise<void> => {
  const data = JSON.parse(fs.readFileSync('./data/data.json', 'utf-8'));
  const simulator: BattleSimulator = new BattleSimulator(data.armies);

  simulator.init();
}

main();
