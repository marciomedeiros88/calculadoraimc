function calcularIMC(){
    event.preventDefault();


    let peso = document.getElementById('peso').value
    let altura = document.getElementById('altura').value

    let resultadoIMC = peso / (altura*altura);
    console.log(resultadoIMC)
    let resultadoIMC2 = Math.round(resultadoIMC);


    let resultadofinal = document.getElementById('resultadoIMC')
    resultadofinal.innerText = ''
    if(resultadoIMC < 19){
        resultadofinal.innerText += `Seu IMC é ${resultadoIMC2}. Abaixo do peso.`
    }else if(resultadoIMC >=19 && resultadoIMC < 25){
        resultadofinal.innerText += `Seu IMC é ${resultadoIMC2}. Peso normal.`
    }else if(resultadoIMC >=26 && resultadoIMC < 30){
        resultadofinal.innerText += `Seu IMC é ${resultadoIMC2}. Excesso de peso.`
    }else if(resultadoIMC >= 31 && resultadoIMC < 35){
        resultadofinal.innerText += `Seu IMC é ${resultadoIMC2}. Obesidade tipo 1.`
    }else if(resultadoIMC >= 36 && resultadoIMC < 40){
        resultadofinal.innerText += `Seu IMC é ${resultadoIMC2}. Obesidade tipo 2.`
    }else if(resultadoIMC >= 41){
        resultadofinal.innerText += `Seu IMC é ${resultadoIMC2}. Obesidade tipo 3.`
    }
    limparDados();
    
}
function limparDados(){
    document.getElementById('peso').value = ''
    document.getElementById('altura').value = ''
}
