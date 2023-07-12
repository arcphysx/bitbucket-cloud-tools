import { Injectable } from "@nestjs/common";
import { BitbucketCredential } from "./dto/BitbucketCredential.interface";
import { Bitbucket } from 'bitbucket'
import { PullRequestState } from "../enum/PullRequestState.enum";

@Injectable()
export class BitbucketService {

    async getPullRequestListByWorkspaceAndRepoSlugAndState(credential: BitbucketCredential, workspace: string, repo_slug: string, state: PullRequestState, page: number = 1, pagelen: number = 10, sort: string = "-id", fields: string = "+values.participants"){
        const bitbucketSdk = new Bitbucket({auth: credential})
        let prList = await bitbucketSdk.pullrequests.list({workspace: workspace, repo_slug: repo_slug, state: state, page: page.toString(), pagelen: pagelen, sort: sort, fields: fields})
        return prList
    }

    async getUserInfoFromCredential(credential: BitbucketCredential){
        const bitbucketSdk = new Bitbucket({auth: credential})
        let userInfo = await bitbucketSdk.user.get({})
        console.log(userInfo)
        return userInfo.data
    }

    async getDefaultReviewerListByWorkspaceAndRepoSlug(credential: BitbucketCredential, workspace: string, repo_slug: string, page: number = 1, pagelen: number = 10){
        const bitbucketSdk = new Bitbucket({auth: credential})
        let list = await bitbucketSdk.repositories.listDefaultReviewers({workspace: workspace, repo_slug: repo_slug, page: page.toString(), pagelen: pagelen })
        return list.data
    }
}
