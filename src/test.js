var cardapio = {
    cafe: 3,
    chantily: 1.5,
    suco: 6.2,
    sanduiche: 6.5,
    queijo: 2,
    salgado: 7.25,
    combo1: 9.5,
    combo2: 7.5
};

class CaixaDaLanchonete {
    calcularValorDaCompra(metodoDePagamento, itens) {
        var result = 123;
        
        return result;
    }

}

var caixa = new CaixaDaLanchonete();
var valorCalculado=caixa.calcularValorDaCompra('debito', ['cafe,1','chantily,1']);

console.log(valorCalculado);

export { CaixaDaLanchonete };


