function exibir_Carros() {
  fetch("http://127.0.0.1:3000/api/carros")
    .then((res) => {
      if (!res.ok) {
        throw new Error(res.status);
      }
      return res.json();
    })
    .then((data) => {
      let div = document.querySelector("#car");
      div.innerHTML = "";

      data.forEach((carro) => {
        let carBox = document.createElement("div");
        carBox.classList.add("car-box");
        carBox.innerHTML = `
          <h3>${carro.modelo}</h3>
          <p><strong>Marca:</strong> ${carro.marca}</p>
          <p><strong>Ano:</strong> ${carro.ano}</p>
          <p><strong>Cor:</strong> ${carro.cor}</p>
          <p><strong>Kilometragem:</strong> ${carro.kilometragem}</p>
          <p><strong>Valor:</strong> R$ ${carro.valor}</p>
        `;
        div.appendChild(carBox);
      });
    })
    .catch((erro) => {
      console.error(erro);
    });
}

exibir_Carros();
