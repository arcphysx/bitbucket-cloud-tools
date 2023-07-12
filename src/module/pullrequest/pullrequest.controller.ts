import { Body, Controller, Post, Headers } from "@nestjs/common"
import { ApiBasicAuth, ApiOkResponse, ApiTags } from "@nestjs/swagger"
import { PullrequestService } from "./pullrequest.service"

@Controller('pr')
@ApiTags('Pullrequest Controller')
export class PullrequestController {
  constructor(private readonly pullrequestService: PullrequestService) {}
  
  @Post('auto_code_review')
  @ApiOkResponse()
  @ApiBasicAuth('bitbucket-credentials')
  async autoCodeReview(@Headers() headers) {

  }
}