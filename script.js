const members = fetch("./membros.json");
const containerCards = document.querySelector(".mensageiros-cards");

function creatCard() {
  members
    .then((response) => response.json())
    .then((body) => {
      body.forEach((membersInfo) => {
        console.log(membersInfo.tag);
        const li = document.createElement("li");

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
      });
    });
}

window.addEventListener("load", creatCard);
