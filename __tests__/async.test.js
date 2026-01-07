describe("Async tests", () => {
  test("async test resolves", async () => {
    const result = await Promise.resolve("ok");
    expect(result).toBe("ok");
  });

  test("async timeout test", done => {
    setTimeout(() => {
      expect(true).toBe(true);
      done();
    }, 10);
  });
});
