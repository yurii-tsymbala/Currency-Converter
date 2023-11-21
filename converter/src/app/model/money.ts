import { Currency } from "./currency";

export class Money {
    constructor(
      public amount: string,
      public currency: Currency
    ) {}
  }

