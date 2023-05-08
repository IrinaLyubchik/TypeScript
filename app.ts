//string
let myName: string = 'Max';
//number
let myAge: number = 39.85;
// boolean
let hasHobbies: boolean = true;

// assign types
let myRealAge: number;
myRealAge = 39;

// array
let hobbies: any[] = ["Cooking", "Sports"];
hobbies = [100];

// tuples
let address: [string, number] = ["Superstreet", 99];

// enum
enum Color {
    Gray, // 0
    Green = 100, 
    Blue
}

let myColor: Color = Color.Blue;
console.log(myColor);

//any
let car:any = "BMW";
// console.log(car);
car = { brand: "BMW", series: 3};
console.log(car);

// functions
function returnMyName(): string {
    return myName;
} 
console.log(returnMyName());

//void
function sayHello(): void {
    console.log("Hello!")
}

// argument types
function multiply(value1:number, value2:number): number {
    return value1 * value2;

}console.log(multiply(2, 10))

//function types
let myMultiply: (a: number,b: number) => number;
// myMultiply = sayHello;
// myMultiply();
myMultiply = multiply;
console.log(myMultiply(6, 8));

//objects
let userData: {name: string, age: number} = {
    name: "Max",
    age: 39
};

//complex object
let complex: {data: number[], output: (all: boolean) => number[]} = {
    data: [100, 3.99, 10],

    output: function (all: boolean): number[] {
        return this.data;
    }
};

//type alias
type Complex = {data: number[], output: (all: boolean) => number[]};

let  complex2: Complex = {
    data: [100, 3.99, 10],

    output: function (all: boolean): number[] {
        return this.data;
    }
};

// union
let meRealRealAge: number | string = 27;
meRealRealAge = "27";

//check types
let finalValue = 30;
if (typeof finalValue == "number") {
    console.log("Final value is a number");
}

//never
function neverReturns(): never {
    throw new Error('An error')
}

//nullable types
let canBeNull: number| null = 12;
canBeNull = null;
let canAlsoBeNull;
canAlsoBeNull = null;
let canThisBeAny = null;
// _________________________________________

let myRealName: string = "Iryna";
let myAge1: number = 39;



