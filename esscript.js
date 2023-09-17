console.log("Welcome to es6 modules");

//var let const differences
// redeclaration is not possible in let & const

// const a = 15;
// const a = 20;
// if console.log(a); error, bcz a already declared

//same way in let

// let b = 25;
// let b = 30;
// if console.log(b); error, bcz b is already decleared

// but in var it is possible

// var c = 11;
// var c = 22;
// if console.log(c), it will take second value declaration

// // re initilization 
//not possible
// const a = 12;
// a = 20;
// console.log(a);
// result will show type error, bcz can't reassign

// //but in let a = 12;
// a = 20;
// console.log(a); it will take second value;
//so let is possible to re assign
// but not possible to re declaration
let l = 20;
l = 22;

console.log(l); // can possible to re assign


//regarding in hoisting

console.log("____________Var hoisting and let, const hoisting___________ difference");

console.log(s); //var is working in global window, so result is undefined
var s = 33; // var is not a block scope, so it is working in global window
console.log(s); //var is working in global window, so result is 33

// if we call ot console.log it before variable in let and cosnt it shows uncaught reference error.
// because before initialization it is in "temporal dead zone"

console.log("____________Block Scope_______________");
if (true) {
    let outBlock = 30;
    // console.log("inBlock above:", inBlock); it's shows error ReferenceError: inBlock is not defined.
    if (true) { //in this block to block we can access, but inside
        let inBlock = 40;
        console.log("out Block:", outBlock);
        console.log("in Block", inBlock);
    }
};

///////////////////////////////

console.log("___________Shadowing property____________ ");

if (true) {
    const shadow = "AAA";
    if (true) {
    const shadow = "BBB";
    console.log("Second Blcok Shadow:", shadow);
    } 
    console.log("First Block Shadow:", shadow);
}; // inside the two block it can work, but out side it can't work
// because it is working in lexical scoping property


//////////////////////////template literal////////////////
console.log("____________Template literal__________");

const name = "Govind";
const ins = "GUVI GEEKS NETWORK PRIVATE LIMITED";
const sub = "Full Stack Developer";
const batch = "B51 WD2 TAMIL";
const strtdt = "August 2023";
const mentor = "Sanjay";

console.log(`Hi, my name is ${name}, and I'm studying ${sub} 
course at ${ins} from the month of ${strtdt} 
and my classes are going on batch ${batch} through ZOOM. 
And thanks for Mr.${mentor} and ${ins}.
I hope I can learn coding well through ${ins} online week day classes.`);

///////////////////spread operators////////////////
console.log("____________Spread Operators____________________");

let shoppingBasket = ["furits", "vegetables", "meat", "dairy"];
console.log(shoppingBasket);

console.log(...shoppingBasket);

////////////////another example in spread operator////////

let furitItems = ["mango", "apple", "pineapple", "graps", "orange", "lemon", "green Apple"];
let vegItems = ["potato", "brinjal", "tomato", "drumstick", "onion", "capage", "carrot", "beans"];
let dairyItems = ["milk", "chocolate", "butter", "ice cream"];
let meatItems = ["fish", "chicken", "mutton", "eggs"];

let fridge = [...furitItems, ...vegItems, ...dairyItems, ...meatItems];
console.log("Fridge:", fridge);

let fridgeTray1 = ["beaf", ...meatItems];
console.log("Fridge Tray 1:",fridgeTray1);

let fridgeTray2 = ["soft Drinks", ...dairyItems];
console.log("Fridge Tray 2:",fridgeTray2);

let fridgeTray3 = ["ladies Finger", "coconut", ...vegItems];
console.log("Fridge Tray 3:",fridgeTray3);

let fridgeTray4 = [...furitItems, "papaya"];
console.log("Fridge Tray 4:", fridgeTray4);

//////////////////////////////////// rest operators/////////////////
console.log("_______________rest Operators__________");

const [item1, item2, item3, ...rest] = furitItems;
console.log(item1); //output is mang;
console.log(item2); //output is apple
console.log(item3); //output is pineapple
console.log(rest); //output is graps to green apple

/////////////////destructring////////////////
console.log("_____________destructring__________________");

console.log("_________common type seperate console by index[0]");
const studentNames = ["Arjun", "Babu", "Chandru", "Divya", "Esha", "Fasil", "Gomathi", "Helen"];
console.log("Student Name 1:",studentNames[0]);
console.log("Student Name 2:",studentNames[1]);
console.log("Student Name 3:",studentNames[2]);
console.log("Student Name 4:",studentNames[3]);
console.log("Student Name 5:",studentNames[4]);
console.log("Student Name 6:",studentNames[5]);
console.log("Student Name 7:",studentNames[6]);
console.log("Student Name 8:",studentNames[7]);

