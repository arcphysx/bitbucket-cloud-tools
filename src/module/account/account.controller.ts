import { Body, Controller, Get, Headers, Post } from "@nestjs/common"
import { ApiBasicAuth, ApiOkResponse, ApiTags } from "@nestjs/swagger"
import { AccountService } from "./account.service"
import { BasicAuthDecoder } from "src/shared-module/auth/BasicAuthDecoder"
import { BitbucketCredential } from "src/shared-module/bitbucket/dto/BitbucketCredential.interface"
import { GetDefaultReviewerRequest } from "./dto/request/GetDefaultReviewer.request"

@Controller('account')
@ApiTags('Account Controller')
export class AccountController {
  constructor(private readonly accountService: AccountService) {}
  
  @Get('current_user')
  @ApiOkResponse()
  @ApiBasicAuth('bitbucket-credentials')
  async currentUser(@Headers() headers) {
    let response = this.accountService.getCurrentUserInfo(BasicAuthDecoder.decode(headers['authorization']) as BitbucketCredential)
    return response
  }

  @Post('default_reviewer_list')
  @ApiOkResponse()
  @ApiBasicAuth('bitbucket-credentials')
  async defaultReviewerList(@Headers() headers, @Body() defaultReviewerList: GetDefaultReviewerRequest) {
    let response = this.accountService.getDefaultReviewerList(BasicAuthDecoder.decode(headers['authorization']) as BitbucketCredential, defaultReviewerList)
    return response
  }
}