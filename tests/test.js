/* eslint-disable no-undef */
/* eslint-disable semi */
const tests = require('../index')

test('canary test', () => {
})


test('Test capitalize', () => {
  expect(tests.capitalize('capitalize')).toBe('Capitalize')
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

test('Test removeExtraSpace', () => {
  expect(tests.removeExtraSpaces('   Test   test   test')).toBe('Test test test')
  expect(tests.removeExtraSpaces('C  a  P  s')).toBe('C a P s')
  expect(tests.removeExtraSpaces('   l  l  l   l   ll')).toBe('l l l l ll')
})
