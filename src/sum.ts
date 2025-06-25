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

export function factorial(n: number): number {
  return n <= 1 ? 1 : n * factorial(n - 1);
}
