// Definição do cardápio com os preços dos itens
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
        var arrayItens = [];
        // Variável para calcular o valor total da compra
        var calculo = 0;
        // Flags para verificar a presença de itens específicos
        var temCafe = false;
        var temSanduiche = false;

        // Verifica se o carrinho está vazio
        if (itens.length === 0) {
            return 'Não há itens no carrinho de compra!';
        }

        // Loop para processar cada item no carrinho
        for (var i = 0; i < itens.length; i++) {
            var itemEQtd = itens[i];
            var partes = itemEQtd.split(',');
            var item = partes[0];
            var quantidadeItem = partes[1];

            // Verifica se o item ou a quantidade são inválidos
            if (cardapio[item] === undefined) {
                return 'Item inválido!'
            } else if (quantidadeItem === undefined || parseInt(quantidadeItem) === 0) {
                return 'Quantidade inválida!'
            }

            // Adiciona o item ao carrinho e calcula o subtotal
            arrayItens.push(item);
            calculo += cardapio[item] * parseInt(quantidadeItem);

            // Verifica se é café ou sanduíche para uso posterior
            if (item === 'cafe') {
                temCafe = true;
            } else if (item === 'sanduiche') {
                temSanduiche = true;
            }
        }

        // Verifica as condições para exibir a mensagem de item extra
        if (arrayItens.includes('chantily') && !temCafe) {
            return 'Item extra não pode ser pedido sem o principal';
        } else if (arrayItens.includes('queijo') && !temSanduiche) {
            return 'Item extra não pode ser pedido sem o principal';
        }

        // Calcula o desconto ou acréscimo com base no método de pagamento
        if (metodoDePagamento === 'dinheiro') {
            calculo -= calculo * 0.05;
        } else if (metodoDePagamento === 'credito') {
            calculo += calculo * 0.03;
        } else if (metodoDePagamento !== 'debito') {
            return 'Forma de pagamento inválida!';
        }

        // Formata o resultado final e retorna
        return 'R$ ' + calculo.toFixed(2).replace('.', ',');
    }
}

var resultado = new CaixaDaLanchonete().calcularValorDaCompra('debito', ['cafe,1','chantily,5']);


console.log(resultado);

export { CaixaDaLanchonete };
