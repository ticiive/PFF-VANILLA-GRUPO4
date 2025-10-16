const projetos = [
  {
    nomeProjeto: "Projeto sem nome",
    dataInicio: "1/10/25",
    dataFim: "29/12/25",
    informacaoProjeto: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod "
  },
  {
    nomeProjeto: "App de Estudos",
    dataInicio: "5/11/25",
    dataFim: "20/12/25",
    informacaoProjeto: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod"
  },
  {
    nomeProjeto: "Site de Receitas",
    dataInicio: "10/10/25",
    dataFim: "15/12/25",
    informacaoProjeto: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod"
  }
];

function criaCard(el){
    const div = document.getElementById("dv");
    const card = document.createElement("div");

    card.className = "card";
    card.style.color = "blue";
    card.style.border = "1px solid black";
    card.style.margin = "10px";
    card.style.padding = "10px";
      

    let nomeProjeto = document.createElement("p");
    nomeProjeto.textContent = `Nome do Projeto: ${el.nomeProjeto}`;

    let dataInicio = document.createElement("p");
    dataInicio.textContent = `Data de Início: ${el.dataInicio}`;

    let dataFim = document.createElement("p");
    dataFim.textContent = `Data de Início: ${el.dataFim}`;

    let informacaoProjeto = document.createElement("p");
    informacaoProjeto.textContent = `Informações do Projeto: ${el.informacaoProjeto}`;

    card.append(nomeProjeto,dataInicio,dataFim,informacaoProjeto);
    div.append(card);


}

projetos.forEach(projeto => criaCard(projeto));

