/*function add(num1, num2 = 0){


   // num2 = num2 || 0
    // if(num2 == undefined){
    //     num2 = 0
    // }
    const total = num1 + num2;
    return total;

}
const result = add(10);
//const result = add(10, "20"); //print 1020
//const result = add(10); //nan

console.log(result); */



function add(num1, num2){
    
    return  num1 + num2;
}
const add2 = function add(num1, num2){
    return num1 + num2
}
const add3 = function (num1, num2){
    return num1 + num2
}
//arrow function es6
const add4 = (num1, num2 = 0) =>{
    return num1 + num2
}

//es6 arrow function 
const add5 = (num1, num2 = 0) => num1 + num2
const result = add5(12,13);
console.log(result);

const add6 = (num1, num2 , num3) => (num1 + num2) - num3

const result1 = add5(12,4,4);
console.log(result1);

const add7 = (num1, num2 , num3) => {
    const addnum = num1 + num2;
    return  addnum - num3;
}
    

const result2 = add7(12,4,6);
console.log(result2);

