export function capitalize(strg) {
    return strg.slice(0, 1).toUpperCase() + strg.slice(1)
}

export function reverseString(str) {
    // const reversedString = str.split('').reverse('').join('')

    // return reversedString

    let newStrg = ''

    for (let i = str.length - 1; i >= 0; i--) {
        newStrg += str[i]
    }

    return newStrg
}

export function calculator(a, b) {
    return {
        add() {
            return a + b
        },

        subtract() {
            return a - b
        },

        multiply() {
            return a * b
        },

        divide() {
            return a / b
        }
    }
}
