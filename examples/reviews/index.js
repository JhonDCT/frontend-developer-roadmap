const users = [
  {
    id: 1,
    img: "hombre.png",
    name: "Bill Anderson",
    role: "The Boss",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, facilis sequi. Incidunt libero at iure hic ex. Eum quia molestiae    voluptatum laboriosam esse unde. Impedit earum expedita tempore exratione!",
  },
  {
    id: 2,
    img: "hombre.png",
    name: "Jhon Deyner",
    role: "Developer",
    description: "Pequeña descripción",
  },
  {
    id: 3,
    img: "hombre.png",
    name: "Jhon Catacora",
    role: "Frontend Developer",
    description: "Gran descripción",
  },
];

const imgProfile = document.querySelector(".card-profile__img");
const h3Name = document.querySelector(".card-profile__name");
const h3Role = document.querySelector(".card-profile__role");
const pDescription = document.querySelector(".card-profile__description");
const buttonPrev = document.querySelector(".card-profile__actions--prev");
const buttonNext = document.querySelector(".card-profile__actions--next");
const buttonSurprise = document.querySelector(".card-profile__surprise");
const ASSETS_DIR = "../assets";

let currentUser = users[0];

let chargeUserInformation = (index) => {
  if (index < 0 || index >= users.length) {
    index = 0;
  }

  currentUser = users[index];

  imgProfile.src = `${ASSETS_DIR}/${currentUser.img}`;
  h3Name.textContent = currentUser.name;
  h3Role.textContent = currentUser.role;
  pDescription.textContent = currentUser.description;
};

buttonPrev.addEventListener("click", () => {
  const { id } = currentUser;
  let index = users.findIndex((u) => u.id === id);

  chargeUserInformation(index - 1);
});

buttonNext.addEventListener("click", () => {
  const { id } = currentUser;
  let index = users.findIndex((u) => u.id === id);

  chargeUserInformation(index + 1);
});

buttonSurprise.addEventListener("click", () => {
  const randomIndex = Math.floor(Math.random() * users.length);

  chargeUserInformation(randomIndex);
});

window.addEventListener("DOMContentLoaded", () => {
  chargeUserInformation(0);
});
