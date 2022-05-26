/*

👉 Crear un archivo HTML que contenga un h2, un h4, un input number y un botón. 

👉 El desafío será, al tocar el botón, capturar el valor ingresado en el input.
👉 Renderizar en el h2 el nombre y en el h4 el precio de la pizza cuyo id coincida con el numero ingresado en el input. 

🚨 Si no coincide con ningún id, renderizar un mensaje de error. 

*/

const menuPizzas = [
{id:0, nombre : 'Muzarella', ingredientes : ['Muzarella','Aceituna'], precio : 500},
{id:1, nombre : 'Muzarella con Huevo', ingredientes : ['Muzarella','Aceituna','Huevo'], precio : 550},
{id:2, nombre : 'Corazon de Pollo', ingredientes : ['Queso Cremoso','Muzarella','Albahaca'], precio : 600},
{id:3, nombre : 'Palmitos', ingredientes : ['Muzarella', 'Salsa Golf', 'Tomate Cherry'], precio : 650},
{id:4, nombre : 'Panceta', ingredientes : ['Muzarella', 'Huevo Frito'], precio : 700},
{id:5, nombre : 'Especial de la Casa', ingredientes : ['Muzarella','Carne de lomo Arabe', ' Tiras de Morron','Huevo Frito'], precio : 750},
];

const $nmbPizza = document.querySelector('#nmbPizza'),
      $pcoPizza = document.querySelector('#pcoPizza'),
      $btn = document.querySelector('#btn');
      
const captValor = () => {
    const $idValor = document.querySelector('#idValor').value;
    
    const menu = menuPizzas.find(pizzas => pizzas.id == $idValor);
    if (menu){
        $nmbPizza.innerHTML = menu.nombre;
        $pcoPizza.innerHTML = menu.precio;
    }else {
        $nmbPizza.innerHTML = 'ERROR';
        $pcoPizza.innerHTML = 'ERROR';
    }
}

const clearM = () => {
    document.querySelector('#idValor').value = "";
}

// $btn.addEventListener('click', captValor, clearM);
$btn.addEventListener('click', (e)=> {
    captValor();
    clearM();
});