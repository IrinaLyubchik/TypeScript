type BankAccount = { money: number, deposit: (val: number) => void };

let bankAccount: BankAccount = {
    money: 2000,
    deposit(value: number): void {
        this.money += value;
    }
};

let myself: { name: string, bankAccount: BankAccount, hobbies: string[]} = {
    name: "Max",
    bankAccount: bankAccount,
    hobbies: ["Sports", "Cooking"]
};
myself.bankAccount.deposit(3000);
console.log(myself);

//let & const
console.log("LET & CONST");
let variable = "Test";
console.log(variable);
variable = "Another value";
console.log(variable);

const maxLevels = 100;
console.log(maxLevels);

function reset() {
    let variable = null;
    console.log(variable);
} 
reset();
console.log(variable);

//Arrow functions
console.log("ARROW FUNCTIONS");
const addNumbers = function(number1: number, number2: number): number {
    return number1 + number2;
};
console.log(addNumbers(3,10)); 

const multiNumbers = (number1: number, number2: number) => number1* number2;
console.log(multiNumbers(3,10)); 

const greet = () => {
    console.log("Hello!");
};
greet();


const greetFriend = (friend: string) => console.log(friend);
greetFriend ("MAnu");

//Default Parameters
console.log("DEFAULT PARAMETERS")

const countdown = (start: number = 10): void => {
    console.log(start);
    while (start > 0) {
        start --;
    }
    console.log("Done!", start);
};
countdown();

//Rest & Spread
console.log("REST & SPREAD");

const numbers = [1, 10, 101, -5];
console.log(Math.max(...numbers));

function makeArray(args1: number, args2: number) {
    return [args1, args2];
}
console.log(makeArray(1, 2));

function makeArray1(...args: number[]) {
    return args;
}
console.log(makeArray1(1, 2, 6));


//Destructuring
console.log("DESTRUCTURING");
const myHobbies = ["Sports", "Running"];
const [hobby1, hobby2] = myHobbies;
console.log(hobby1, hobby2);

const userParameters = {username: "Max1", age: "54"};
const {username: myName2 , age: myAge2} = userParameters;
console.log(myName2, myAge2);

// Template Literals
const username = "Max";
const greeting = `This is a heading!
I'm ${username}.
This is cool!`;
console.log(greeting);



