const userName = prompt("Enter your name:");
 
console.log(`Hello, ${userName}! Your name has ${userName.length} letters.`);


function celsiusToFahrenheit(c) {
  return (c * 9 / 5) + 32;
}
console.log("0°C =", celsiusToFahrenheit(0));     // 32
console.log("25°C =", celsiusToFahrenheit(25));   // 77
console.log("100°C =", celsiusToFahrenheit(100)); // 212


function largest(a, b, c) {
  let max = a;
  if (b > max) {
    max = b;
  }
  if (c > max) {
    max = c;
  }
  return max;
}
console.log("largest(3, 9, 5) =", largest(3, 9, 5));    // 9
console.log("largest(10, 2, 7) =", largest(10, 2, 7));  // 10
console.log("largest(1, 4, 8) =", largest(1, 4, 8));    // 8


let sumOfMultiples = 0;
for (let i = 1; i <= 20; i++) {
  if (i % 3 === 0) {
    console.log(i);
    sumOfMultiples += i;
  }
}
console.log("Sum of multiples of 3:", sumOfMultiples); // 63