const original = [5, 7, 13, 17, 26, 34, 118, 245];
let novaarray=[0]
for (itens of original)
{
    if(itens>=10&&itens<=20 || itens>100 )
    {
      novaarray.push(itens)
    }
}
console.log(novaarray);
