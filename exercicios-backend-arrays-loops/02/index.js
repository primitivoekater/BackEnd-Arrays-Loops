const letras = ["A", "a", "B", "C", "E", "e"];
let contador=0
for(let letra  of letras)
{
  if (letra==="e"||letra==="E"){
      contador++;
  } 
}
console.log(`sua palavra tem ${contador} letras -e-`);
if (contador===0)
{
    console.log(" nenhuma letra -e- encontrada")
}