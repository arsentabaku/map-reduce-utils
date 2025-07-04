export const mapReduce = (
  mapFn: (value: number) => number,
  reduceFn: (a: number, b: number) => number,
  initialValue: number
) => {
  return function (a: number, b: number): number {
    return a > b
      ? initialValue
      : reduceFn(mapFn(a), mapReduce(mapFn, reduceFn, initialValue)(a + 1, b));
  };
};

export const mapReduce2 =
  (reduceFn: (a: number, b: number) => number, initialValue: number) =>
  (mapFn: (value: number) => number) => {
    return function (a: number, b: number): number {
      return a > b
        ? initialValue
        : reduceFn(
            mapFn(a),
            mapReduce2(reduceFn, initialValue)(mapFn)(a + 1, b)
          );
    };
  };
