function cadProduto(produto, quantidade, valor, total) {
    let tb = document.querySelector('#tbProduto');
    let qtdLinhas = tb.rows.length;
    let linha = tb.insertRow(qtdLinhas);


    let cellProduto = linha.insertCell(0);
    let cellQuantidade = linha.insertCell(1);
    let cellValor = linha.insertCell(2);
    let cellTotal = linha.insertCell(3);

    
    cellProduto.innerHTML = produto;
    cellQuantidade.innerHTML = quantidade;
    cellValor.innerHTML = valor;
    cellTotal.innerHTML = total;
}