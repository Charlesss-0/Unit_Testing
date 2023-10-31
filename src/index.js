import { capitalize } from './script'
import { reverseString } from './script'
import { calculator } from './script'
import { caesarCipher } from './script'
import { analyzeArray } from './script'

const capitalized = capitalize('javascript')
console.log(`Capitalized word: ${capitalized}`)

const reversed = reverseString('javascript')
console.log(`Reversed word: ${reversed}`)

const calculate = calculator(5, 20)
console.log(`Operation result: ${calculate.multiply()}`)

const encryptedText = caesarCipher('Hello World', 3)
console.log(`Encrypted Text: ${encryptedText}`)

const array = [1, 8, 3, 4, 2, 6]
const analyzed = analyzeArray(array)
console.log(`
    Average: ${analyzed.average}
    Min: ${analyzed.min}
    Max: ${analyzed.max}
    Length: ${analyzed.length}
`)
