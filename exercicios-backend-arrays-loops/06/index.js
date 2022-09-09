const numeros = [3, 4, 7, 8, 1, 6, 5, 10];
let contador = 0
for (item of numeros)
{
    if (item%2===0)
    {
        contador+=item
    }
    
}
console.log(contador)