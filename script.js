
    const cart = {};
    const cartBody = document.getElementById("cart-body");
    const totalPrice = document.getElementById("total-price");

    function updateCart() {
  cartBody.innerHTML = '';
  let total = 0;
  for (const item in cart) {
    const { qty, price } = cart[item];
    const row = `
      <tr>
        <td>${item}</td>
        <td>${qty}</td>
        <td>₹${(price * qty).toFixed(2)}</td>
      </tr>`;
    total += price * qty;
    cartBody.insertAdjacentHTML('beforeend', row);
  }
  totalPrice.textContent = `₹${total.toFixed(2)}`;
}


    document.querySelectorAll("#service-item").forEach(service => {
      const name = service.dataset.name;
      const price = parseInt(service.dataset.price);

      service.querySelector('#add1').addEventListener('click', () => {
        if (!cart[name]) cart[name] = { qty: 0, price };
        cart[name].qty++;
        updateCart();
      });

      service.querySelector('#remove').addEventListener('click', () => {
        if (cart[name]) {
          cart[name].qty--;
          if (cart[name].qty <= 0) delete cart[name];
          updateCart();
        }
      });
    });
  