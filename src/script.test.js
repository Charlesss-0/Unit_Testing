import { capitalize } from './script'
import { reverseString } from './script'
import { calculator } from './script'
import { caesarCipher } from './script'
import { analyzeArray } from './script'

test('Capitalize first character', () => {
    expect(capitalize('string')).toBe('String')
})

test('Reverse String', () => {
    expect(reverseString('string')).toBe('gnirts')
})

test('Calculate', () => {
    const calculate = calculator(10, 5)

    expect(calculate.add()).toBe(15)
    expect(calculate.subtract()).toBe(5)
    expect(calculate.multiply()).toBe(50)
    expect(calculate.divide()).toBe(2)
})

test('Caesar Cipher', () => {
    const encryptedText = 'Hello'
    expect(caesarCipher(encryptedText, 3)).toBe('Khoor')
})

test('Anaylize Array', () => {
    const arr = [1, 8, 3, 4, 2, 6]
    const obj = {
        average: 4,
        min: 1,
        max: 8,
        length: 6
    }
    expect(analyzeArray(arr)).toStrictEqual(obj)
})
