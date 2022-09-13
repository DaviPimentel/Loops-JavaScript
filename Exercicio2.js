

for(i = 0; i < 10; i++) {
    const num = parseInt(prompt('Digite o número'))

    if(num % 2 == 0) {
        document.write('<br>'`Pares ${num}`)
    }
    else{
        document.write('<br>'`Impares ${num}`)
    }
}