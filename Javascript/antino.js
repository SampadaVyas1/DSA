// //apply

// let obj = { age: "12" };
// function age(param1) {
//   console.log(this, param1);
// }

// age.apply(obj, [1, 2, 3]);

// //call

// age.call(obj, 3);

// //bind

// const fun = age.bind(obj, 2);

// console.log(">>", fun);


// console.log(1 +  "2" + "2"); //122

console.log(1 +  +"2" + "2"); //32

// console.log(1 +  -"1" + "2"); //1-12

// console.log(+"1" +  "1" + "2");//112

// console.log( "A" - "B" + "2");//A-B2

// console.log( "A" - "B" + 2);//A-B + 2


// sayOtherName()

// sayName()

var sayName =() =>{

    console.log('hello world')

}

function sayOtherName(){

    console.log('world is beautiful')

}

//world is beautiful
//undefined