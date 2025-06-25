import {
  sumInts,
  sumSquares,
  sumCubes,
  sumFactorial,
  factorial,
  sumMap,
} from "./sum";

console.log("sumInts => ", sumInts(1, 5));
console.log("sumSquares => ", sumSquares(1, 5));
console.log("sumCubes => ", sumCubes(1, 5));
console.log("sumFactorial => ", sumFactorial(1, 5));

console.log("\n---Below are currying functions---\n");

const sumInt2 = sumMap((x) => x);
console.log("sumInt2 => ", sumInt2(1, 5));
const sumSquares2 = sumMap((x) => x * x);
console.log("sumSquares2 => ", sumSquares2(1, 5));
const sumCubes2 = sumMap((x) => x * x * x);
console.log("sumCubes2 => ", sumCubes2(1, 5));
const sumFactorial2 = sumMap((x) => factorial(x));
console.log("sumFactorial2 => ", sumFactorial2(1, 5));
