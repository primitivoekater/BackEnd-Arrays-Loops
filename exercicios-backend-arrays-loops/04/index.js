const numeros=[0]
for(i=0;i<500;i++)
{
  numeros.push(numeros.length+1)
}
for(i=0;i<numeros.length;i++){
    let multiplica = numeros[i]*3
    console.log(multiplica)
}