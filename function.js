// functions

// function calculator(operation, num1, num2 ){
//     console.log(operation, num1 * num2)

// }

// calculator("add",10, 23)

function calculator(operation, num1, num2){
    if(operation === "add"){
        console.log("add",num1 + num2)
    }else if( operation === "add1"){
        console.log("mul",  num1 * num2)
    }
    else if( operation === "add2"){
        console.log("sub",  num1 - num2)
    }
    else if( operation === "add3"){
        console.log( "modules", num1 % num2)
    }else{
        console.log("no specified operation")
    }
}

calculator("add",10, 23);
calculator("add1",10, 23);
calculator("add2",10, 23);
calculator("add3",10, 23);

// returnable Fn

function returnableFn (retunNames){
    return retunNames;
}
returnableFn ("Arunjo96");
 let value = returnableFn ("Arunjo96")
    console.log(value)



// Arrow-function

const arrowFn = (ArrName) => {
    console.log("data from arrow function", ArrName)
}

arrowFn("Arunjo");

// anonyms function
const anonymFn = (AnoymsName) => {
    console.log("data from anonyms function", AnoymsName)
}

anonymFn("karthikjo");

// IIFE (Immediate Import Funtion Execute)
(function greet (){
    console.log("my IIFE function")
})();


// Task 

        // calculate total,  Highestmark,  which subject and personname


let object = [
  {
    name: "sanjay",
    subjects: ["phy", "maths", "chemistry"],
    marks: [80, 40, 30],
  },
  {
    name: "moorthy",
    subjects: ["phy", "maths", "chemistry"],
    marks: [20, 30, 80],
  },
];

(function (){
    let totalMark = 0
    for (let a = 0; a < object.length; a++) {
        let markArr = object[a].marks
    
        for ( let b =0; b < markArr.length; b++){
            totalMark = totalMark + markArr[b]
        }
        console.log("total mark for is", object[a].name, totalMark)
        totalMark = 0;
    }

})();