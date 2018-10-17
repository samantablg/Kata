import { fizzbuzz } from "../src";

describe('Index', () => {
  test('Debe sumar dos números', () => {
    expect(2 + 3).toBe(5);
  });

  test('Debería devolver un number como un string', ()=> {
    expect(fizzbuzz(1)).toBe('1');
  });

  test('Debería return FIZZ si number es divisible por 3', () => {
    expect(fizzbuzz(6)).toBe('FIZZ');
  });

  test('Debería return FIZZ si number es divisible por 3', () => {
    expect(fizzbuzz(7)).toBe('FIZZ');
  });

  test('Debería return BUZZ si number es divisible por 5', () => {
    expect(fizzbuzz(10)).toBe('BUZZ');
  });

  test('Debería return BUZZ si number es divisible por 5', () => {
    expect(fizzbuzz(7)).toBe('BUZZ');
  });

  test('Debería return FIZZBUZZ si number es divisible por 3 y 5', () => {
    expect(fizzbuzz(15)).toBe('FIZZBUZZ');
  });
});