let cart = [];
let totalPrice = 0;

function addToCart(productName, price) {
    cart.push({ product: productName, price: price });
    totalPrice += price;
    displayCart();
}

function displayCart() {
    const cartItems = document.getElementById('cart-items');
    cartItems.innerHTML = '';
    
    cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.product} - $${item.price}`;
        cartItems.appendChild(li);
    });

    document.getElementById('total-price').textContent = totalPrice.toFixed(2);
}
