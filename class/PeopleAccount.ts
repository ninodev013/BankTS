import { NinoAccount } from "./NinoAccount";

export class PeopleAccount extends NinoAccount {
  private readonly docId: number;

  constructor(docId: number, name: string, accountNumber: number) {
    super(name, accountNumber);
    this.docId = docId;
  }

  public getAccountInfo(): void {
    console.log({
      name: this.getName(),
      accountNumber: this.getAccountNumber(),
      balance: this.getBalance(),
    });
  }
}
