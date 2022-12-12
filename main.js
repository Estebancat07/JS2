const numberInput = document.getElementById("number-input");
const submitInput = document.getElementById("submit-input");
const form = document.getElementById("form");
const container = document.getElementById("container-cards");

const Pizzas = [
  {
    nombre: "Pizza Napolitana🍕",
    id: 1,
    ingredientes: ["Muzza", "Oregano", "Tomate"],
    precio: "1500",
  },

  {
    nombre: "Pizza 4 Quesos 🍕",
    id: 2,
    ingredientes: ["Muzza", "Roquefort" , "Parmesano", "Provoleta"],
    precio: "1600",
  },

  {
    nombre: "Pizza Calabresa 🍕",
    id: 3,
    ingredientes: ["Muzza", "Salame",],
    precio: "1700",
  },

  {
    nombre: "Pizza Jamon Crudo 🍕",
    id: 4,
    ingredientes: ["Muzza", "Jamon crudo"],
    precio: "1800",
  },

  {
    nombre: "Pizza Fugazzeta Provenzal 🍕",
    id: 5,
    ingredientes: ["Muzza", "Cebolla", "Provenzal"],
    precio: "1300",
  },

  {
    nombre: "Pizza Especial 🍕",
    id: 6,
    ingredientes: ["Muzza", "Jamon", "Morron"],
    precio: "1400",
  },

  {
    nombre: "Pizza Rucula 🍕",
    id: 7,
    ingredientes: ["Muzza", "Rucula"],
    precio: "1200",
  },
];

const agarraPizza = () => {
  const numberValue = numberInput.value.trim();

  const findPizzas = Pizzas.find((pizza) => {
    return pizza.id == numberValue;
  });
  if (isEmpty(numberValue)) {
    container.classList.add("hidden");
    showError(numberInput, "Debe ingresar algún número.");
  } else if (!findPizzas) {
    container.classList.add("hidden");
    showError(numberInput, "Debe ingresar un número entre 1 y 7.");
  } else if (findPizzas) {
    removeError(numberInput);
    container.classList.remove("hidden");
    container.innerHTML = `<div>
    <h2 class="nombre-pizza">${findPizzas.nombre}</h2>
    <h3 class="valor">$${findPizzas.precio}</h3>
  </div>
  <div><i class="fa-solid fa-pizza-slice"></i></div>`;
  }
};

const isEmpty = (value) => !value.length;

const showError = (input, message) => {
  const div = input.parentElement;
  div.classList.add("error");
  const error = div.querySelector("small");
  error.textContent = message;
};

const removeError = (input) => {
  const div = input.parentElement;
  div.classList.remove("error");
  const error = div.querySelector("small");
  error.textContent = "";
};
form.addEventListener("submit", (e) => {
  e.preventDefault();
  agarraPizza();
});
