import { Injectable } from "@nestjs/common";
import { CodeReviewSummaryRequest } from "./dto/request/CodeReviewSummary.request";
import { BitbucketCredential } from "src/shared-module/bitbucket/dto/BitbucketCredential.interface";
import { BitbucketService } from "src/shared-module/bitbucket/bitbucket.service";
import { PullRequestState } from "src/shared-module/enum/PullRequestState.enum";
import { CodeReviewSummaryResponse } from "./dto/response/CodeReviewSummary.response";

@Injectable()
export class KpiService {
    constructor(private readonly bitbucketService: BitbucketService) { }

    async getCodeReviewActivenessSummaryForUser(credential: BitbucketCredential, codeReviewSummaryRequest: CodeReviewSummaryRequest) {
        let prList = {}
        let totalPrCount = 0
        let totalSelfPr = 0
        let totalReviewedByUser = 0
        for (let i = 0; i < codeReviewSummaryRequest.repoSlug.length; i++) {
            const element = codeReviewSummaryRequest.repoSlug[i];
            let stillAfterStartDate = true
            let currentPage = 0
            let subPrList = []
            while (stillAfterStartDate) {
                currentPage += 1
                let list = await this.bitbucketService.getPullRequestListByWorkspaceAndRepoSlugAndState(
                    credential,
                    codeReviewSummaryRequest.workspace,
                    element,
                    PullRequestState.MERGED,
                    currentPage,
                    50,
                    "-created_on"
                )
                for (let j = 0; j < list.data.values.length; j++) {
                    const element = list.data.values[j];
                    let endDate = new Date(codeReviewSummaryRequest.endDate)
                    endDate.setUTCHours(0,0,0,0)
                    let startDate = new Date(codeReviewSummaryRequest.startDate)
                    startDate.setUTCHours(0,0,0,0)
                    let prCreatedDate = new Date(element.created_on)
                    prCreatedDate.setUTCHours(0,0,0,0)
                    if(prCreatedDate < startDate){
                        stillAfterStartDate = false
                        break
                    }
                    if(prCreatedDate <= endDate){
                        subPrList.push(element)
                        if(element.author.uuid == codeReviewSummaryRequest.summaryForUserId) totalSelfPr += 1
                        else{
                            let reviewerUuidList = element.participants.filter(i => i.user.uuid == codeReviewSummaryRequest.summaryForUserId && i.approved == true)
                            if(reviewerUuidList.length > 0) totalReviewedByUser += 1
                        }
                    }
                }
            }
            prList[element] = subPrList
            totalPrCount += subPrList.length
        }
        
        return {
            totalPrCount: totalPrCount,
            totalReviewedByUser: totalReviewedByUser,
            totalSelfPr: totalSelfPr,
            activeness: (totalReviewedByUser*1.0)/((totalPrCount - totalSelfPr)*1.0) || 0,
            contributeness: (totalSelfPr*1.0)/(totalPrCount*1.0) || 0
        } as CodeReviewSummaryResponse
    }
}
