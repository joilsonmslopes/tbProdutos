function obterProduto() {
    document.querySelector('input#txtp').value
}

function obterValor() {
    document.querySelector('input#txtv').value
}

function obterQuantidade() {
    document.querySelector('input#txtq').value
}

function addProduto() {
    let res = document.querySelector('div#res');

    let produto = obterProduto()
    let quantidade = Number(obterQuantidade)
    let valor = Number(obterValor)
    

    if (produto == 0 || quantidade == 0 || valor == 0) {
        alert('error! PREENCHER TODOS OS CAMPOS')
    } else {
        res.innerHTML = `${produto} | ${valor} x ${quantidade} = ${valor*quantidade}`
    }
}