import { NinoAccount } from "./NinoAccount";

export class CompanyAccount extends NinoAccount {
  constructor(name: string, accountNumber: number) {
    super(name, accountNumber);
  }

  getLoan = () => {
    console.log("Voce pegou um emprestimo");
  };
}
