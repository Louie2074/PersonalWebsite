class Temperature {
   constructor(celsius) {
      this.celsius = celsius;
   }
   get fahrenheit(){
      return this.celsius;
   }

   set fahrenheit(value) {
      this.celsius = (value - 32) / 1.8;
   }
   static fromFahrenheit(value) {
      return new Temperature((value - 32) / 1.8);
   }
}

let temp = new Temperature(22); 
console.log(temp.fahrenheit); // → 71.6
temp.fahrenheit = 6; 
console.log(temp.celsius);
// → 30