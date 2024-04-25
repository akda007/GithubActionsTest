
const validateCpf = (cpf) => {
    if (typeof(cpf) != "string") throw 'Value is not a string'

    if (cpf.length != 11) return false;

    let equal_numbers = true;
    for (let i = 1; i < cpf.length - 1; i++) {
        if (cpf[i-1] != cpf[i]) {
            equal_numbers = false;
            break;
        }
    }

    if (equal_numbers) return false;

    let value = 0, remainder = 0;

    for (let i = 0; i < 9; i++) value += cpf[i] * (10-i);


    remainder = (value*10) % 11;

    remainder = remainder == 10 ? 0 : remainder;

    if (remainder != cpf[9]) return false;

    value = 0;    
    for (let i = 0; i < 10; i++) value += cpf[i] * (11-i);

    remainder = (value*10) % 11;

    if (remainder != cpf[10]) return false;

    return true;
}

export { validateCpf }