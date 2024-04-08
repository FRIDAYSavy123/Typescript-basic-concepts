// // function with simple name print
// function hello(name : string) {
//     console.log(`hello ${name}`);
    
// }
// hello("raffay");

// // function with default name print
// function helloalex(name : string = "alex") {
//     console.log(`hello ${name}`);
    
// }
// helloalex()

// // function with spread syntax 
// function hello1(name : string = "alex" , ...nickName  : string []) {
//     console.log(`hello ${name}`);
    
// }
// hello1("alex!" , "alex" , "alexander" , "alexander the great" , "" , "" , "" , "" ,);

// // function with return and loop

// const nickNames = ["Alexander" , "alex the" , "alex the great"]

// function allnickNames (callback : (index : number) => string){
//     for(let i=0 ; i < nickNames.length ; i++){
//         console.log(callback(i));
        
//     }
// }
// function getNameAt (index : number){
//     return `${nickNames[index]}`
// }

// allnickNames(getNameAt);

// function with union type 

// let returnStringorNumber : (() => string | number) | number

//  returnStringorNumber = function () : string {return "yes"},
//  returnStringorNumber = function () : number {return 6 },
// returnStringorNumber = 8

// let imran : (name : string) => string 
// name = 

// imran = (name) => `hello ${name.toUpperCase()}`

// imran


function createDate(timestamp : number) : Date ;
function createDate(day : number , month : number , year : number) : Date;

function createDate(dayOrTimestamp : number , month? : number ,yearly? : number ){
    return month === undefined || yearly === undefined
    ? new Date(dayOrTimestamp)
    : new Date (yearly , month, dayOrTimestamp)
}