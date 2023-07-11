import { Module } from "@nestjs/common";
import { KpiController } from "./kpi.controller";
import { KpiService } from "./kpi.service";


@Module({
    imports: [],
    controllers: [KpiController],
    providers: [KpiService],
})
export class KpiModule { }
