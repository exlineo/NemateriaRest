export class CreateNoticeDto {
    readonly _id?: number | string;
    readonly title: string;
    readonly content: string;
    readonly userId: string;
}