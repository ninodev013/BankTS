export abstract class NinoAccount {
  private name: string;
  private readonly accountNumber: number;
  balance: number = 0;
  status: boolean = true;

  constructor(name: string, accountNumber: number) {
    this.name = name;
    this.accountNumber = accountNumber;
  }

  setName = (name: string): void => {
    this.name = name;
    console.log("Nome alterado com sucesso");
  };

  deposit = () => {
    if (this.validateStatus()) {
      console.log("Você depositou");
    }
  };

  withdraw = () => {
    console.log("Você sacou");
  };

  getBalance = (): void => {
    console.log(this.balance);
  };

  validateStatus = (): boolean => {
    if (this.status) {
      return this.status;
    }

    throw new Error("Conta inválida");
  };
}
