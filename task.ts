type Account = {money: number, deposit: (val:number) => void};

let account: Account = {
    money: 2000,
    deposit(value: number): void {
        this.money += value;
    }
}

let myself2: { name: string, account: Account, hobbies: string[]} = {
    name: "Max",
    account: account,
    hobbies: ["Sports", "Cooking"]
};
myself.bankAccount.deposit(3000);

console.log(myself);