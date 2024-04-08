// class Car2 {
//     color = "silver"
//     power(state : boolean){
//         if(state === true){
//             console.log("start engine");
//         }else {
//             console.log("no start");
//         }
//     }
// }
// let mycar =new  Car2;
// mycar.power(true)
var Car1 = /** @class */ (function () {
    function Car1(color, location) {
        this.color = color;
        this.location = location;
    }
    Car1.prototype.power = function (state) {
        if (state === true) {
            console.log('yes');
        }
        else {
            console.log("no");
        }
    };
    return Car1;
}());
var mycar = new Car1('red', 'america');
var raffayCar = new Car1('black', 'khi');
console.log("my car color is ".concat(mycar.color, " and my car is in ").concat(mycar.location));
