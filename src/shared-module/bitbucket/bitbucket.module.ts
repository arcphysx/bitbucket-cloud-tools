import { Module } from "@nestjs/common";
import { BitbucketService } from "./bitbucket.service";

@Module({
    imports: [],
    controllers: [],
    providers: [BitbucketService],
})
export class BitbucketModule { }
