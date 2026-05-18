import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LoggerMiddleware } from './common/middlware/logger/logger.middleware';
import { LoggerModule } from './common/middlware/logger/logger.module';
import { SongsController } from './songs/songs.controller';
import { SongsModule } from './songs/songs.module';

@Module({
  imports: [SongsModule, LoggerModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes(SongsController);
  }
}
