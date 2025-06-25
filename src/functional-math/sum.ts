import { mapReduce2 } from "./map-reduce";
import { factorial } from "../utilities";

export function sumInts(a: number, b: number): number {
  return a > b ? 0 : a + sumInts(a + 1, b);
}

export function sumSquares(a: number, b: number): number {
  return a > b ? 0 : Math.pow(a, 2) + sumSquares(a + 1, b);
}

export function sumCubes(a: number, b: number): number {
  return a > b ? 0 : Math.pow(a, 3) + sumCubes(a + 1, b);
}

export function sumFactorial(a: number, b: number): number {
  return a > b ? 0 : factorial(a) + sumFactorial(a + 1, b);
}

export const sumMap =
  (mapFn: (value: number) => number) =>
  (a: number, b: number): number =>
    a > b ? 0 : mapFn(a) + sumMap(mapFn)(a + 1, b);

export const sumMap2 = mapReduce2((a, b) => a + b, 0);
