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

}
