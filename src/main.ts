import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
// import { NestExpressApplication } from './'
import { DispatchError } from './shared/filters/dispatch-error';

async function bootstrap() {
  // const app = await NestFactory.create<NestExpressApplication>(AppModule, {cors: {
    const app = await NestFactory.create(AppModule, {cors: {
    origin: true,
    preflightContinue: false,
  }});
  
  // app.useGlobalFilters(new DispatchError());

  await app.listen(8080);
}
bootstrap();
