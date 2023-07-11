import { ApiProperty } from "@nestjs/swagger"

export class CodeReviewSummaryRequest{

    @ApiProperty({type: String})
    workspace: string

    @ApiProperty({type: [String]})
    repoSlug: Array<string>

    @ApiProperty({type: String})
    summaryForUserId: string

    @ApiProperty({type: String, example: new Date()})
    startDate: string

    @ApiProperty({type: String, example: new Date()})
    endDate: string
}