describe("Array tests", () => {
  const data = [1, 2, 3, 4, 5];

  test("array length", () => {
    expect(data.length).toBe(5);
  });

  test("array contains value", () => {
    expect(data).toContain(3);
  });

  test("array mapping works", () => {
    const doubled = data.map(n => n * 2);
    expect(doubled).toEqual([2, 4, 6, 8, 10]);
  });
});
