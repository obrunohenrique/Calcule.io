function calcular_imc():boolean {
    let input_peso: HTMLInputElement = document.querySelector("input#peso") as HTMLInputElement
    let peso:number = Number(input_peso.value)
    let input_altura:HTMLInputElement = document.querySelector("input#altura") as HTMLInputElement
    let altura:number = Number(input_altura.value)

    if (input_peso.value == '' || input_altura.value == '') {
        window.alert("preencha todos os campos para calular.")
        return false
    }

    let imc:number = peso / (altura**2)
    let imc_formatado = imc.toFixed(2)
    imc = Number(imc_formatado)
    mostrar_imc(imc)
    return false
}

function mostrar_imc(imc:number): boolean {
    let p: HTMLParagraphElement = document.querySelector("p.result") as HTMLParagraphElement
    p.innerHTML = `${imc}`

    let p2: HTMLParagraphElement = document.querySelector("p.indice") as HTMLParagraphElement
    
    if (imc < 18.5) {
        p2.innerHTML = `Abaixo do peso`
        console.log(p2.innerHTML)
    } else if (imc >= 18.5 && imc < 24.9) {
        p2.innerHTML = `Peso normal`
        console.log(p2.innerHTML)
    } else if(imc >= 24.9 && imc < 29.9) {
        p2.innerHTML = `Sobrepeso`
        console.log(p2.innerHTML)

    } else if (imc >= 29.9 && imc < 34.9) {
        p2.innerHTML = `Obesidade 1`
        console.log(p2.innerHTML)

    } else if (imc >= 34.9 && imc < 39.9) {
        p2.innerHTML = `Obesidade 2`
        console.log(p2.innerHTML)

    } else {
        p2.innerHTML = `Obesidade 3`
        console.log(p2.innerHTML)
    }

    return false
}

function homem_mulher(tag:HTMLElement): void {
    tag.style.border = "1px solid variaveis.$color-secundary"
}

function limparCampos() {
    let input_peso: HTMLInputElement = document.querySelector("input#peso") as HTMLInputElement
    input_peso.value = ''
    let input_altura:HTMLInputElement = document.querySelector("input#altura") as HTMLInputElement
    input_altura.value = ''
}