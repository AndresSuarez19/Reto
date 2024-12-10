// Selecciona los botones para agregar al carrito
const addToCartButtons = document.querySelectorAll(".add-to-cart");
// Selecciona la lista donde se agregarán los elementos del carrito
const cartItems = document.getElementById("cart-items");
// Selecciona el elemento donde se mostrará el total
const cartTotal = document.getElementById("cart-total");

let total = 0; // Total inicial

// Agrega un evento "click" a cada botón
addToCartButtons.forEach((button) => {
  button.addEventListener("click", () => {
    // Obtiene el contenedor padre de la tarjeta
    const card = button.parentElement;

    // Extrae el nombre del producto
    const productName = card.querySelector(".card-title").textContent;

    // Extrae el precio del producto y lo convierte en número
    const productPrice = parseInt(card.querySelector(".card-text").textContent);

    // Crea un nuevo elemento de lista para el producto
    const listItem = document.createElement("li");
    listItem.textContent = `${productName} - $${productPrice}`;
    cartItems.appendChild(listItem);

    // Actualiza el total
    total += productPrice;
    cartTotal.textContent = `$${total}`;

  });
});
