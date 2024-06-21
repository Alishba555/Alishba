//        Assignment of Array        //
//               Q#1                     //
const fruit : string []  = ["apple","banana","mango","orange"];
console.log(fruit);
//               Q#2                    //
const numbers : number [] =[10,20,20,40];
console.log(numbers);
//               Q#3                   //
const thirdFruit = fruit[2];
console.log(thirdFruit);
//               Q#4                     //
numbers[1]= 25;
console.log(numbers);
//               Q#5                        //
fruit.push("Grape");
console.log(fruit);
//                Q#6                      //
const LastFruit  = fruit.pop();
console.log(fruit);
//                 Q#7                     //
const fruitFruit = fruit.shift();
console.log(fruit);
//                 Q#8                       //
fruit.unshift("kiwi");
console.log(fruit);
//                   Q#9                     //
fruit.splice(1,2);
console.log(fruit);
//                    Q#10                     
fruit.splice(2,0,'pineapple', 'pear');
console.log(fruit);
//                     Q#11                     //
const citrusFruit = fruit.slice(0,2);
console.log(citrusFruit);
//                      Q#12                      //
const lastTwoFruits = fruit.slice(-2);
console.log(lastTwoFruits);

