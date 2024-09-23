"use strict";
function calcular_imc() {
    let input_peso = document.querySelector("input#peso");
    let peso = Number(input_peso.value);
    let input_altura = document.querySelector("input#altura");
    let altura = Number(input_altura.value);
    let imc = peso / (altura ** 2);
    let imc_formatado = imc.toFixed(2);
    imc = Number(imc_formatado);
    mostrar_imc(imc);
    return false;
}
function mostrar_imc(imc) {
    let p = document.querySelector("p.result");
    p.innerHTML = `${imc}`;
    let p2 = document.querySelector("p.indice");
    if (imc < 18.5) {
        p2.innerHTML = `Abaixo do peso`;
        console.log(p2.innerHTML);
    }
    else if (imc >= 18.5 && imc < 24.9) {
        p2.innerHTML = `Peso normal`;
        console.log(p2.innerHTML);
    }
    else if (imc >= 24.9 && imc < 29.9) {
        p2.innerHTML = `Sobrepeso`;
        console.log(p2.innerHTML);
    }
    else if (imc >= 29.9 && imc < 34.9) {
        p2.innerHTML = `Obesidade 1`;
        console.log(p2.innerHTML);
    }
    else if (imc >= 34.9 && imc < 39.9) {
        p2.innerHTML = `Obesidade 2`;
        console.log(p2.innerHTML);
    }
    else {
        p2.innerHTML = `Obesidade 3`;
        console.log(p2.innerHTML);
    }
    return false;
}
function homem_mulher(tag) {
    tag.style.border = "1px solid variaveis.$color-secundary";
}
function limparCampos() {
    let input_peso = document.querySelector("input#peso");
    input_peso.value = '';
    let input_altura = document.querySelector("input#altura");
    input_altura.value = '';
}
