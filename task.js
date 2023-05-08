"use strict";
let account = {
    money: 2000,
    deposit(value) {
        this.money += value;
    }
};
let myself2 = {
    name: "Max",
    account: account,
    hobbies: ["Sports", "Cooking"]
};
myself.bankAccount.deposit(3000);
console.log(myself);
//# sourceMappingURL=task.js.map