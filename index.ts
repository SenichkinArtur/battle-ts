import { Application } from './src/main';

const main = async (): Promise<void> => {
  const app: Application = new Application();
  console.log('app: ', app);
  app.init();
}

main();
