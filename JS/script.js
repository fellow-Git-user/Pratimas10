// class Car {
//     constructor(brand, model, engine, basePrice, getPrice){
//         this.brand = brand;
//         this.model = model;
//         this.engine = engine;
//         this.basePrice = basePrice
//         this.sound = function(){
//             console.log('Vroom vroooom V10')
//         }
//         this.getPrice = function (){
//              if (engine === 'electric'){
//                 this.basePrice = this.basePrice + 10000
//              } else if (engine === 'diesel'){
//                 return `${this.basePrice + 5000}`
//              } else if (engine === 'petrol'){
//                 this.basePrice = Number(this.basePrice) + 10000
//                 //this.basePrice += + 10000 net tada duodamas parametras privalo buti number o ne '10000'
//             }
//         }
//     }
// }

// let v10 = new Car ('BMW', '8-series', 'electric', 20000);
// console.log(v10);
// v10.getPrice()
// console.log("Final price: ", v10.basePrice)


// let normalDiesel = new Car ('Skoda', 'Octavia', 'diesel', 10000);
// console.log(normalDiesel);
// console.log(normalDiesel.getPrice())
// console.log("Final price: ", normalDiesel.basePrice)

// let sportsCar = new Car ('Subaru', 'Impreza', 'petrol', '30000');
// console.log(sportsCar)
// sportsCar.getPrice()
// console.log("Final price: ", sportsCar.basePrice)
