import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.setGlobalPrefix("api")

  app.enableCors({
    origin:['http:localhost:3000', 'http://87.228.88.172:3000']
  })
  await app.listen(process.env.PORT ?? 4200);
}
bootstrap();
