export abstract class NinoAccount {
  private readonly name: string;
  private readonly accountNumber: number;
  private balance: number = 0;
  private status: boolean = true;

  constructor(name: string, accountNumber: number) {
    this.name = name;
    this.accountNumber = accountNumber;
  }

  public getAccountInfo(): void {
    console.log({
      name: this.getName(),
      accountNumber: this.getAccountNumber(),
      balance: this.getBalance(),
    });
  }

  public getName(): string {
    return this.name;
  }

  public getAccountNumber(): number {
    return this.accountNumber;
  }

  public getBalance(): number {
    return this.balance;
  }

  protected setBalance(value: number): void {
    this.balance = value;
  }

  protected validateStatus(): boolean {
    if (!this.status) {
      throw new Error("Conta inválida");
    }

    return true;
  }

  public deposit(value: number): void {
    if (this.validateStatus()) {
      this.balance += value;

      console.log(`Depósito de R$ ${value} realizado.`);
      console.log(`Saldo: R$ ${this.balance}`);
    }
  }

  public withdraw(value: number): void {
    if (this.validateStatus()) {
      if (this.balance >= value) {
        this.balance -= value;

        console.log(`Saque de R$ ${value} realizado.`);
        console.log(`Saldo: R$ ${this.balance}`);
      } else {
        console.log("Saldo insuficiente.");
      }
    }
  }
}
