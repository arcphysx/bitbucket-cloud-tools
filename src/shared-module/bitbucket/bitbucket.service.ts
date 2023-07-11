import { Injectable } from "@nestjs/common";
import { BitbucketCredential } from "../interface/BitbucketCredential.interface";
import { Bitbucket } from 'bitbucket'

@Injectable()
export class BitbucketService {

    async getPullRequestListByWorkspace(credential: BitbucketCredential, workspace: string, repo_slug: string){
        const bitbucketSdk = new Bitbucket({auth: credential})
        let prList = await bitbucketSdk.pullrequests.list({workspace: workspace, repo_slug})
        return prList
    }
}