import { Injectable } from "@nestjs/common";
import { BitbucketService } from "src/shared-module/bitbucket/bitbucket.service";

@Injectable()
export class PullrequestService {
    constructor(private readonly bitbucketService: BitbucketService) { }
}