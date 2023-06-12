import { Processor, WorkerHost } from '@nestjs/bullmq';
import { Injectable } from '@nestjs/common';
import { Job } from 'bullmq';

/**
 * Worker for the `builds` BullMQ queue.
 */
@Processor('builds')
@Injectable()
export class QueueWorker extends WorkerHost {
  async process(job: Job<any, any, string>): Promise<any> {
    return {};
  }
}
