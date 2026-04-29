// Primitive data type : nn bb ss u

let a=null;
let b=345;
let c=true; //can also be false
let d= BigInt("457") + BigInt("3")
let e="Harry"
let f=Symbol("I am a nice symbol")
let g=undefined
let h //undefined na likhleo output undefined asbe
console.log(a,b,c,d,e,f,g,h)

//variable ta kon data type check
console.log(typeof d)

//Non-Primitive data type : Objects in JS
const item = {
    "Harry":true,
    "Payel":false,
    "Moon":87,
    "Sraboni":undefined
}
console.log(item["Sraboni"])