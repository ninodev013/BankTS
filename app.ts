import { CompanyAccount } from "./class/CompanyAccount";
import { DepositAccount } from "./class/DepositAccount";
import { PeopleAccount } from "./class/PeopleAccount";

const people = new PeopleAccount(1, "Nicollas", 100);

people.deposit(100);
people.withdraw(30);
people.getAccountInfo();
console.log("--------------------------");

const company = new CompanyAccount("DIO", 200);
company.getAccountInfo();
company.deposit(500);
company.getLoan(1000);
console.log(`Saldo empresa: R$ ${company.getBalance()}`);
console.log("--------------------------");

const bonusAccount = new DepositAccount("Julio", 300);
bonusAccount.getAccountInfo();
bonusAccount.deposit(100);

console.log(`Saldo conta bônus: R$ ${bonusAccount.getBalance()}`);
