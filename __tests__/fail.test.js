describe('Intentional failing test', () => {
  test('this test should always fail', () => {
    expect(true).toBe(false);
  });
});
