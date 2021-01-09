import { NestFactory } from '@nestjs/core';
import * as bodyParser from 'body-parser';

import { AppModule } from './app.module';
// import { NestExpressApplication } from './'
// import { DispatchError } from './shared/filters/dispatch-error';

async function bootstrap() {
  // const app = await NestFactory.create<NestExpressApplication>(AppModule, {cors: {
    const app = await NestFactory.create(AppModule, {cors: {
    origin: true,
    preflightContinue: false,
  }});
  app.use(bodyParser.json({limit: '20mb'}));
  app.use(bodyParser.urlencoded({limit: '20mb', extended: true}));
  // app.enableCors();
  // app.useGlobalFilters(new DispatchError());

  await app.listen(8080);
}
bootstrap();
