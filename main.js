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
        id: 5,
        nombre: "argentina",
        ingredientes: ["tomate", "cebolla", "queso"],
        precio: 600,
    },
]

// a)
pizza.forEach(numero => {
    if(numero.id % 2 != 0)
       console.log(`Las pizzas impares son: ${numero.nombre}`);
  });

// b)
pizza.forEach(pizza => {
    if(pizza.precio < 600)
    console.log(`La pizza más barata es la ${pizza.nombre} `);
});

// c)
console.log(pizza.map((pizza) => pizza.nombre));

// d)
const precioPizzas = pizza.map(({precio}) => precio);
    console.log(precioPizzas);

// e)
const pizzaconprecio = () => pizza.forEach ((pizza) => console.log(`La pizza de ${pizza.nombre} sale $${pizza.precio}`));

pizzaconprecio();