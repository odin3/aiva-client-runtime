export class Response {
  constructor(
    public messageId: string,
    public success: boolean,
    public data: any
  ) {}
}