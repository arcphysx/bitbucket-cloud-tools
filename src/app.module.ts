import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { KpiModule } from './module/kpi/kpi.module';
import { AccountModule } from './module/account/account.module';
import { PullrequestModule } from './module/pullrequest/pullrequest.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    KpiModule,
    AccountModule,
    PullrequestModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
