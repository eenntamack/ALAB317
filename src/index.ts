//PART 2
class Vehicle {
    status: "stopped" | "started" = "stopped";
    make:string;
    model:string;
    wheels:number;
    constructor(make:string , model:string, wheels:number) {
      this.make = make;
      this.model = model;
      this.wheels = wheels;
    }
    start() {
      this.status = "started";
    }
    stop() {
      this.status = "stopped";
    }
  }
  
  class Car extends Vehicle {
    constructor(make:string, model:string) {
      super(make, model, 4);
    }
  }
  
  class MotorCycle extends Vehicle {
    constructor(make:string, model:string) {
      super(make, model, 2);
    }
  }
  
  function printStatus(vehicle:Vehicle) {
    if (vehicle.status === "started") {
      console.log("The vehicle is running.");
    } else {
      console.log("The vehicle is stopped.");
    }
  }
  
  const myHarley = new MotorCycle("Harley-Davidson", "Low Rider S");
  myHarley.start();
  printStatus(myHarley);
  console.log(myHarley.make.toUpperCase());
  
  const myBuick = new Car("Buick", "Regal");
  myBuick.wheels = myBuick.wheels - 1;
  console.log(myBuick.wheels);
  console.log(myBuick.model);


  //PART 3
  class NCycle<G>{
    status: "stopped" | "started" = "stopped";
    make: G | G[];
    model: G | G[];
    wheels:number;
    constructor(make:G , model:G, wheels:number) {
      this.make = make;
      this.model = model;
      this.wheels = wheels;
    }
    start() {
      this.status = "started";
    }
    stop() {
      this.status = "stopped";
    }
    print(num?: number){
      num = num || 0
      if(Array.isArray(this.model) && this.model[num]){
        
        console.log(`This Ncycle has a ${this.make} ${this.model[num]} at ${num}`)
        
      }else if(Array.isArray(this.model) === false){
        console.log(`This is a ${this.make} ${this.model} Ncycle`)
      }else{
        console.log('This Ncycle was not created properly')
      }
      

    }

    printAll(){
      if(Array.isArray(this.model) && Array.isArray(this.make) && this.model.length > 0 && this.model.length > 0){
        if(this.model.length === this.make.length){
          for(let i = 0; i< this.model.length; i++){
            console.log(`This Ncycle has a ${this.make[i]} ${this.model[i]} at ${i}`)
          } 
        }else{
          console.log("Make and model must have the same amount")
        }
      }else if(Array.isArray(this.model) === false){
        console.log(`This is a ${this.make} ${this.model} Ncycle`)
      }else{
        console.log('This Ncycle was not created properly')
      }

    }
  }

console.log("Test1")
const testCycle1 = new NCycle<number>(1, 2, 3);
testCycle1.print();
testCycle1.printAll();
console.log("\n")

console.log("Test2")
const testCycle2 = new NCycle<string>("This", "That", 4);
testCycle2.print();
testCycle2.printAll();
console.log("\n")

/*
const testCycle3 = new NCycle<string>("Make", 10, 4);
testCycle3.print(4);
testCycle3.printAll();*/

console.log("Test4")
const makes4 = ["Volkswagon", "Tesla", "Audi"];
const models4 = ["Passat", "Model X", "A4"];
const testCycle4 = new NCycle<string[]>(makes4, models4, 4);
testCycle4.print(2);
testCycle4.printAll();
console.log("\n")

console.log("Test5")
const makes5 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const models5 = [1, 1, 2, 3, 5];
const testCycle5 = new NCycle<number[]>(makes5, models5, 0);
testCycle5.print(7);
testCycle5.printAll();
console.log("\n")


function add(x: number, y: number): number {
  return x + y;
}

/*
add(testCycle1.make, testCycle5.model[1]);
// Error expected here
add(testCycle2.make, testCycle4.model[1]);*/