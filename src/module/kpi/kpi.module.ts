import { Module } from "@nestjs/common";
import { KpiController } from "./kpi.controller";
import { KpiService } from "./kpi.service";
import { BitbucketModule } from "src/shared-module/bitbucket/bitbucket.module";


@Module({
    imports: [BitbucketModule],
    controllers: [KpiController],
    providers: [KpiService],
})
export class KpiModule { }
