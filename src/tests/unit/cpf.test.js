import { validateCpf } from "../../common/cpf";

describe('ValidateCPF', () => {
    test('Expected true cpf to be true', () => {
        expect(validateCpf('07500279914')).toBe(true)
    })

    test('Throws type error', () => {
        expect(() => {
            validateCpf(undefined)
        }).toThrow();
    })

    test('Repeated cpf must return false', () => {
        expect(validateCpf('11111111111')).toBe(false)
    })

    test('Expected invalid length cpf to return false', () => {
        expect(validateCpf('111111111')).toBe(false)
    })

    test('Expected first verification to return false', () => {
        expect(validateCpf('07500279924')).toBe(false)
    })

    test('Expected second verification to return false', () => {
        expect(validateCpf('07500279915')).toBe(false)
    })
})