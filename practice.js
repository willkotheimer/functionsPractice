const calculateAgeInDogYears = (ageOfPerson) => {
  const ageInDogYears = ageOfPerson / 7

  return ageInDogYears
}

const dogAge = calculateAgeInDogYears(45)
console.log(dogAge)

const myfavoriteBreed = (dogBreed) => {
  if (dogBreed == 'meow') return `I like cats`
  else return `My favorite breed is ${dogBreed}`;
}

const myFavorite = myfavoriteBreed('Weimereiner');

console.log('When it comes to pets', myFavorite);

const add = (num1, num2, num3) => {
  return num1 + num2 + num3;
}

console.log(add(17, 4, 11));

const go = (direction, speed) => {
  let text = '';
  text += `The car is moving ${direction} at ${speed}. `;
  if (speed > 75) text += `SLOW DOWN!`;
  return text;
}

console.log(go('forward', 55));
console.log(go('backward', 98));
console.log(go('in circles', 85));

const evenOrOdd = (num) => {
  return (num % 2 === 0) ? 'Even' : 'Odd';
}

console.log(evenOrOdd(2));
console.log(evenOrOdd(1));

const array1 = [0, 2, 5, 9, 46, 90, 210];

for (const element of array1) {
  console.log(evenOrOdd(element));
}


const words = [
  "The", "killing", "complex", "houses",
  "married", "kittens", "and", "single",
  "soldiers", "and", "their", "kleptomaniacal",
  "families"
]

/*
  Function to filter out `k` words
  (Google 'javascript startswith' to get started)
*/
const filterOutKs = (array) => {
  array.forEach((item, index) => {
    if (item.startsWith('k')) array.splice(index, 1);
  });
  return array;
}
/*
  Function to build a single string from the array
  (Google 'javascript combine all items in array' to get started)
*/
const singleStringFromArray = (array) => {
  return array.join(' ');
}

/*
  Invoke the filtering function and store its return value
*/
const noKs = filterOutKs(words);

/*
  Invoke the string building function, and pass the
  return value of the previous function as an argument
*/

const singleString = singleStringFromArray(noKs);

console.log(singleString);


// Random number of fish catches

const randomFishCatches = (multiplier) => {
  const random = Math.floor(Math.random() * multiplier);
  if (random % 2 == 0) {
    return `Sven hooked a tuna!  :)`;
  } else {
    return `Sven came up empty-handed.  :(`
  }
}

console.log(randomFishCatches(15));
console.log(randomFishCatches(2));
console.log(randomFishCatches(3));
console.log(randomFishCatches(4));
console.log(randomFishCatches(16));


const orderMeal = (sandwich, side, drink, dessert) => {
  let object = `{
    "sandwich": "${sandwich}",
    "side": "${side}",
    "drink": "${drink}",
    "dessert": "${dessert}"
  }`;
  return object;
}
const takeOutBag = orderMeal("Ultimate Slammer", "Fudge sundae", "Mr. Pepper", "Potato wedges");
console.log(takeOutBag);

//Random tasks:

//oil change
const oilChange = person => `${person.firstName} ${person.lastName} went to get an oil change`;
//grocery store
const groceryStore = person => `${person.firstName} ${person.lastName} went to the grocery store`;
//clean the kitchen
const cleanKitchen = person => `${person.firstName} ${person.lastName} cleaned the kitchen`;
//feed the baby
const feedBaby = person => `${person.firstName} ${person.lastName} fed the baby`;
//take out the trash
const takeTrash = person => `${person.firstName} ${person.lastName} took out the trash`;
//make breakfast
const makeBreakfast = person => `${person.firstName} ${person.lastName} made breakfast`;
//chore
const dayPlanner = (chore, person, day) => {
  let myString = chore(person) + ` on ${day}.`;
  return myString;
}

const will = {
  firstName: "Will",
  lastName: "Kotheimer"
};
console.log(dayPlanner(cleanKitchen, will, 'Tuesday'));

const dayPlanner2 = (firstChore, secondChore, thirdChore, person, day) => {
  let myString2 = `On ${day}, ${firstChore(person)}, and ${secondChore(person)}, and ${thirdChore(person)}.`
  return myString2;
}

console.log(dayPlanner2(makeBreakfast, takeTrash, cleanKitchen, will, 'Tuesday'));



