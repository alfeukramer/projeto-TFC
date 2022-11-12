export default class ErrorGenericPassword extends Error {
  public status: number;
  constructor(message: string) {
    super(message);
    this.status = 401;
  }
}
