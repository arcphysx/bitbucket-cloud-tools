import { Injectable } from "@nestjs/common";
import { BitbucketCredential } from "../interface/BitbucketCredential.interface";
import { Bitbucket } from 'bitbucket'

@Injectable()
export class BitbucketService {

    async getPullRequestListByWorkspaceAndRepoSlug(credential: BitbucketCredential, workspace: string, repo_slug: string, page: number = 1, pagelen: number = 10){
        const bitbucketSdk = new Bitbucket({auth: credential})
        let prList = await bitbucketSdk.pullrequests.list({workspace: workspace, repo_slug: repo_slug, page: page.toString(), pagelen: pagelen})
        return prList
    }
}
