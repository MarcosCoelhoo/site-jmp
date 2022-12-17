import initScrollReveal from "./scroll-reveal.js";

export default function initCreateCard() {
  const members = fetch("./membros.json");
  const containerCards = document.querySelector(".mensageiros-cards");
  createCard();
  function createCard() {
    members
      .then((response) => response.json())
      .then((body) => {
        body.forEach((membersInfo) => {
          const li = document.createElement("li");

          li.setAttribute("data-anime", "scroll");

          li.innerHTML = `
        <div class="card-image">
        <img src="./assets/imgs/img-teste.png" alt="" width="215px" height="275px">
        <div class="card-grupo">
          <a href="#">
            <p class="tag-grupo tag-${membersInfo.tag}">${membersInfo.grupo}</p>
          </a>
        </div>
        </div>
        <div class="card-content">
        <h2 class="card-name">${membersInfo.nome}</h2>
        <div class="card-info">
          <p class="info-idade">${membersInfo.idade}</p>
        </div>
        <div class="card-button">
          <a href="pagina-de-usuario.html">mais sobre</a>
        </div>
        </div>
        `;

          containerCards.appendChild(li);

          initScrollReveal();
        });
      });
  }
}
