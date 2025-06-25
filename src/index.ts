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
import { mapReduce } from "./map-reduce";

console.log("\n---Plain sum functions---\n");

console.log("sumInts => ", sumInts(1, 5));
console.log("sumSquares => ", sumSquares(1, 5));
console.log("sumCubes => ", sumCubes(1, 5));
console.log("sumFactorial => ", sumFactorial(1, 5));

console.log("\n---Currying sum functions---\n");

const sumInt2 = sumMap((x) => x);
console.log("sumInt2 => ", sumInt2(1, 5));
const sumSquares2 = sumMap((x) => Math.pow(x, 2));
console.log("sumSquares2 => ", sumSquares2(1, 5));
const sumCubes2 = sumMap((x) => Math.pow(x, 3));
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
const prodSquares2 = prodMap((x) => Math.pow(x, 2));
console.log("prodSquares2 => ", prodSquares2(1, 5));
const prodCubes2 = prodMap((x) => Math.pow(x, 3));
console.log("prodCubes2 => ", prodCubes2(1, 5));
const prodFactorial2 = prodMap((x) => factorial(x));
console.log("prodFactorial2 => ", prodFactorial2(1, 5));

console.log("\n---Reduce functions---\n");

const sumInts3 = mapReduce(
  (x) => x,
  (a, b) => a + b,
  0
);
console.log("sumInts3 =>", sumInts3(1, 5));
const sumSquares3 = mapReduce(
  (x) => Math.pow(x, 2),
  (a, b) => a + b,
  0
);
console.log("sumSquares3 =>", sumSquares3(1, 5));
const sumCubes3 = mapReduce(
  (x) => Math.pow(x, 3),
  (a, b) => a + b,
  0
);
console.log("sumCubes3 =>", sumCubes3(1, 5));
const sumFactorial3 = mapReduce(factorial, (a, b) => a + b, 0);
console.log("sumFactorial3 =>", sumFactorial3(1, 5));

const prodInts3 = mapReduce(
  (x) => x,
  (a, b) => a * b,
  1
);
console.log("prodInts3 =>", prodInts3(1, 5));
const prodSquares3 = mapReduce(
  (x) => Math.pow(x, 2),
  (a, b) => a * b,
  1
);
console.log("prodSquares3 =>", prodSquares3(1, 5));
const prodCubes3 = mapReduce(
  (x) => Math.pow(x, 3),
  (a, b) => a * b,
  1
);
console.log("prodCubes3 =>", prodCubes3(1, 5));
const prodFactorial3 = mapReduce(factorial, (a, b) => a * b, 1);
console.log("prodFactorial3 =>", prodFactorial3(1, 5));
