import { capitalize } from './script'
import { reverseString } from './script'
import { calculator } from './script'
import { caesarCipher } from './script'

const body = document.querySelector('body')
body.style.backgroundColor = '#5f5f5f'
body.style.color = '#efefef'
const h1 = document.createElement('h1')

h1.innerHTML = capitalize('javascript\n')
h1.innerHTML += reverseString('hello')

const calculate = calculator(5, 3)
h1.innerHTML += '\n' + calculate.multiply() + '\n'

h1.innerHTML += caesarCipher('A', 10)

body.append(h1)
