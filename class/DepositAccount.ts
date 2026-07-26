import { NinoAccount } from "./NinoAccount";

export class DepositAccount extends NinoAccount {
  constructor(name: string, accountNumber: number) {
    super(name, accountNumber);
  }

  public override deposit(value: number): void {
    super.deposit(value + 10);
  }
}
