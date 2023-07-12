import { Body, Controller, Get, Headers, Post } from "@nestjs/common";
import { ApiBasicAuth, ApiOkResponse, ApiParam, ApiTags } from "@nestjs/swagger";
import { CodeReviewSummaryRequest } from "./dto/request/CodeReviewSummary.request";
import { KpiService } from "./kpi.service";
import { BasicAuthDecoder } from "src/shared-module/auth/BasicAuthDecoder";
import { BitbucketCredential } from "src/shared-module/bitbucket/dto/BitbucketCredential.interface";


@Controller('kpi')
@ApiTags('KPI Controller')
export class KpiController {
  constructor(private readonly kpiService: KpiService) {}
  
  @Post('code_review_activeness_summary')
  @ApiOkResponse()
  @ApiBasicAuth('bitbucket-credentials')
  async summaryCodeReviewActiveness(@Headers() headers, @Body() codeReviewSummaryRequest: CodeReviewSummaryRequest) {
    let response = this.kpiService.getCodeReviewActivenessSummaryForUser(BasicAuthDecoder.decode(headers['authorization']) as BitbucketCredential, codeReviewSummaryRequest)
    return response
  }
  
}
