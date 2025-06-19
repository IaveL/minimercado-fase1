const produtos = [
  {
    nome: "Arroz",
    preco: 25.9,
    categoria: "cesta basica",
    imagem: "images/arroz.jpg",
  },
  {
    nome: "Pão",
    preco: 8.0,
    categoria: "cesta basica",
    imagem: "images/pao-frances.jpg",
  },
  {
    nome: "Banana",
    preco: 6.99,
    categoria: "frutas",
    imagem: "images/banana-prata.png",
  },
  { nome: "Maçã Gala", preco: 7.5, categoria: "frutas", imagem: "images/maca-gala.jpg" },
  {
    nome: "Detergente",
    preco: 2.99,
    categoria: "produtos de limpeza",
    imagem: "images/detergente.png",
  },
  {
    nome: "Sabão em Pó",
    preco: 14.99,
    categoria: "produtos de limpeza",
    imagem: "images/sabao.jpg",
  },
];

const listaProdutos = document.getElementById("listaProdutos");
const filtro = document.getElementById("filtroCategoria");

function exibirProdutos(produtosFiltrados) {
  listaProdutos.innerHTML = "";
  produtosFiltrados.forEach((produto) => {
    const card = document.createElement("div");
    card.className = "card produto-card shadow-sm";

    card.innerHTML = `
          <img src="${produto.imagem}" class="card-img-top" alt="${
      produto.nome
    }">
    <hr>
          <div class="card-body text-center">
            <h5 class="card-title">${produto.nome}</h5>
            <strong class="card-text">R$ ${produto.preco
              .toFixed(2)
              .replace(".", ",")}</strong>
          </div>
        `;

    listaProdutos.appendChild(card);
  });
}

filtro.addEventListener("change", () => {
  const categoria = filtro.value;
  const filtrados =
    categoria === "todas"
      ? produtos
      : produtos.filter((p) => p.categoria === categoria);

  exibirProdutos(filtrados);
});

exibirProdutos(produtos);
