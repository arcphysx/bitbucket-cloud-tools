import { ApiProperty } from "@nestjs/swagger"


export class GetDefaultReviewerRequest{

    @ApiProperty({type: String})
    workspace: string

    @ApiProperty({type: String})
    repoSlug: string
}