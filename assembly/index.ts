export interface IStrategy {
  execute(
    arg?: string,
    arg0?: string,
    arg1?: string,
    arg2?: string,
    arg3?: string,
    arg4?: string,
    arg5?: string
  ): string;
}

export class BaseStrategy implements IStrategy {
  constructor() {}

  static config(): string {
    throw new Error("Method not implemented.");
  }

  public execute(
    _arg: string = '',
    _arg0: string = '',
    _arg1: string = '',
    _arg2: string = '',
    _arg3: string = '',
    _arg4: string = '',
    _arg5: string = ''
  ): string {
    throw new Error("Method not implemented.");
  }
}
