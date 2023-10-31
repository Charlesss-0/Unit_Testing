// Capitalize first letter
export function capitalize(str) {
    // Convert first character to uppercase and leave the rest unchanged
    return str.slice(0, 1).toUpperCase() + str.slice(1)
}

// Reverse string function
export function reverseString(str) {
    // Initialize an empty string to store the reversed string
    let newStrg = ''

    // Loop through the input string starting at index -1
    for (let i = str.length - 1; i >= 0; i--) {
        newStrg += str[i]
    }

    // Return the new reversed string
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

        // Call shifter function to concatenate its result to the result string
        result += shifter(character, shift)
    }

    // Return the result
    return result
}

// Apply shifting actions
function shifter(character, shift) {
    const regex = /[a-zA-Z]/

    if (regex.test(character)) {
        // Check if character is uppercase
        const isUppercase = character === character.toUpperCase()

        // Apply the shift to the character
        let shiftedCharacter = character.charCodeAt(0) + shift

        // Call wrap function to handle wrapping
        wrap(isUppercase, shiftedCharacter)

        // Convert the shifted character back to a string
        shiftedCharacter = String.fromCharCode(shiftedCharacter)

        return shiftedCharacter
    } else {
        return character
    }
}

// Wrap around the alphabet
function wrap(isUppercase, shiftedCharacter) {
    switch (isUppercase) {
        case shiftedCharacter > 'Z'.charCodeAt(0):
            shiftedCharacter -= 26
            break
        case shiftedCharacter < 'A'.charCodeAt(0):
            shiftedCharacter += 26
            break
        case shiftedCharacter > 'z'.charCodeAt(0):
            shiftedCharacter -= 26
            break
        case shiftedCharacter < 'a'.charCodeAt(0):
            shiftedCharacter += 26
    }
}

// Analyze array function
export function analyzeArray(arr) {
    // Initialize empty object to store the result
    const obj = {
        average: null,
        min: null,
        max: null,
        length: null
    }

    // Loops through obj and returns its corresponding values
    for (let i = 0; i < arr.length; i++) {
        getAverage(arr, i, obj)
        getMinMax(arr, i, obj)
    }

    return obj
}

// Get the average value
function getAverage(arr, i, obj) {
    // Checks if obj.average or obj.length are falsy to return true
    // and get the average and length of the array
    if (!obj.average || !obj.length) {
        obj.average = parseInt(arr[i] / 2)
        obj.length = arr.length
    }
}

// Get the min and max value
function getMinMax(arr, i, obj) {
    // Checks if obj.min or obj.max are falsy to return true
    // and get the min and max value
    if (!obj.min || arr[i] < obj.min) {
        obj.min = arr[i]
    } else if (!obj.max || arr[i] > obj.max) {
        obj.max = arr[i]
    }
}
