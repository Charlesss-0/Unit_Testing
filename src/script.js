export function capitalize(str) {
    return str.slice(0, 1).toUpperCase() + str.slice(1)
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

export function caesarCipher(message, shit) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('')

    let result = ''

    for (let char of alphabet) {
        if (char.includes(message)) {
            let index = alphabet.find(char)
            index = (index + shit) % alphabet.length

            if (index < 0) {
                index = index + alphabet.length
            }

            result = result + alphabet[index]
        } else {
            result = result + char
        }
    }

    return result
}
