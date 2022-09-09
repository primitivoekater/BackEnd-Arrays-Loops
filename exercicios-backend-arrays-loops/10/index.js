const numeros = [8, 11, 4, 1];
let maior =0
let menor =1
for(item of numeros)
{
    if (maior<item)
    {
        maior=item
    }
    if (item<menor)
    {
        menor=item
    }
}
const soma =maior-menor
console.log (`o menor numero do array é ${menor} e o maior numero do array é ${maior} e a diferença entre ele é ${soma} unidades `)