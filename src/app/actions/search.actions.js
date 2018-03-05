export const DEFAULT = '[Search] Default';

export class DefaultAction {
  type: string;
  payload: string;
  constructor () {
    this.type = DEFAULT;
  }
}

export type SearchAction = DefaultAction;