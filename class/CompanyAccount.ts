import { NinoAccount } from "./NinoAccount";

export class CompanyAccount extends NinoAccount {
  constructor(name: string, accountNumber: number) {
    super(name, accountNumber);
  }

  public getLoan(value: number): void {
    this.deposit(value);

    console.log(`Empréstimo de R$ ${value} aprovado.`);
  }
}
