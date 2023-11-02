// import { describe, expect, it } from "vitest"
import { Calc } from './calc';
test('1+2= => 3', () => {
  const calc = new Calc();
  //  calc.input('1+1=');
  expect(calc.current).toBe(2);
});
// describe('calc', () => {
//   //test suite
//   let calc: Calc;
//   beforeAll(() => {});
//   afterAll(() => {});
//   beforeEach(() => {
//     calc = new Calc();
//   });
//   afterEach(() => {
//     calc = null;
//   });
//   it('should return 2 for 1 + 1', () => {
//     //test case
//     // arrange
//     const actual = 1 + 1;
//     const expected = 2;
//     // expect
//     expect(actual).toBe(expected); // === for primitive types
//     expect({ name: 'Ravshan' }).toEqual({ name: 'Ravshan' }); // ===
//   });
//   it('should return 3 for 1 + 2', () => {
//     //test case
//     vi.mock('express', () => {});
//     const callBack = vi.fn().mockImplementation(() => {});
//     vi.stubEnv('NODE_ENV', 'production');
//     // arrange
//     const actual = 1 + 2;
//     const expected = 3;
//     const calc = new Calc();
//     // expect
//     expect(actual).toBe(expected); // === for primitive types
//     expect({ name: 'Ravshan' }).toEqual({ name: 'Ravshan' }); // ===
//   });
// });
