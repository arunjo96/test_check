// array and scoping

// array

const arr = [1,2,3,4]
    console.log("org arr", arr);


// add value from last index
arr.push(5,6);    
    console.log("after push", arr)

// remove value from last index
arr.pop();
    console.log("after pop", arr)

// add value from first index
arr.unshift(5,6);
    console.log("after unshift", arr)

// remove value from first index
arr.shift();
arr.shift();
    console.log("after shift", arr)

    
const alphaArr = ["A", "R", "U", "N", "J", "O"]
    console.log(alphaArr)

const alphaArrStr = alphaArr.join("")  
    console.log("join-string", alphaArrStr)

const splitArr = alphaArrStr.split("")
    console.log("split-arr", splitArr)

const input = "praveen"
    for( let i = 0; i < input.length; i++){
        console.log(input[i])
    }


// MRF

const mrfArr1 = [2,4,6,8,10]

let mapArr = mrfArr1.map((value, index, accArr)=>{
    console.log("original value",value);
    console.log("original index",index);
    console.log("original accArr",accArr);
    return value * 3;
});

console.log(mrfArr1);
console.log(mapArr);

// ---session write code below once

    Array.prototype.newMap = function (fn) {
  let tempArr = [];
  for (let i = 0; i < this.length; i++) {
    tempArr.push(fn(this[i], i, this));
  }
  return tempArr;
};

const mrfArr = [2, 4, 5, 6, 8];
let originalMapArr = mrfArr.map((value, index, accArr) => {
  console.log("original value", value);
  console.log("original index", index);
  return value * 2;
});

let newMapArrArr = mrfArr.newMap((value, index, accArr) => {
  console.log("new value", value);
  console.log("new index", index);
  return value * 2;
});

console.log(mrfArr);
console.log(originalMapArr);
console.log(newMapArrArr);


// ---fliter

const fliterArr = mrfArr1.filter((value, index, accArr)=>{
    return value != 6;
});
console.log(fliterArr)

// ---reduce
const reduceData = mrfArr1.reduce((acc, value, index, accArr)=>{
    return acc + value
}, 0)
console.log(reduceData)


