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
        var arreyItens = [];
        while (i < tamanho) {
            var item = itens[i];
            var partes = item.split(',');
            var p1 = partes[0];
            var p2 = partes[1];
            itemxquant = cardapio[p1] * parseInt(p2);
            calculo = calculo + itemxquant;
            arreyItens[i] = p1;
            i = i + 1;
        }
        console.log(arreyItens)

        if (p1 == undefined) {
            var result = 'Não há itens no carrinho de compra!'
        }
        else if (!(p1 in cardapio)) {
            var result = 'Item inválido!'
        }
        else if (p2 == undefined || p2 == '0') {
            var result = 'Quantidade inválida!'
        }
        else if (arreyItens.includes('chantily')) {
            if (arreyItens.includes('cafe')) {
                if (metodoDePagamento == 'dinheiro') {
                    calculo = calculo + (calculo * -0.05);
                    var result = "R$ " + calculo.toFixed(2);
                }
                else if (metodoDePagamento == 'credito') {
                    calculo = calculo + (calculo * 0.03);
                    var result = "R$ " + calculo.toFixed(2);
                }
                else if (metodoDePagamento == 'debito') {
                    calculo = calculo;
                    var result = "R$ " + calculo.toFixed(2);
                }
                else {
                    var result = "Forma de pagamento inválida!";
                }
            }
            else {
                var result = 'Item extra não pode ser pedido sem o principal';
            }
        }
        else if (arreyItens.includes('queijo')) {
            if (arreyItens.includes('sanduiche')) {
                if (metodoDePagamento == 'dinheiro') {
                    calculo = calculo + (calculo * -0.05);
                    var result = "R$ " + calculo.toFixed(2);
                }
                else if (metodoDePagamento == 'credito') {
                    calculo = calculo + (calculo * 0.03);
                    var result = "R$ " + calculo.toFixed(2);
                }
                else if (metodoDePagamento == 'debito') {
                    calculo = calculo;
                    var result = "R$ " + calculo.toFixed(2);
                }
                else {
                    var result = "Forma de pagamento inválida!";
                }
            }
            else {
                var result = 'Item extra não pode ser pedido sem o principal';
            }
        }
        else {
            if (metodoDePagamento == 'dinheiro') {
                calculo = calculo + (calculo * -0.05);
                var result = "R$ " + calculo.toFixed(2);
            }
            else if (metodoDePagamento == 'credito') {
                calculo = calculo + (calculo * 0.03);
                var result = "R$ " + calculo.toFixed(2);
            }
            else if (metodoDePagamento == 'debito') {
                calculo = calculo;
                var result = "R$ " + calculo.toFixed(2);
            }
            else {
                var result = "Forma de pagamento inválida!";
            }
        }

        result = result.replace(/\./g, ",");
        return result;
    }

}

var resultado = new CaixaDaLanchonete().calcularValorDaCompra('credito', ['chantily,2']);


console.log(resultado);

export { CaixaDaLanchonete };