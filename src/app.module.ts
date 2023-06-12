import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { QueueWorker } from './app.worker';
import { BullModule } from '@nestjs/bullmq';

@Module({
  imports: [
    BullModule.forRootAsync({
      useFactory: async () => {
        return {
          connection: {
            maxRetriesPerRequest: null,
            host: 'myredis',
          },
        };
      },
    }),
    BullModule.registerQueue({
      name: 'builds',
    }),
  ],
  controllers: [AppController],
  providers: [AppService, QueueWorker],
})
export class AppModule {}
