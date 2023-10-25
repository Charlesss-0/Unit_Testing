const capitalize = require('./index')

test('capitalize first character', () => {
    expect(capitalize('hello')).toBe('Hello')
})
