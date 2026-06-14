function calcular(){

let total =
Number(document.getElementById("total").value);

let sustentavel =
Number(document.getElementById("sustentavel").value);

let resultado =
document.getElementById("resultado");

if(
total <= 0 ||
sustentavel < 0 ||
sustentavel > total
){
resultado.innerHTML =
"Preencha os dados corretamente.";
return;
}

let porcentagem =
(sustentavel / total) * 100;

resultado.innerHTML =
"Índice de sustentabilidade: " +
porcentagem.toFixed(1) +
"%";
}
