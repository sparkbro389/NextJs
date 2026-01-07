describe("String tests", () => {
  test("string contains substring", () => {
    expect("github actions").toContain("actions");
  });

  test("string length is correct", () => {
    expect("nextjs".length).toBe(6);
  });

  test("uppercase conversion", () => {
    expect("test".toUpperCase()).toBe("TEST");
  });
});
