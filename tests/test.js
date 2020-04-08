/* eslint-disable no-undef */
/* eslint-disable semi */
const tests = require('../index')

test('canary test', () => {
})

// Methods to test
//     - capitalize √
//     - allCaps √
//     - capitalizeWords
//     - removeExtraSpaces
//     - kabobCase
//     - snakeCase
//     - camelCase

test('Test capitalize', () => {
  expect(tests.capitalize('capitalize')).toBe('Capitalize')
  // expect(tests.capitalize(3)).toBe(3)
  // better practice to raiseType error or sanitize input?
})

test('Test allCaps', () => {
  expect(tests.allCaps('caps')).toBe('CAPS')
  expect(tests.allCaps('CaPs')).toBe('CAPS')
  expect(tests.allCaps('CAPS')).toBe('CAPS')
})

test('Test capitalizeWords', () => {
  expect(tests.capitalizeWords('caps')).toBe('Caps')
  expect(tests.capitalizeWords('CaPs')).toBe('CaPs')
  expect(tests.capitalizeWords('CAPS')).toBe('CAPS')
  expect(tests.capitalizeWords('cAPS')).toBe('CAPS')
  expect(tests.capitalizeWords('caPS')).toBe('CaPS')
})