console.log("______________destructring name separate______________");

const [stud1, stud2, stud3, stud4, stud5, stud6, stud7, stud8] = studentNames;

console.log("1.Student Name:", stud1);
console.log("2.Student Name:", stud2);
console.log("3.Student Name:", stud3);
console.log("4.Student Name:", stud4);
console.log("5.Student Name:", stud5);
console.log("6.Student Name:", stud6);
console.log("7.Student Name:", stud7);
console.log("8.Student Name:", stud8);

//////////////////////////Skipping values//////////////////

console.log("_______________Skipping values____________________");

const [studdn1,   , studdn2, studdn3, studdn4, studdn5,      , studdn6] = studentNames;

console.log("1. Arjun = ", studdn1,"1");
console.log("2. Babu = ", studdn2, "3");
console.log("3. Chandru = ", studdn3, "4");
console.log("4. Divya = ", studdn4, "5");
console.log("5. Esha = ", studdn5, "6");
console.log("6. Fasil = ", studdn6, "8");

//////////////////rest destructuring////////////////////
console.log("____________________rest destructuring___________________");

const weeks = [1,2,3,4];
const [firstWeek, secondWeek,...restweeks] = weeks;
console.log("First Week:",firstWeek);
console.log("Second Week:",secondWeek);
console.log("Rest Weeks:",restweeks);

///////////////nested destructuring///////////////
console.log("__________nested destructuring______________");

const [thirdweek, fourthweek] = restweeks;
console.log("Third Week:", thirdweek);
console.log("Fourth Week:", fourthweek);


////////////////////task on class/////////////////////////

const testArray = [11, 22, 33, 44, ["Govind", 37], "GUVI", 77];

console.log(testArray);

const [tst1, tst2, tst3, tst4, tst5, tst6, tst7, tst8] = testArray;
console.log(tst5[0]); //  without destruturing index answer = Govind 

const [ , , , ,[stname, stage],...restn] = testArray;
console.log(stname); //  with destruturing answer Govind
console.log(stage);
console.log(restn);

///////////////////////////Object Destrcturing//////////////////////

console.log("________________________Object Destrcturing________common__________");

const personObj = {
    firstName: "Govind",
    lastName: "raj",
    DOB: "14.03.1986",
    institute: "GUVI GEEKS NETWORK PRIVATE LIMITED",
    position: "Beginner Student",
    programme: "FSD",
    year: 2023,

};

////////////////////common object index console.log///////////////////

console.log("Student first Name:", personObj.firstName);
console.log("Student last Name:", personObj.lastName);
console.log("Student Full Name:", personObj.firstName,personObj.lastName);
console.log("Student Date of Birth:", personObj.DOB);
console.log("Studying Institute:", personObj.institute)
console.log("Position:", personObj.position);
console.log("Programme:", personObj.programme);
console.log("Studying Year:", personObj.year);
//////////////////////////////////

console.log("________________________Object Destrcturing type__________");

const {firstName, lastName, DOB, institute, position, programme, year} = personObj;

console.log("Student first Name:", firstName);
console.log("Student last Name:", lastName);
console.log("Student Full Name:", firstName,lastName);
console.log("Student Date of Birth:", DOB);
console.log("Studying Institute:", institute)
console.log("Position:", position);
console.log("Programme:", programme);
console.log("Studying Year:", year);

//////////////renaming object/////////////

console.log("____________Renaming Object__________");

const carNames = {
    toyota : "Etios",
    maruti : 800,
    BMW : "250D",
};
const {maruti : marutiSuzuki} = carNames; // maruti name changed to maruti Suzuki
console.log("Maruti Suzuki 90's Best Car Model:",marutiSuzuki);
console.log("MARUTI",carNames.maruti); //no error, no result, bcz object index renamed to marutiSuzuki
console.log("TOYOTA",carNames.toyota);
console.log("BMW",carNames.BMW);
//we can't console maruti, but instead maruti, we can console new name marutiSuzuki.

console.log("__________________Default Values___________________");

// const dftval = {
// city : " ",
// } 

// const { " " : city} = dftval;
// console.log(city);

console.log("___________________Nested Object Destuctruing______________");

const personDetails = {
    pname : "Narendra Modi",
    page : 72,
    occupation : "Prime Minister of India",
    address : {
        city : "New Delhi",
        state: "National Capital Territory of Delhi (NCT)",
        country: "India",

    },
};

const {occupation : profession} = personDetails;
console.log(profession); // out put is Prime Minister of India

const {address: {city, state, country}} = personDetails;
console.log(city);

///now rename country to Nation

const{pname, page, address: {country : nation}} = personDetails;
console.log(nation);