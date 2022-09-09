const nomes = ["Ana", "Joana", "Carlos", "amanda"];
const NomeA=[];
for (let nome of nomes)
{
    const primeiraletra=nome [0];
    if (primeiraletra==="A"||primeiraletra==="a"){
        NomeA.push(nome)
    }
}
console.log(NomeA)