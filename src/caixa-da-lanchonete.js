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
        var i = 0;
        var tamanho = itens.length;
        var calculo = 0;
        var itemxquant = 0;
        while (i < tamanho) {
            var item = itens[i];
            var partes = item.split(',');
            var p1 = partes[0];
            var p2 = parseInt(partes[1]);
            itemxquant = cardapio[p1] * p2;
            calculo = calculo + itemxquant;
            i = i + 1;
        }

        if (metodoDePagamento == 'dinheiro') {
            calculo = calculo + (calculo * -0.05);
            var result = "R$" + calculo
        }
        else if (metodoDePagamento == 'credito') {
            calculo = calculo + (calculo * 0.03);
            var result = "R$" + calculo
        }
        else if (metodoDePagamento == 'debito') {
            calculo = calculo;
            var result = "R$" + calculo
        }
        else {
            var result = "Forma de pagamento inválida!";

        }
        return result;
    }

}

var resultado = new CaixaDaLanchonete().calcularValorDaCompra('dinheir', ['cafe,1', 'chantily,2']);

console.log(resultado);

export { CaixaDaLanchonete };


