import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TaskModule } from './task/task.module';
import { ListModule } from './list/list.module';

@Module({
  imports: [TaskModule, ListModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
