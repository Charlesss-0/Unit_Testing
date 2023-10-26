import { capitalize } from './script'
import { reverseString } from './script'
import { calculator } from './script'

test('capitalize first character', () => {
    expect(capitalize('string')).toBe('String')
})

test('reverse string', () => {
    expect(reverseString('string')).toBe('gnirts')
})

test('calculate operations', () => {
    const calculate = calculator(10, 5)

    expect(calculate.add()).toBe(15)
    expect(calculate.subtract()).toBe(5)
    expect(calculate.multiply()).toBe(50)
    expect(calculate.divide()).toBe(2)
})
