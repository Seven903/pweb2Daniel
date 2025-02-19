let coresCarros = [
  "Preto",
  "Branco",
  "Prata",
  "Cinza",
  "Vermelho",
  "Azul",
  "Verde",
  "Amarelo",
  "Laranja",
  "Roxo",
  "Marrom",
  "Bege",
  "Dourado",
  "Bordô",
  "Grafite",
  "Champanhe",
  "Turquesa",
  "Vinho",
  "Cobre",
  "Rosa",
  "Azul Marinho",
  "Verde Escuro",
  "Cinza Chumbo",
  "Branco Pérola",
  "Prata Fosco",
  "Preto Metálico",
  "Azul Céu",
  "Verde Limão",
  "Roxo Escuro",
  "Vermelho Ferrari",
];

for (let i = 0; i < coresCarros.length; i++) {
  let select = document.querySelector("#cor");
  let opiton = document.createElement("option");
  opiton.textContent = coresCarros[i];
  select.appendChild(opiton);
}

function pegar_dados() {
  document
    .querySelector("#formulario")
    .addEventListener("submit", () => {

      const dados = {
        modelo: document.querySelector("#modelo").value,
        marca: document.querySelector("#marca").value,
        ano: document.querySelector("#ano").value,
        cor: document.querySelector("#cor").value,
        kilometragem: document.querySelector("#kilo").value,
        valor: document.querySelector("#valor").value,
      };

      fetch("http://127.0.0.1:3000/carros", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(dados),
      })
        .then((res) => {
          if (!res.ok) {
            throw new Error(res.status);
          }
          return res.json();
        })
        .then((data) => {
          console.log("Dados enviados com secesso: ", data);
        })
        .catch((erro) => {
          console.log(erro);
        });
    });
}

pegar_dados()



