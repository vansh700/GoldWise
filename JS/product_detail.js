document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = parseInt(urlParams.get('id'));
    
    const description = decodeURIComponent(params.get('description'));
    document.querySelector('.add-to-cart').addEventListener('click', function() {
        const user = JSON.parse(localStorage.getItem('user'));
        if (!user) {
            window.location.href = 'login.html';
        } else {
            this.classList.add('added');
            setTimeout(() => {
                this.classList.remove('added');
            }, 1000);
            addToCart(product);
        }
    });
    // Update DOM elements
    document.getElementById('productDescription').textContent = description;
    
    const products = JSON.parse(localStorage.getItem('products')) || [];
    const product = products.find(p => p.id === productId);

    const container = document.getElementById('product-container');
    // In product_detail.js
    if (product) {
        // Update all fields
        document.getElementById('product-name').textContent = product.name;
        document.getElementById('product-price').textContent = `₹${product.price}`;
        document.getElementById('product-description').textContent = product.description;
        document.getElementById('product-img').src = product.image;
        
        // Metal Details
        document.getElementById('karatage').textContent = product.karatage;
        document.getElementById('metalType').textContent = product.metalType;
        document.getElementById('metalColor').textContent = product.metalColor;
        document.getElementById('grossWeight').textContent = product.grossWeight;
        
        // Product Specifications
        document.getElementById('weight').textContent = product.weight;
        document.getElementById('clarity').textContent = product.clarity;
        document.getElementById('productColor').textContent = product.productColor;
        
        // General Details
        document.getElementById('brand').textContent = product.brand;
        document.getElementById('collection').textContent = product.collection;
        document.getElementById('productCode').textContent = product.productCode;
    } else {
        document.querySelector('.product-container').innerHTML = '<p>Product not found!</p>';
    }
    // Add these lines in the product display logic
document.getElementById('brand').textContent = product.brand;
document.getElementById('collection').textContent = product.collection;
document.getElementById('productCode').textContent = product.productCode;

// Fix material color display (if needed)
document.getElementById('materialColor').textContent = product.metalColor; 
});
