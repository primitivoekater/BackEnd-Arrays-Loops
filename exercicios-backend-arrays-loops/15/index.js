const original = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const pares = [];
const impares = [];
for(item of original)
{
    item%2==0?pares.push(item):impares.push(item)
}
console.log(pares)
console.log(impares)
