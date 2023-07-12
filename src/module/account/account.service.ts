import { Injectable } from "@nestjs/common";
import { BitbucketService } from "src/shared-module/bitbucket/bitbucket.service";
import { BitbucketCredential } from "src/shared-module/bitbucket/dto/BitbucketCredential.interface";
import { GetDefaultReviewerRequest } from "./dto/request/GetDefaultReviewer.request";

@Injectable()
export class AccountService {
    constructor(private readonly bitbucketService: BitbucketService) { }

    async getCurrentUserInfo(credential: BitbucketCredential){
        return await this.bitbucketService.getUserInfoFromCredential(credential)
    }

    async getDefaultReviewerList(credential: BitbucketCredential, defaultReviewerRequest: GetDefaultReviewerRequest){
        return await this.bitbucketService.getDefaultReviewerListByWorkspaceAndRepoSlug(credential, defaultReviewerRequest.workspace, defaultReviewerRequest.repoSlug, 1, 90)
    }
}