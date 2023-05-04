let saldo = 2000;


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
console.log(diviValor(2));