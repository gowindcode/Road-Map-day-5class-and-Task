const wel = "GVUI";
const gts = "Wishing you Good Luck";

console.log(`Hi ${wel}, learner now you are coding in iteratives blog________`);

const log = (print) => console.log(print);

log(`You can do your code here..........${gts}`);

log(`________________Loops and Iterations_________________`);

// basic for loop example

for (let i = 0; i <=5; i++) {
    log(i);
};

// for (let machine = 0; machine <=5; machine++) {
//     log(`machine Number:${machine}`); 
// };

const countries = ["IND", "CHN", "US", "UK", "EUR", "GER"];

for (let i = 0; i < countries.length; i++) {
    log(countries[i]);
};

// const G20Countries = [
//     "Argentina" , 
//     "Australia", 
//     "Brazil", 
//     "Canada",
//     "China", 
//     "France", 
//     "Germany", 
//     "India", 
//     "Indonesia", 
//     "Italy", 
//     "Japan", 
//     "Republic of Korea", 
//     "Mexico", 
//     "Russia", 
//     "Saudi Arabia", 
//     "South Africa", 
//     "Türkiye", 
//     "The United Kingdom", 
//     "The United States", 
//     "The African Union",
//     "The European Union"];
// for (let i = 0; i <= G20Countries.length; i++) {
//     log(G20Countries[i]);
// };
log(`_____________for loop for Object__________`);

const countryObject = {
    country1 : "INDIA",
    country2 : "CHINA",
    country3 : "EUROPE",
    country4 : "THE UNITED STATES OF AMERICA",
    country5 : "THE UNITED KNIGDOM",
};

const countryValues = Object.values(countryObject);
log(countryValues); // now we stored a object values in countryValues

for (let i = 0; i < countryValues.length; i++) {
    log(countryValues[i]);
};

const countryKeys = Object.keys(countryObject);
log(countryKeys); // now we stored a object keys in countryKeys

for (let i = 0; i < countryKeys.length; i++) {
    log(countryKeys[i]);
};


log(`____________Types of loops________________`);
// log("_______________forin, forof, foreach____________");

const countriesArray = ["IND", "CHN", "US", "UK", "EUR", "GER"];

countriesArray.forEach((value, index, actualArray) => {
log (`
value : ${value}
index : ${index}
actual Array : ${actualArray}
`);
});

//if we need keys and value as output, below code helps.

// const countryObject = {
//     country1 : "INDIA",
//     country2 : "CHINA",
//     country3 : "EUROPE",
//     country4 : "THE UNITED STATES OF AMERICA",
//     country5 : "THE UNITED KNIGDOM",
// };


countryKeys.forEach((value) => {
log(`
    Object Keys: ${value}
    country Values: ${countryObject[value]}  
    `);
});
log(`________________for in loop_____________`);
//best for object

for (k in countryObject)  {
   log (`
    Keys : ${k}
    Values : ${countryObject[k]}
    `);
};

log(`________________for in Array___________`);

// array hydrate, it will show the index

for (k in countriesArray) {
    log (`
    Index of Array: ${k} // showing array index
    Value of Array: ${countriesArray[k]} // showing array value 
    `);
};

//////////////////for of best for "String" looping/////////////

log(`________________for of___________`);
log(`I am a string // for of split`);
const stringsample = "IamaString";
for (str of stringsample) {
    log (str);
};

