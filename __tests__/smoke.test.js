describe("Smoke test suite", () => {
  test("true is true", () => {
    expect(true).toBe(false); // <-- This will fail
  });

  test("false is false", () => {
    expect(false).toBe(true); // <-- This will also fail
  });
});
