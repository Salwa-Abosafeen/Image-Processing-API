export class ResizeResponse {
  path = '';
  status = 200;
  error = '';

  constructor(path: string, status: number, error: string) {
    this.path = path;
    this.status = status;
    this.error = error;
  }
}
