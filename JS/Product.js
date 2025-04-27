// JS/Product.js

// 0. Remove the template node so we can clone it later
const existingProduct = document.getElementById("product");
if (existingProduct) existingProduct.remove();

// 1. Render all products from localStorage
function refreshProducts() {
  const container = document.getElementById('product-card-id');
  container.innerHTML = '';

  const products = JSON.parse(localStorage.getItem('products')) || [];
  products.forEach((product, index) => {
    renderProduct(product, index, container);
  });
}

// 2. Show/hide cards based on filters
function filterProducts() {
  const category = document.getElementById('categoryFilter')?.value || 'all';
  // if you have a typeFilter, leave this; otherwise omit the next two lines
  const type     = document.getElementById('typeFilter')?.value    || 'all';

  document.querySelectorAll('.product-card').forEach(card => {
    const showCategory = category === 'all' || card.dataset.category === category;
    const showType     = type     === 'all' || card.dataset.type     === type;
    card.style.display = (showCategory && showType) ? 'block' : 'none';
  });
}

// 3. Build each product card
function renderProduct(product, index, container) {
  const card = document.createElement('div');
  card.className = 'product-card';
  card.dataset.category = product.category;
  card.dataset.type     = product.type;

  card.innerHTML = `
    <div class="product-image">
     <img src="${product.images[0] || '/images/default.jpg'}" alt="${product.name}" class="product-image">

    </div>
    <div class="product-details">
      <h2 class="product-name">${product.name}</h2>
      <p class="product-price">${formatPrice(product.price)}</p>
      <div class="product-actions">
        <button id="viewId-${index}" class="view-button">View Product</button>
        <button id="cartId-${index}" class="add-to-cart">
          <i class="fa fa-shopping-cart"></i>
        </button>
      </div>
    </div>
  `;

  // View button
  card.querySelector(`#viewId-${index}`).addEventListener('click', () => {
    window.location.href = `singleproduct.html?id=${product.id}`;
  });

  // Add to cart button
  card.querySelector(`#cartId-${index}`).addEventListener('click', () => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (!user) return window.location.href = 'login.html';

    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const existing = cart.find(item => item.id === product.id);
    if (existing) existing.quantity++;
    else cart.push({ ...product, quantity: 1 });

    localStorage.setItem('cart', JSON.stringify(cart));
    alert(`${product.name} added to cart!`);
  });

  container.appendChild(card);
}

// 4. Price formatter helper
function formatPrice(price) {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    minimumFractionDigits: 0
  }).format(price);
}

// 5. Map URL param → dropdown value → run filter
function applyPageFilter() {
  const raw = new URLSearchParams(window.location.search).get('page') || 'all';
  const map = {
    allProduct:      'all',
    goldProduct:     'gold',
    platinumProduct: 'platinum',
    diamondProduct:  'diamond',
    goldOther:       'gold',
    platinumOther:   'platinum',
    diamondOther:    'diamond',
    earRings:        'earrings',
    ring:            'rings',
    bangle:          'bangles'
  };
  const page = (map[raw] || raw).toLowerCase();

  const catEl = document.getElementById('categoryFilter');
  if (!catEl) return;

  const valid = Array.from(catEl.options).some(o => o.value === page);
  catEl.value = valid ? page : 'all';

  filterProducts();
}

// 6. Single init: render, apply URL filter, then wire manual dropdown
document.addEventListener('DOMContentLoaded', () => {
  refreshProducts();
  applyPageFilter();

  // update on storage events (if admin adds/modifies products)
  window.addEventListener('storage', () => {
    refreshProducts();
    applyPageFilter();
  });

  // manual dropdown filter
  document
    .getElementById('categoryFilter')
    ?.addEventListener('change', filterProducts);

  // if you have a typeFilter dropdown:
  // document.getElementById('typeFilter')
  //   ?.addEventListener('change', filterProducts);
});
