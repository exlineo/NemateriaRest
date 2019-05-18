import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DispatchError } from './shared/filters/dispatch-error';

declare const module: any;

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {cors: {
    origin: true,
    preflightContinue: false,
  }});

  // app.useGlobalFilters(new DispatchError());
  
  await app.listen(8080);

  if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => app.close());
  }
}
bootstrap();
