export class Joke {
  private _text: string;
  private _category: string;
  private _type: string;

  constructor(text: string, category: string, type: string) {
    this._text = text;
    this._category = category;
    this._type = type;
  }

  get text(): string {
    return this._text;
  }

  set text(value: string) {
    this._text = value;
  }

  get category(): string {
    return this._category;
  }

  set category(value: string) {
    this._category = value;
  }

  get type(): string {
    return this._type;
  }

  set type(value: string) {
    this._type = value;
  }
}
