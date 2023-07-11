import { Controller, Get } from "@nestjs/common";
import { ApiBasicAuth, ApiOkResponse, ApiTags } from "@nestjs/swagger";


@Controller('kpi')
@ApiTags('KPI Controller')
export class KpiController {
  constructor() {}
  
  @Get('code_review_activeness_summary')
  @ApiOkResponse()
  @ApiBasicAuth('bitbucket-credentials')
  async summaryCodeReviewActiveness() {
    return {"success": true}
  }
  
}
