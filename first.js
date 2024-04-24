// constant varibales
const name_1 = "Amna"
let roll_no= 12
var email_id= "amnafarooq445@gmail.com"
// a= "Amna"    ## not allowed, cconst is unchangable

roll_no=20
email_id= "aminafarooq445@yhaoo.com"
//but let and var are changable
console.table([name_1, roll_no,email_id ]) 

/* don't use var ,it will create scope problem, to overcome the scope problem "let" is used */ 
//  use stritc, is used to treat code a snew version, 
"use strict"; 
// alert(3+3) , we are usng node.js not browser, so we wil not use alert in node.js, it have separate method
let age = 20
let isLogin= true
let state= null  
let name=""

// Data Types
// number 2-53 range
// bigint,  used in bg data like trading, stock exchange
// srting 
// boolean true/flase, representation of an empty vlue
// undefined , not assigned the value, like name=" "
// null , is a stand alone value, its means empty   
// symbol,  for unique values
// object,, 

console.log(typeof "Amna")
console.log(typeof null) 

let score= 23
console.log(typeof score)
let score1= "23"
console.log(typeof score1)
// To convert type of score 1 from string to number
let TyppeinNumber= Number(score1)
console.log(TyppeinNumber) 
console.log(typeof TyppeinNumber) 
let score2= "23abc"
let TypeinNumber2= Number(score2)
console.log(typeof TypeinNumber2) 
console.log(TypeinNumber2) 
//  score2= "23abc.com" shows the type number but it have values NaN

let score3= null
console.log(typeof (score3))  
let valuinNumber3= Number(score3)
console.log(valuinNumber3)

let score4= true
console.log(typeof score4)
let valuinNumber4= Number(score4)
console.log(score4)  

// Coonvert into string
let score5= 33 
console.log(typeof score5)
let valuinNumber5= String(score5)
console.log(valuinNumber5) 
console.log(typeof valuinNumber5) 


// -----------------------------Operations........................................
let num= 2
let makeNegative= -num
console.log(makeNegative) 

console.log(2-2)
console.log(2+2)
console.log(3*2)
console.log(3**2) 
console.log(2/3)
console.log(2%4)

let name1= "Amna"
let name2= " Farrooq"
let sum= name1+name2
console.log(sum) 

// Prblems in addition of strings and numbers
console.log("1" +2)
console.log(typeof (1 +"2"))
console.log(typeof ("1"+2+2))
console.log((3+4)*5%3) 

// prefix and postfix
let gameCounter= 100
// prefix
++gameCounter
// postfix
gameCounter++
console.log(gameCounter)


