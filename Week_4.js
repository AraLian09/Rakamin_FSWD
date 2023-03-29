const numbers = [];
const genap = [];
const ganjil = [];

for (x = 0; x < 100; x++) {
  numbers.push(Math.floor(Math.random() * 50 + 1));
}
console.log(numbers);
console.log("---------------------------------------");

for (var i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 == 0) {
    genap.push(numbers[i]);
  } else {
    ganjil.push(numbers[i]);
  }
}

function sumortotal(arguments) {
  let sum = 0;
  for (let q = 0; q < arguments.length; q++) {
    sum += arguments[q];
  }
  return sum;
}

function minimumar(arguments) {
  min = Infinity;
  for (let minx = 0; minx < arguments.length; minx++) {
    if (arguments[minx] < min) {
      min = arguments[minx];
    }
  }
  return min;
}
function maximumar(arguments) {
  max = -Infinity;
  for (let maxy = 0; maxy < arguments.length; maxy++) {
    if (arguments[maxy] > max) {
      max = arguments[maxy];
    }
  }
  return max;
}

let avggenap = sumortotal(genap) / genap.length;
let avgganjil = sumortotal(ganjil) / ganjil.length;

console.log(genap);
console.log("total = " + sumortotal(genap));
console.log("rata-rata = " + avggenap);
console.log("Minimum = " + minimumar(genap));
console.log("Maximum = " + maximumar(genap));

console.log(ganjil);
console.log("total = " + sumortotal(ganjil));
console.log("rata-rata = " + avgganjil);
console.log("Minimum = " + minimumar(ganjil));
console.log("Maximum = " + maximumar(ganjil));

//comparison
if (sumortotal(genap) < sumortotal(ganjil)) {
  console.log("Perbandingan total ganjil lebih besar");
} else {
  console.log("Perbandingan total genap lebih besar");
}
if (avggenap < avgganjil) {
  console.log("Perbandingan rata-rata ganjil lebih besar");
} else {
  console.log("Perbandingan rata-rata genap lebih besar");
}
if (minimumar(genap) < minimumar(ganjil)) {
  console.log("Perbandingan minimum ganjil lebih besar");
} else {
  console.log("Perbandingan minimum genap lebih besar");
}
if (maximumar(genap) < maximumar(ganjil)) {
  console.log("Perbandingan maximum ganjil lebih besar");
} else {
  console.log("Perbandingan maximum genap lebih besar");
}
