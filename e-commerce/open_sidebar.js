document.addEventListener("DOMContentLoaded", () => {
    // Selecciona los botones
    const openCartBtn = document.getElementById("open-cart-btn");
    const closeCartBtn = document.getElementById("close-cart-btn");
  
    // Selecciona el sidebar
    const cartSidebar = document.getElementById("cart-sidebar");
  
    // Evento para abrir el sidebar
    openCartBtn.addEventListener("click", () => {
      cartSidebar.classList.add("open"); // Agrega la clase "open" para abrir el sidebar
    });
  
    // Evento para cerrar el sidebar
    closeCartBtn.addEventListener("click", () => {
      cartSidebar.classList.remove("open"); // Elimina la clase "open" para cerrar el sidebar
    });
  });
  