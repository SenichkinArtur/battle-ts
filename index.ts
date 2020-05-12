import { Application } from './src/main';

const main = async (): Promise<void> => {
  const app: Application = new Application();
  app.init();
}

main();
