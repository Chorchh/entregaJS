// ARRAY DE PIZZAS
let pizzas = [
    {
        id: 1,
        nombre: "muzzarella",
        ingredientes: ["muzzarella", " salsa de tomate", " aceitunas"],
        precio: 500,
        imgSrc: "./img/muzzarella.png",
    },
    {
        id: 2,
        nombre: "calabresa",
        ingredientes: ["queso", " longaniza", " salsa de tomate"],
        precio: 900,
        imgSrc: "./img/calabresa.png",
    },
    {
        id: 3,
        nombre: "fugazzeta",
        ingredientes: ["queso", " cebolla", " aceitunas"],
        precio: 750,
        imgSrc: "./img/fugazzeta.png",
    },
    {
        id: 4,
        nombre: "napolitana",
        ingredientes: ["queso", " tomate", " albahaca", " aceite de oliva"],
        precio: 1000,
        imgSrc: "./img/napolitana.png",
    },
    {
        id: 5,
        nombre: "cuatro quesos",
        ingredientes: ["muzzarella", " parmesano", " roquefort", " robiola"],
        precio: 900,
        imgSrc: "./img/cuatroquesos.png",
    },
    {
        id: 6,
        nombre: "argentina",
        ingredientes: ["tomate", " cebolla", " queso"],
        precio: 600,
        imgSrc: "./img/argentina.png",
    },
]

let nuevoPizza = []

// Array en el localStorage
localStorage.setItem("pizzaArray", JSON.stringify(pizzas));


// ELEMENTOS DEL HTML
const form = document.querySelector(".pizza-form");
const input = document.querySelector(".pizza-input");
const card = document.querySelector(".pizza_card");
const msg = document.querySelector(".msg")


const createCard = pizzas => {
    return `<h3>${pizzas.nombre}</h3>
    <img src="${pizzas.imgSrc}" class="img-pizza">
    <p>${pizzas.ingredientes}</p>
    <p>$${pizzas.precio}</p>
    `
};

const renderCard = pizzaCard => {
    card.innerHTML = pizzaCard.map(pizza => createCard(pizza));
};


const addCard = e => {
    e.preventDefault();

    const pizzaName = input.value;
    if(!pizzaName){
        msg.textContent = "Ingresa un número de pizza";
        return;
    } else if (!pizzas.some(nombre => nombre.id == Number(pizzaName))){
        msg.textContent = "No tenemos esa pizza";

        nuevoPizza =[]
        renderCard(nuevoPizza);
        return;

    } else { nuevoPizza = pizzas.filter(pizza => pizza.id == pizzaName)

    msg.textContent = "";
    renderCard(nuevoPizza);

};
}

const init = () => {
    form.addEventListener("submit", addCard);
    form.reset();
};

init();