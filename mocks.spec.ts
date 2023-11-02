test('mocking in vitest', () => {
  const a = {
    b(value: number) {
      return value * 3;
    },
  };

  const spyOfB = vi.spyOn(a, 'b');

  a.b(5);

  expect(spyOfB).toHaveBeenCalledTimes(1);

  const callback = vi.fn().mockImplementation((element) => element * 2);
  // const callback=()=>{}
  const array = [1, 2, 3];
  const act = array.map(callback);
  expect(callback).toHaveBeenCalled();
  expect(callback).toHaveBeenCalledTimes(3);
  expect(callback).toHaveBeenCalledWith(1, 0, array);
  expect(callback).toHaveBeenLastCalledWith(3, 2, array);
  expect(callback).toHaveBeenNthCalledWith(1, 1, 0, array);
  expect(callback).toHaveBeenNthCalledWith(2, 2, 1, array);
  expect(callback).toHaveBeenNthCalledWith(3, 3, 2, array);
  expect(act).toEqual([2, 4, 6]);
  // expect(callback).toHaveBeenCalledOnce();
});
