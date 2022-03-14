const primosController = require('../controllers/primos.controllers');

test('validar numero primo verdadero', () => {
  expect(primosController.esPrimo(13)).toBeTruthy();
});

test('validar numero primo falso', () => {
  expect(primosController.esPrimo(15)).toBeFalsy();
});

test('validar resultado', () => {
  expect(primosController.buscarNumerosPrimos(7)).toEqual([7,5,3,2]);
});