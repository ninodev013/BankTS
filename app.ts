// Nino Bank

//name, accountNumber
//depoisitar, sacar

import { PeopleAccount } from "./class/PeopleAccount";
import { CompanyAccount } from "./class/CompanyAccount";

const People: PeopleAccount = new PeopleAccount(1, "Nicollas", 10);
People.deposit();
const companyAccount: CompanyAccount = new CompanyAccount("Dio", 10);
console.log(companyAccount);
