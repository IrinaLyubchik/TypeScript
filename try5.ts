type BankAccount10 = {money: number, deposit10: (val: number) => void};

let bankAccount10: BankAccount10  = 
 {
    money: 2000,
    deposit10(value: number): void {
        this.money += value;
    }
};

let myself10:{name: string, bankAccount10: BankAccount10, hobbies: string[]} = {
    name: "Ira",
    bankAccount10: bankAccount10,
    hobbies: ["Sports", "Cookіng"]
};

myself10.bankAccount10.deposit10(3000);

console.log(myself10);