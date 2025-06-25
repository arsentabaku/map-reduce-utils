import { factorial } from "./utilities/factorial";
import { sumMap, sumMap2 } from "./functional-math/sum";
import { prodMap, prodMap2 } from "./functional-math/prod";
import { mapReduce } from "./functional-math/map-reduce";

function testAllVariants(
  label: string,
  fn: (x: number) => number,
  start = 1,
  end = 5
) {
  console.log(`\n--- ${label} from ${start} to ${end} ---`);

  console.log("sumMap:", sumMap(fn)(start, end));
  console.log("sumMap2:", sumMap2(fn)(start, end));
  console.log("mapReduceSum:", mapReduce(fn, (a, b) => a + b, 0)(start, end));

  console.log("prodMap:", prodMap(fn)(start, end));
  console.log("prodMap2:", prodMap2(fn)(start, end));
  console.log("mapReduceProd:", mapReduce(fn, (a, b) => a * b, 1)(start, end));
}

testAllVariants("x", (x) => x);
testAllVariants("x*x", (x) => x * x);
testAllVariants("x*x*x", (x) => x * x * x);
testAllVariants("factorial(x)", factorial);
