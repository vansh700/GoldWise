document.addEventListener('DOMContentLoaded', () => {
    let products = JSON.parse(localStorage.getItem('products')) || [];
    let productIdCounter = products.length > 0 ? 
        Math.max(...products.map(p => parseInt(p.id.match(/\d+/)?.[0] || 0))) + 1 : 1;

    renderProductTable();
    renderProducts();

    // Admin form submission
    document.getElementById('productForm')?.addEventListener('submit', (e) => {
        e.preventDefault();

        const newProduct = {
            id: `PROD-${productIdCounter++}`,
            name: document.getElementById('name').value,
            price: parseFloat(document.getElementById('price').value),
            type: document.getElementById('type').value,
            category: document.getElementById('category').value,
            images: [document.getElementById('image').value],
            metal: {
            karat: document.getElementById('karatage').value,
            type: document.getElementById('metalType').value,
            weight: parseFloat(document.getElementById('grossWeight').value)
            },
            weight: parseFloat(document.getElementById('weight').value),
            clarity: document.getElementById('clarity').value,
            description: document.getElementById('description').value,
            brand: document.getElementById('brand').value,
            collection: document.getElementById('collection').value,
            productCode: document.getElementById('productCode').value,
            updatedAt: new Date().toISOString()
  };

  const products = JSON.parse(localStorage.getItem('products')) || [];
  products.push(newProduct);
  localStorage.setItem('products', JSON.stringify(products));
  const event = new Event('storage');
window.dispatchEvent(event);
 
window.location.href = `Home.html`;

        alert("Product Added Successfully!");
        e.target.reset();
        renderProductTable();
        renderProducts();
    });

    function renderProductTable() {
        const tbody = document.getElementById('productTable');
        if (!tbody) return;
        tbody.innerHTML = products.map(product => `
            <tr>
                <td>${product.name}</td>
                <td>₹${product.price.toFixed(2)}</td>
                <td><img src="${product.image}" alt="${product.name}" style="max-width: 100px;"></td>
                <td>
                    <button class="edit-btn" data-id="${product.id}">Edit</button>
                    <button class="delete-btn" data-id="${product.id}">Delete</button>
                </td>
            </tr>
        `).join('');

        document.querySelectorAll('.delete-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const id = e.target.dataset.id;
                products = products.filter(p => p.id !== id);
                localStorage.setItem('products', JSON.stringify(products));
                renderProductTable();
                renderProducts();
            });
        });

        document.querySelectorAll('.edit-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const id = e.target.dataset.id;
                const product = products.find(p => p.id === id);
                populateFormForEdit(product);
            });
        });
    }

    function populateFormForEdit(product) {
        editingProductId = product.id;
        const form = document.getElementById('productForm');
        Object.keys(product).forEach(key => {
            if (form.elements[key]) {
                form.elements[key].value = product[key];
            }
        });
        document.getElementById('name').value = product.name;
        document.getElementById('price').value = product.price;
        document.getElementById('image').value = product.image;
        document.getElementById('category').value = product.category;
        document.getElementById('type').value = product.type;
        document.getElementById('weight').value = product.weight;
        document.getElementById('grossWeight').value = product.grossWeight;
        document.getElementById('metalType').value = product.metalType;
        document.getElementById('metalColor').value = product.metalColor;
        document.getElementById('productCode').value = product.productCode;
        document.getElementById('description').value = product.description;
        document.getElementById('brand').value = product.brand;
        document.getElementById('collection').value = product.collection;
        document.getElementById('karatage').value = product.karatage;
        document.getElementById('clarity').value = product.clarity;
    }

    function renderProducts() {
        const productGrid = document.getElementById('product-card-id');
        const template = document.querySelector('.product-card-template .product-card');
        if (!productGrid || !template) return;

        productGrid.innerHTML = '';

        products.forEach((product, index) => {
            const newProduct = template.cloneNode(true);
            newProduct.querySelector('.product-image img').src = product.image;
            newProduct.querySelector('.product-image img').alt = product.name;
            newProduct.querySelector('.product-name').textContent = product.name;
            newProduct.querySelector('.product-price').textContent = "₹" + product.price;

            newProduct.querySelector('.view-button').addEventListener('click', () => {
                window.location.href = `singleProduct.html?product=${product.category}&name=${product.name}&price=${product.price}&img=${product.image}`;
            });

            newProduct.querySelector('.add-to-cart').addEventListener('click', () => {
                const user = JSON.parse(localStorage.getItem('user'));
                if (!user) {
                    window.location.href = 'login.html';
                } else {
                    addToCart(product);
                }
            });

            newProduct.querySelector('.delete-button').addEventListener('click', () => {
                if (confirm("Are you sure you want to delete this product?")) {
                    products.splice(index, 1);
                    localStorage.setItem('products', JSON.stringify(products));
                    renderProducts();
                    renderProductTable();
                }
            });

            productGrid.appendChild(newProduct);
        });
    }
});
