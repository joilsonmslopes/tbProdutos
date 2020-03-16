/*function obterNum1(){
    document.querySelector('input#txt1').value
}

function obterNum2(){
    document.querySelector('input#txt2').value
}

function somar() {
    let res = document.querySelector('div#res');   
    let n1 = Number(obterNum1);
    let n2 = Number(obterNum2);
    let tot = n1 + n2;
    
    res.innerHTML += `${tot}`;
};
*/

function somar() {
    let number1 = document.querySelector('input#txt1');
    let number2 = document.querySelector('input#txt2');
    let res = document.querySelector('div#res');

    let n1 = Number(number1.value)
    let n2 = Number(number2.value)
    let tot = n1 + n2;
    res.innerHTML = `${n1} + ${n2} = ${tot}`

    limparResultado()

}

function subtrair() {
    let number1 = document.querySelector('input#txt1');
    let number2 = document.querySelector('input#txt2');
    let res = document.querySelector('div#res');

    let n1 = Number(number1.value)
    let n2 = Number(number2.value)
    let tot = n1 - n2;
    res.innerHTML = `${n1} - ${n2} = ${tot}`

    limparResultado()

}

function multiplicar() {
    let number1 = document.querySelector('input#txt1');
    let number2 = document.querySelector('input#txt2');
    let res = document.querySelector('div#res');

    let n1 = Number(number1.value)
    let n2 = Number(number2.value)
    let tot = n1 * n2;
    res.innerHTML = `${n1} x ${n2} = ${tot}`

    limparResultado()

}

function dividir() {
    let number1 = document.querySelector('input#txt1');
    let number2 = document.querySelector('input#txt2');
    let res = document.querySelector('div#res');

    let n1 = Number(number1.value)
    let n2 = Number(number2.value)
    let tot = n1 / n2;
    res.innerHTML = `${n1} / ${n2} = ${tot}`
    limparResultado()

}

function limparResultado() {
    number1.value = ''
    number2.value = ''
    number1.focus()
}