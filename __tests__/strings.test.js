describe("String tests", () => {
  test("string contains substring", () => {
    expect("github actions").toContain("workflow"); // ❌ will fail
  });

  test("string length is correct", () => {
    expect("nextjs".length).toBe(10); // ❌ will fail
  });

  test("uppercase conversion", () => {
    expect("test".toUpperCase()).toBe("test"); // ❌ will fail
  });
});
