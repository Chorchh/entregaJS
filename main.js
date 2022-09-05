let pizza = [
    {
        id: 1,
        nombre: "muzzarella",
        ingredientes: ["muzzarella", "salsa de tomate", "aceitunas"],
        precio: 500,
    },
    {
        id: 2,
        nombre: "calabresa",
        ingredientes: ["queso", "longaniza", "salsa de tomate"],
        precio: 900,
    },
    {
        id: 3,
        nombre: "fugazzeta",
        ingredientes: ["queso", "cebolla", "aceitunas"],
        precio: 750,
    },
    {
        id: 4,
        nombre: "napolitana",
        ingredientes: ["queso", "tomate", "albahaca", "aceite de oliva"],
        precio: 1000,
    },
    {
        id: 5,
        nombre: "cuatro quesos",
        ingredientes: ["muzzarella", "parmesano", "roquefort", "robiola"],
        precio: 900,
    },
    {
        id: 6,
        nombre: "argentina",
        ingredientes: ["tomate", "cebolla", "queso"],
        precio: 600,
    },
]

// a)
pizza.forEach((numero) => {
    if(numero.id % 2 !== 0)
       console.log(`Las pizzas impares son: ${numero.nombre}`);
  });

// b)
let pizzaMenosDe = () => {
    if (pizza.some((pizza) => pizza.precio < 600)){
        return `la pizza ${pizza.nombre} es menor a $600`;
    }
    else {
        return "no hay pizzas menores a $600"
    }
};
console.log(pizzaMenosDe());

// c)
console.log(pizza.map((pizza) => pizza.nombre));

// d)
const precioPizzas = pizza.map(({precio}) => precio);
    console.log(precioPizzas);

// e)
const pizzaconprecio = () => pizza.forEach ((pizza) => console.log(`La pizza de ${pizza.nombre} sale $${pizza.precio}`));

pizzaconprecio();


// Practica de otras clases

const inputFocus = document.querySelector("#inputbtn");

inputFocus.addEventListener("focus", funcionFocus);
inputFocus.addEventListener("blur", funcionBlur);

function funcionFocus () {
    inputFocus.style.backgroundColor = "white";
}

function funcionBlur () {
    inputFocus.style.backgroundColor = "#da7c62";
}


// Entrega 2 JS

// Traer elementos del HTML
const input = document.querySelector(".inputbtn");
const formPizzas = document.querySelector(".pizza-form");
const pizzaName = document.getElementById("pizza-name");
const pizzaPrice = document.getElementById("pizza-price");

const isEmpty = (value) => (value === "" ? false : true);

const addInput = e => {
    e.preventDefault();
    const inputNumber = input.value;
    if (!isEmpty(inputNumber)) {
        alert("Se requiere un valor");
        return;
    } else if (pizzaSearch(pizza) !== undefined) {
        pizzaName.textContent = `La pizza ${(pizzaSearch(pizza).nombre)}`;
        pizzaPrice.textContent = `Te cuesta $${pizzaSearch(pizza).precio}`
    } else if (pizzaSearch(pizza) == undefined) {
        pizzaName.textContent = `No tenemos esa pizza`;
        pizzaPrice.textContent = "";
        return;
    }
};


const pizzaSearch = (p) => {
    const valor = input.value;
    const search = p.find((pizza) => pizza.id == valor);
    return search;
};


// Funcion para ejecutar
const init = () => {
    formPizzas.addEventListener("submit", addInput);
    formPizzas.reset();
};

init();