const calcular = document.getElementById('calcular');
function imc(){
    const nome = document.getElementById('nome').value;
    const altura = document.getElementById('altura').value;
    const peso = document.getElementById('peso').value;
    const resultado = documentget.getElementById('resultado');
}
if(nome !=='' && altura !=='' && peso !==) {

    const valorIMC = (peso/(altura * altura)).toFixed(1);

    let classificacao = '';
    if(valorIMC < 18.5){
        classificacao = 'abaixo do peso';
    }

else if(valorIMC < 25) {
    classificacao = 'com peso normal'
}else if (valorIMC < 30){
    classificacao = 'levemente acima do peso';
}else if(valorIMC < 35){
        classificacao = 'com obesidade grau 1';
    }
    else if(valorIMC < 40){
        classificacao = 'com obesidade grau 2 '
    }
    else{
        classificacao = 'com obesidade grau 3. cuidado!!'
    }
    resultado.textContent = '${nome} seu IMC é ${valor'

}  else{
    resultado.textContent='preencha todos os campos'
}  
calcular.addEventListener('click', imc
)
