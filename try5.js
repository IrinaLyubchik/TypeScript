"use strict";
let bankAccount10 = {
    money: 2000,
    deposit10(value) {
        this.money += value;
    }
};
let myself10 = {
    name: "Ira",
    bankAccount10: bankAccount10,
    hobbies: ["Sports", "Cookіng"]
};
myself10.bankAccount10.deposit10(3000);
console.log(myself10);
//# sourceMappingURL=try5.js.map