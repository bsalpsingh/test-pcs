let sentence = "my name is bishal";

// checking for falsy values
sentence = !!sentence === false ? "" : sentence;

//converting truthy values to string
//console.log( JSON.stringify(sentence).split(""),sentence);
const reversedSentence = JSON.stringify(sentence)
  .split("")
  .map((el, index, array) => array[array.length - 1 - index])
  .join("");
console.log(JSON.parse(reversedSentence));

// combine two sorted arrays .... should result in sorted array
const array1 = [
  1,
  12,
  45,
  56,
  76,
  87,
  99,
  999,
  undefined,
  undefined,
  null,
  "bishal",
  9999,
  10,
].filter((el) => typeof el === "number" && !!el === true);
// console.log(array1))
const array2 = [0, 1, 3, 6, 7, "bishal", "singh", 10].filter(
  (el) => typeof el === "number" && !!el === true
);

const length1 = array1.length;
const length2 = array2.length;
let a = 0;
let b = 0;
const mergedArray = [];

let counter = 0;
for (let i = 0; i <= length1 + length2; i++) {
  if (array1[a] <= array2[b]) {
    if (a > length1 - 1) {
      // console.log(a, length1 - 1, "a greater");
      if (array2[b] === undefined) {
        counter++;
        break;
      }
      mergeArray[i] = array2[b];
      b++;
      counter++;
    } else {
      mergedArray[i] = array1[a];
      a++;
      counter++;
      // console.log("pushed first array item");
    }
  } else {
    if (b > length2 - 1) {
      // console.log(b, length2 - 1, "b greater", array1[a]);
      if (array1[a] === undefined) {
        counter++;
        break;
      }
      mergedArray[i] = array1[a];
      a++;
      counter++;
    } else {
      mergedArray[i] = array2[b];

      b++;
      counter++;
      // console.log("pushed second array item");
    }
  }
}

console.log(mergedArray, counter, length1 + length2);



// for creating the variants and desc
const key = {
  1: "size",
  2: "color",
  3: "brand",
};

const value = {
  1: 1,
  2: "red",
  3: "adidas",
};

const keyValue = {};

for (let i = 1; i <= Object.keys(key).length; i++) {
  if (!!key[i] === true && !!value[i] === true) {
    // console.log(value[])
    keyValue[key[i]] = value[i];
  } else {
    continue;
  }
}

console.log(keyValue,"keyValue object")