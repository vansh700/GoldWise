// singleProduct.js
document.addEventListener('DOMContentLoaded', () => {
    class ProductController {
        constructor() {
            this.product = null;
            this.currentImageIndex = 0;
            this.init();
        }

        async init() {
            await this.loadProduct();
            this.setupEventListeners();
            this.render();
        }

        async loadProduct() {
            try {
                const params = new URLSearchParams(window.location.search);
                const productId = params.get('id');
                
                // Load from localStorage
                const products = JSON.parse(localStorage.getItem('products')) || [];
                this.product = products.find(p => p.id === productId);

                if (!this.product) {
                    // Fallback to URL parameters
                    this.product = {
                        id: productId || Date.now().toString(),
                        name: params.get('name'),
                        price: params.get('price'),
                        type: params.get('type'),
                        category: params.get('category'),
                        images: [params.get('img') || 'default.png'],
                        metal: {
                            karat: params.get('karat') || 22,
                            type: params.get('metalType') || 'Gold',
                            weight: params.get('grossWeight') || 5.5
                        },
                        weight: params.get('weight') || 10,
                        clarity: params.get('clarity') || 'VVS1',
                        description: params.get('description') || 'Premium jewelry item',
                        brand: params.get('brand') || 'GoldWise',
                        collection: params.get('collection') || 'Classic',
                        productCode: params.get('productCode') || `CODE-${Date.now()}`,
                        updatedAt: new Date().toISOString()
                    };
                }
            } catch (error) {
                console.error('Error loading product:', error);
                this.showError('Failed to load product details');
            }
        }

        render() {
            if (!this.product) return;

            // Update basic info
            this.updateElement('#productTitle', this.product.name);
            this.updateElement('#priceBadge', this.formatPrice(this.product.price));
            this.updateElement('#cartPrice', this.formatPrice(this.product.price));
            
            // Metal details
            this.updateElement('#metalKarat', `${this.product.metal.karat}K`);
            this.updateElement('#metalType', this.product.metal.type);
            this.updateElement('#grossWeight', `${this.product.metal.weight}g`);

            // Product details
            this.updateElement('#productType', this.product.type);
            this.updateElement('#productWeight', `${this.product.weight}g`);
            this.updateElement('#productClarity', this.product.clarity);

            // General details
            this.updateElement('#brand', this.product.brand);
            this.updateElement('#collection', this.product.collection);
            this.updateElement('#productCode', this.product.productCode);

            // Description
            this.updateElement('#productDescription', this.product.description);
            this.updateElement('#updateDate', `Last updated: ${this.formatDate(this.product.updatedAt)}`);

            // Images
            this.updateImages();
        }

        updateImages() {
            const mainImg = document.querySelector('#productMainImage');
            const thumbnails = document.querySelector('#imageThumbnails');
            
            if (this.product.images?.length) {
                mainImg.src = this.product.images[0];
                thumbnails.innerHTML = this.product.images.map(img => `
                    <img src="${img}" 
                         alt="Thumbnail" 
                         class="${img === this.product.images[0] ? 'active' : ''}"
                         onclick="changeImage('${img}')">
                `).join('');
            }
        }

        formatPrice(price) {
            return new Intl.NumberFormat('en-IN', {
                style: 'currency',
                currency: 'INR',
                minimumFractionDigits: 0
            }).format(price || 0);
        }

        formatDate(dateString) {
            const options = { year: 'numeric', month: 'long', day: 'numeric' };
            return new Date(dateString).toLocaleDateString('en-IN', options);
        }

        updateElement(selector, content) {
            const element = document.querySelector(selector);
            if (element) element.textContent = content;
        }

        setupEventListeners() {
            // Image navigation
            document.querySelectorAll('.image-thumbnails img').forEach(img => {
                img.addEventListener('click', (e) => {
                    document.querySelector('#productMainImage').src = e.target.src;
                    document.querySelectorAll('.image-thumbnails img').forEach(t => t.classList.remove('active'));
                    e.target.classList.add('active');
                });
            });
        }

        showError(message) {
            const errorContainer = document.createElement('div');
            errorContainer.className = 'error-message';
            errorContainer.textContent = message;
            document.body.prepend(errorContainer);
            setTimeout(() => errorContainer.remove(), 3000);
        }
    }

    // Initialize controller
    new ProductController();
});

// Toggle functionality
function toggleDetails(element) {
    const content = element.nextElementSibling;
    const icon = element.querySelector('.fa-chevron-down');
    content.style.display = content.style.display === 'none' ? 'block' : 'none';
    icon.classList.toggle('fa-chevron-up');
}

// Add to Cart functionality
function addToCart() {
    const params = new URLSearchParams(window.location.search);
    const productId = params.get('id');
    const products = JSON.parse(localStorage.getItem('products')) || [];
    const product = products.find(p => p.id === productId);

    if (product) {
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        const existing = cart.find(item => item.id === product.id);
        
        if (existing) {
            existing.quantity++;
        } else {
            cart.push({ ...product, quantity: 1 });
        }
        
        localStorage.setItem('cart', JSON.stringify(cart));
        alert(`${product.name} added to cart!`);
    }
}

// Image change handler
function changeImage(src) {
    document.querySelector('#productMainImage').src = src;
    document.querySelectorAll('.image-thumbnails img').forEach(img => {
        img.classList.toggle('active', img.src === src);
    });
}