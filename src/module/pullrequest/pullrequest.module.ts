import { Module } from "@nestjs/common";
import { PullrequestService } from "./pullrequest.service";
import { PullrequestController } from "./pullrequest.controller";
import { BitbucketModule } from "src/shared-module/bitbucket/bitbucket.module";

@Module({
    imports: [BitbucketModule],
    controllers: [PullrequestController],
    providers: [PullrequestService],
    exports: [PullrequestService]
})
export class PullrequestModule { }
