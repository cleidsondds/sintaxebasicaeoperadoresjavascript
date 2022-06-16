function soma(a,b){
    
    let resultado;
    let iguais;    
    
    if (a===b){
        iguais=`Os números ${a} e ${b} são iguais. ` ;
    }else{
        iguais=`Os números ${a} e ${b} não são iguais. ` ;
    }

    if ((a + b > 10) && (a + b < 20)) {
        resultado =`Sua soma é ${a+b}, que é maior que 10 e menor que 20.`;
    }else if (a + b < 10){
        resultado =`Sua soma é ${a+b}, que é menor que 10 e menor que 20.`;
    }else if (a + b == 10){
        resultado =`Sua soma é ${a+b}, que é igual a 10.`;
    }else if (a + b == 20){
        resultado =`Sua soma é ${a+b}, que é igual a 20.`;
    }else if (a + b > 20){
        resultado =`Sua soma é ${a+b}, que é maior que 20.`;
    }    
    return (iguais + resultado);       
}

function realizarSoma(){       
    let num1, num2;
    num1 = Number(prompt('Informe o número 1: '));
    num2 = Number(prompt('Informe o número 2: '));
    alert(soma(num1, num2));   
    novaOperacao();
}

function novaOperacao(){
    
    let opcao;
    opcao = Number(prompt('Deseja realizar uma nova operação?\n 1 - Sim\n 2 - Não'));
    if(!opcao || opcao > 2){
        alert('Opção inválida. Digite somente Números!');
        novaOperacao();
    }

    switch(opcao){
        case opcao = 1:
            realizarSoma();
            break;
        case opcao = 2:
            alert('Ate o próximo cálculo!');            
            break;               
    } 
}
realizarSoma();
/* let contador = 0;
console.log(contador++); */