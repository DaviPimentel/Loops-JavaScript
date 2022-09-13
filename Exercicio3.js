let idade = Number
let idade21 = 0
let idade50 = 0

while(idade != -99){
     idade = parseInt(prompt('Digite a sua idade'))

   
    if(idade < 21){
        idade21++
    }
    if(idade > 50){
        idade50++
    }
}
document.write(`<br>Total de pessoas com menos de 21 <br>${idade21}`)
document.write(`<br>Total de pessoas com mais de 50 <br>${idade50}`)

