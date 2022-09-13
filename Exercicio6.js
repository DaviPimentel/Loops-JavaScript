let num = 0
let soma = 0

do{
     num = parseInt(prompt('Digite um número'))
     if(num % 3==0)
     soma++

}while(num !=0)
document.write(`${soma}`)