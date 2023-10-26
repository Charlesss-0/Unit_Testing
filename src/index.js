import { capitalize } from './script'
import { reverseString } from './script'

const body = document.querySelector('body')
const h1 = document.createElement('h1')

h1.innerHTML = capitalize('javascript\n')
h1.innerHTML += reverseString('hello')

body.append(h1)
