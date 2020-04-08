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
    expect(tests.capitalize(3)).toBe(3)
    // better practice to raiseType error or sanitize input?
  })

test('Test allCaps', () => {
  expect(tests.allCaps('caps')).toBe('CAPS')
  expect(tests.allCaps('CaPs')).toBe('CAPS')
  expect(tests.allCaps('CAPS')).toBe('CAPS')
})

test('Test capitalizeWords', () => {
  con
  expect(tests.capitalizeWords('caps')).toBe('CAPS')
  expect(tests.capitalizeWords('CaPs')).toBe('CAPS')
  expect(tests.capitalizeWords('CAPS')).toBe('CAPS')
})