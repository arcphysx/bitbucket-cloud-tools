import { Module } from "@nestjs/common";
import { AccountService } from "./account.service";
import { AccountController } from "./account.controller";
import { BitbucketModule } from "src/shared-module/bitbucket/bitbucket.module";

@Module({
    imports: [BitbucketModule],
    controllers: [AccountController],
    providers: [AccountService],
    exports: [AccountService]
})
export class AccountModule { }
