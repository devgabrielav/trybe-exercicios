/* let saldo = 2000;


function adicionaValor(adicao) {
    return saldo + adicao;
}
function subtracaoValor(subtracao) {
    return saldo - subtracao;
}
function multValor(mult) {
    return saldo * mult;
}
function diviValor(divi) {
    return saldo / divi;
}

console.log(adicionaValor(500));
console.log(subtracaoValor(250));
console.log(multValor(5));
console.log(diviValor(2)); */
/* 
let clientesTrybeBank = ['Ada', 'John', 'Gus'];

function addClient(nome) {
    if (typeof nome === 'string'){
        clientesTrybeBank.push(nome);
        return 'Cliente adicionado com sucesso!'
    } else {
        return 'Parâmetro não é uma string!'
    }
}
function removeClient(nome) {
    if (typeof nome === 'string'){
        clientesTrybeBank.pop(nome);
        return 'Cliente removido com sucesso!'
    } else {
        return 'Parâmetro não é uma string!'
    }
}


console.log(addClient('Davi'));
console.log(clientesTrybeBank);

console.log(removeClient('Davi'));
console.log(clientesTrybeBank); */

let clientesTrybeBank = ['Ada', 'John', 'Gus'];

function checkCliente(cliente) {
    let clienteEncontrado;
    if (typeof cliente === 'string') {
        clienteEncontrado = clientesTrybeBank;
        if (clienteEncontrado === false) {
            return 'Cliente não encontrado'
        }
        else {
            return 'O parâmetro passado deve ser do tipo "string"!';
        }

    }
}

console.log(checkCliente('John'));

function removeCliente(cliente) {

    for (let index = 0; index < clientesTrybeBank.length; index += 1) {
        if (cliente === clientesTrybeBank[index]) {
            clientesTrybeBank.splice(index, 1);
            clienteEncontrado = true;
            return 'Cliente excluída(o) com sucesso.';
        }

    }
};

console.log(removeCliente);
console.log(clientesTrybeBank);
