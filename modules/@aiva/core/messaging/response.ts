export class Response<T> {
  constructor(
    public messageId: string,
    public success: boolean,
    public data: T
  ) {}
}