import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api')

  const config = new DocumentBuilder()
    .setTitle('Bitbucket Cloud Tools')
    .setDescription('Bitbucket cloud tools')
    .setVersion('1.0')
    .addBasicAuth({type: 'http'}, "bitbucket-credentials")
    .build();
  const document = SwaggerModule.createDocument(app, config,{
    ignoreGlobalPrefix: false
  });
  SwaggerModule.setup('docs', app, document);

  await app.listen(3000);
}
bootstrap();
