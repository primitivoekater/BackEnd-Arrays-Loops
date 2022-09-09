const numeros = [3, 24, 1, 8, 11, 7, 15];
let maior =0
for(item of numeros)
{
    if (maior<item)
    {
        maior=item
    }
}
console.log(maior)