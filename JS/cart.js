// Function to convert price string to number by removing ₹ and commas
function convertPrice(price) {
    return parseFloat(price.replace(/[₹,]/g, ''));
}

// Load cart from local storage
function loadCart() {
    const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    const cartItemsContainer = document.getElementById('cart-items');
    const totalPriceEl = document.getElementById('total-price');
    const emptyCartMsg = document.getElementById('empty-cart-msg');
    const continueShoppingBtn = document.getElementById('continue-shopping');
    const checkoutBtn = document.getElementById('checkout');  // Checkout button

    cartItemsContainer.innerHTML = '';
    let totalPrice = 0;

    if (cartItems.length === 0) {
        // Show empty cart message and "Continue Shopping" button
        emptyCartMsg.style.display = 'block';
        continueShoppingBtn.style.display = 'inline-block';
        checkoutBtn.style.display = 'none';  // Hide checkout button when cart is empty
        totalPriceEl.textContent = '';
        return;
    }

    emptyCartMsg.style.display = 'none';
    continueShoppingBtn.style.display = 'none';
    checkoutBtn.style.display = 'inline-block';  // Show checkout button if cart is not empty

    // Populate cart items
        cartItems.forEach((item, index) => {
            const priceNumber = typeof item.price === 'number'
            ? item.price
            : convertPrice(item.price);
            // Convert price to number
        totalPrice += priceNumber;  // Ensure price is added correctly
        const productType =  convertPrice(item.type);
        console.log(item.type);
        let productImage = item.images?.[0] || 'Assets/Image/placeholder.jpg';

        const cartItemEl = document.createElement('div');
        cartItemEl.classList.add('cart-item');
        cartItemEl.innerHTML = `
            <img src="${productImage}" alt="${item.name}">
            <div class="cart-item-info">
                <p class="cart-item-title">${item.name}</p>
               <p class="cart-item-price">₹${priceNumber.toLocaleString()}</p>

            </div>
            <button class="remove-btn" onclick="removeFromCart(${index})">Remove</button>
        `;
        cartItemsContainer.appendChild(cartItemEl);
    });

    // Update total price
    totalPriceEl.textContent = `Total Price: ₹${totalPrice.toLocaleString()}`;
}

// Remove item from cart
function removeFromCart(index) {
    const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    cartItems.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(cartItems));
    loadCart();
}

// Redirect to home page
function redirectToHome() {
    window.location.href = 'Home.html';
}

// Redirect to checkout page
function redirectToCheckout() {
    window.location.href = 'checkout.html';
}

// Event listener for "Continue Shopping" button
document.getElementById('continue-shopping').addEventListener('click', redirectToHome);

// Event listener for "Checkout" button
document.getElementById('checkout').addEventListener('click', redirectToCheckout);

// Load cart on page load
document.addEventListener('DOMContentLoaded', loadCart);
