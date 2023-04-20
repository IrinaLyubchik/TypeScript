
type Join = {money: number, deposit2: (value2:number)=> void}

let bankAccount2: Join = {
    money: 2000,
    deposit2 (value2:number): void {
        this.money += value2;
    }
};

let myself3: {name2: string, bankAccount2: Join, hobbies2: string[] } = {
    name2: "Iryna",
    bankAccount2: bankAccount2,
    hobbies2:["Swimming", "Cooking"]
};

myself3.bankAccount2.deposit2(3000);

console.log(myself2);

