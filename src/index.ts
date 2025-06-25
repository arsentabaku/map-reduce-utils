import {
  sumInts,
  sumSquares,
  sumCubes,
  sumFactorial,
  factorial,
  sumMap,
} from "./sum";
import {
  prodInts,
  prodSquares,
  prodCubes,
  prodFactorial,
  prodMap,
} from "./prod";

console.log("\n---Plain sum functions---\n");

console.log("sumInts => ", sumInts(1, 5));
console.log("sumSquares => ", sumSquares(1, 5));
console.log("sumCubes => ", sumCubes(1, 5));
console.log("sumFactorial => ", sumFactorial(1, 5));

console.log("\n---Currying sum functions---\n");

const sumInt2 = sumMap((x) => x);
console.log("sumInt2 => ", sumInt2(1, 5));
const sumSquares2 = sumMap((x) => x * x);
console.log("sumSquares2 => ", sumSquares2(1, 5));
const sumCubes2 = sumMap((x) => x * x * x);
console.log("sumCubes2 => ", sumCubes2(1, 5));
const sumFactorial2 = sumMap((x) => factorial(x));
console.log("sumFactorial2 => ", sumFactorial2(1, 5));

console.log("\n---Plain prod functions---\n");

console.log("prodInts => ", prodInts(1, 5));
console.log("prodSquares => ", prodSquares(1, 5));
console.log("prodCubes => ", prodCubes(1, 5));
console.log("prodFactorial => ", prodFactorial(1, 5));

console.log("\n---Currying sum functions---\n");

const prodInt2 = prodMap((x) => x);
console.log("prodInt2 => ", prodInt2(1, 5));
const prodSquares2 = prodMap((x) => x * x);
console.log("prodSquares2 => ", prodSquares2(1, 5));
const prodCubes2 = prodMap((x) => x * x * x);
console.log("prodCubes2 => ", prodCubes2(1, 5));
const prodFactorial2 = prodMap((x) => factorial(x));
console.log("prodFactorial2 => ", prodFactorial2(1, 5));
