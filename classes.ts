class Car2 {
    color = "silver"
    
    power(state : boolean){
        if(state === true){
            console.log("start engine");

            
        }else {
            console.log("no start");
            
        }
    }
}
let mycar2 =new  Car2;
mycar2.power(true)

class Car1 {
    constructor(color : string , location  : any , owner : string ,  ){
           this.color = color
           this.location = location
           this.owner = owner
           
    }
    color :  string;
    location : any;
   owner : string;
    power(state : boolean){
        if(state === true){
            console.log('yes');
            
        }else {
            console.log("no");
            
        }
    }
}
 let mycar = new Car1('red','america' , 'raffayonwer' , )
 let raffayCar = new Car1('yellow' , 'khi' , 'raffay')
//  console.log(`my car color is ${mycar.color} and my car is in ${mycar.location}`);

let alexanderCar : Car2

alexanderCar = {
    color : "red",
    
}

        
        



