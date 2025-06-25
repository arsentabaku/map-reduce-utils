import { mapReduce2 } from "./map-reduce";
import { factorial } from "../utilities";

export function prodInts(a: number, b: number): number {
  return a > b ? 1 : a * prodInts(a + 1, b);
}

export function prodSquares(a: number, b: number): number {
  return a > b ? 1 : Math.pow(a, 2) * prodSquares(a + 1, b);
}

export function prodCubes(a: number, b: number): number {
  return a > b ? 1 : Math.pow(a, 3) * prodCubes(a + 1, b);
}

export function prodFactorial(a: number, b: number): number {
  return a > b ? 1 : factorial(a) * prodFactorial(a + 1, b);
}

export const prodMap =
  (mapFn: (value: number) => number) =>
  (a: number, b: number): number =>
    a > b ? 1 : mapFn(a) * prodMap(mapFn)(a + 1, b);

export const prodMap2 = mapReduce2((a, b) => a * b, 1);
