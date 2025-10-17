const projetos = [
  {
    nomeProjeto: "Projeto sem nome",
    informacaoProjeto: "O projeto consiste...",
    imagem: "Mídia/imagemGaleria.png"
  },
  {
    nomeProjeto: "App de Estudos",
    informacaoProjeto: "O projeto consiste...",
    imagem: "Mídia/imagemGaleria.png"
  },
  {
    nomeProjeto: "Site de Receitas",
    informacaoProjeto: "O projeto consiste...",
    imagem: "Mídia/imagemGaleria.png"
  }
];


  function criaCard(el) {
  const div = document.getElementById("dv");
  const card = document.createElement("div");
  card.className = "card";



  const img = document.createElement("img");
  img.src = el.imagem;
  img.alt = `Imagem do ${el.nomeProjeto}`;
  img.className = "imagem";

  const texto = document.createElement("div");
  texto.className = "texto";
  texto.innerHTML = `
    <h3>${el.nomeProjeto}</h3>
    <p>${el.informacaoProjeto}</p>`;

  card.append(texto, img);
  div.append(card);
}

projetos.forEach((projeto) => criaCard(projeto));


