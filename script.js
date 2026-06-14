const botaoTema = document.getElementById("tema");

botaoTema.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  if(document.body.classList.contains("dark")){
    botaoTema.textContent = "☀";
  }else{
    botaoTema.textContent = "☾";
  }
});

function calcular(){
  const total = Number(document.getElementById("canteiros").value);
  const sustentaveis = Number(document.getElementById("sustentaveis").value);
  const resultado = document.getElementById("resultado");

  if(total <= 0 || sustentaveis < 0 || sustentaveis > total){
    resultado.textContent = "Preencha os dados corretamente.";
    resultado.style.color = "crimson";
    return;
  }

  const porcentagem = (sustentaveis / total) * 100;

  let mensagem = "";

  if(porcentagem >= 80){
    mensagem = "Excelente! O projeto apresenta alto nível de sustentabilidade.";
  }else if(porcentagem >= 50){
    mensagem = "Bom resultado, mas ainda há espaço para ampliar as práticas sustentáveis.";
  }else{
    mensagem = "Atenção: o projeto precisa fortalecer o manejo sustentável.";
  }

  resultado.style.color = "var(--verde)";
  resultado.textContent = `Índice sustentável: ${porcentagem.toFixed(1)}%. ${mensagem}`;
}
