"use strict";
const container_botoes = document.getElementsByClassName("botao");
const visor = document.getElementById("visor");
let operador;
let operando_atual;
let operandos = [];
let operando1, operando2;
for (let b = 0; container_botoes.length; b++) {
    container_botoes[b].addEventListener("click", function () {
        if (container_botoes[b].classList.contains("num")) {
            if (visor.innerHTML === "0") {
                visor.innerHTML = container_botoes[b].innerHTML;
                operando_atual = container_botoes[b].innerHTML;
            }
            else {
                visor.innerHTML += container_botoes[b].innerHTML;
                operando_atual += container_botoes[b].innerHTML;
            }
        }
        else {
            operandos.push(operando_atual);
            operando_atual = '';
            if (container_botoes[b].classList.contains("invisible")) {
                console.log(operandos);
                if (container_botoes[b].innerHTML != "=") {
                    operador = container_botoes[b].innerHTML;
                }
                operandos = virgula(operandos);
                console.log(operandos);
                operando1 = Number(operandos[0]);
                operando2 = Number(operandos[1]);
                if (container_botoes[b].innerHTML == "=") {
                    console.log(operador);
                    visor.innerHTML = calcular(operando1, operador, operando2).toString();
                    operando_atual = visor.innerHTML;
                    operandos = [];
                }
                else if (container_botoes[b].innerHTML == "AC") {
                    operando_atual = '';
                    operandos = [];
                    visor.innerHTML = "0";
                }
                else {
                    visor.innerHTML = calcular(operando1, operador, operando2).toString();
                    operando_atual = visor.innerHTML;
                    operandos = [];
                }
            }
            else {
                visor.innerHTML += container_botoes[b].innerHTML;
                operador = container_botoes[b].innerHTML;
            }
        }
    });
}
function calcular(op1, op3, op2) {
    let result;
    switch (op3) {
        case "+":
            result = op1 + op2;
            return result;
        case "--":
            result = op1 - op2;
            return result;
        case "/":
            result = op1 / op2;
            return result;
        case "X":
            result = op1 * op2;
            return result;
        case "+/-":
            result = op1 - (2 * op1);
            return result;
        case "%":
            result = op1 / 100;
            return result;
    }
}
function virgula(lista) {
    return lista.map((str) => str.replace(",", "."));
}
