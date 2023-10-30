// Capitalize first letter
export function capitalize(str) {
    return str.slice(0, 1).toUpperCase() + str.slice(1)
}

// Reverse string function
export function reverseString(str) {
    let newStrg = ''

    for (let i = str.length - 1; i >= 0; i--) {
        newStrg += str[i]
    }

    return newStrg
}

// Calculator function
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

// Caesar Cipher function
export function caesarCipher(message, shift) {
    // Initialize an empty string to store the result
    let result = ''

    // Loop through each characters in the input string
    for (let i = 0; i < message.length; i++) {
        const character = message[i]

        if (/[a-zA-Z]/.test(character)) {
            // Determine whether it's an uppercase or lowercase letter
            const isUppercase = character === character.toUpperCase()

            // Apply the Caesar Cipher shift to the letter
            let shiftedCharacter = character.charCodeAt(0) + shift

            // Ensure the shifted character wraps around the alphabet
            if (isUppercase) {
                if (shiftedCharacter > 'Z'.charCodeAt(0)) {
                    shiftedCharacter -= 26
                } else if (shiftedCharacter < 'A'.charCodeAt(0)) {
                    shiftedCharacter += 26
                }
            } else {
                if (shiftedCharacter > 'z'.charCodeAt(0)) {
                    shiftedCharacter -= 26
                } else if (shiftedCharacter < 'a'.charCodeAt(0)) {
                    shiftedCharacter += 26
                }
            }

            // Convert the shifted character back to a letter
            shiftedCharacter = String.fromCharCode(shiftedCharacter)

            // Add the shifted character to the result
            result += shiftedCharacter
        } else {
            // If the character is not a letter, leave it unchanged
            result += character
        }
    }

    // Return the result
    return result
}
