// abstract class Country {
//     public name : string;
//     public language : string;
//     public population : string;
//     public populationGrowth : string;
//     constructor (
//         name : string;
//         language : string;
//         population : string;
//         populationGrowth : string
//     ) {
//         this.name = name
//         this.language = language
//         this.population = population
//         this.populationGrowth
//     }
// }
// function makegreet(name : string) : string {
//     return `hello ${name} welcome!`
// }
// var welcomeRaffay =  makegreet("raffay")
// console.log(welcomeRaffay);
// function makeEgg() {
//     let cooked = 1+2+1
//     console.log(cooked);
// }
// makeEgg()
// makeEgg()
// function halfFryEgg(egg : number , butter : number , salt : number) : number {
//     return egg + butter + salt 
// }
// let madehalfFry : number = halfFryEgg(1,1,3)
// console.log(madehalfFry);
// function blankF () : void {
//     console.log('hello')
// }
// blankF()
// let sum =  ()=> 1+1+2
// let newSum: number  = sum()
// console.log(sum);
// abstract class Country {
//     public name : string;
//     public language : string;
//     public population : number;
//     public populationGrowth : number;
//    constructor (
//     name : string,
//     language : string,
//     population : number,
//     populationGrowth : number,
//    ) {
//     this.name = name;
//     this.language = language;
//     this.population = population;
//     this.populationGrowth = populationGrowth;
//    }
//    public abstract populationGrowth1() : number 
// };
// class OIDcountry extends Country{
//     constructor (
//         name : string,
//         language : string,
//         population : number,
//         populationGrowth : number
//      ) {
//         super (name , language , population , populationGrowth)
//     }
//     public populationGrowth1() : number {
//         this.population = this.population *  this.population * this.populationGrowth
//           return this.population
//     }
// }
// let Pakistan = new OIDcountry("Pakistan" , "Urdu" , 3.5, 2.3)
// console.info(Pakistan);
// let UAE = new OIDcountry("UAE", "Arabic" , 2 , 3)
// console.info(UAE)
// Pakistan.populationGrowth1()
// function sum(num: number) {
//     let sum = 0
//     for(let i = 0 ; i<num; i++){
//         sum = sum + i
//     }
//     return sum;
// }
// console.log(sum(5));
// function sumOfDigits (num: number) {
//     let sum = 0
//     while(num > 0){
//       sum += num%10
//       num = Math.floor(num / 10)
//     }
//     return sum;
// }
// console.log(sumOfDigits(12345));
// function sumOfDigits (num : number) {
//     let sum = 0
//     while(num <= 0){
//         sum += num%10
//         num = Math.floor(num/10)
//     }
//     return sum;
// }
// console.log(sumOfDigits(11));
