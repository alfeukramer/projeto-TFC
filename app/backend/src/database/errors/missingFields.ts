export default class ErrorGeneric extends Error {
  public status: number;
  constructor(message: string) {
    super(message);
    this.status = 401;
  }
}
