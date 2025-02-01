const products = [
    { id: 1, name: "Traditional Wear", image: "box1_image.jpg", category: "Traditional" },
    { id: 2, name: "Health & Body Care", image: "box2_image.jpg", category: "Health" },
    { id: 3, name: "Furnitures", image: "box3_image.jpg", category: "Furniture" },
    { id: 4, name: "Electronics", image: "box4_image.jpg", category: "Electronics" },
    { id: 5, name: "Beauty Picks", image: "box5_image.jpg", category: "Beauty" },
    { id: 6, name: "Show Pet Supplies", image: "box6_image.jpg", category: "Pets" },
    { id: 7, name: "New Arrivals in Toys", image: "box7_image.jpg", category: "Toys" },
    { id: 8, name: "Spring Fashion Trends", image: "box8_image.jpg", category: "Fashion" },
];

let cart = [];

function displayProducts() {
    const productContainer = document.querySelector('.shop-section');
    productContainer.innerHTML = '';

    products.forEach(product => {
        const productBox = document.createElement('div');
        productBox.className = 'box';
        productBox.innerHTML = `
            <div class="box-contents">
                <h2>${product.name}</h2>
                <div class="box-img" style="background-image: url('${product.image}');"></div>
                <button onclick="addToCart(${product.id})">Add to Cart</button>
                <a href="#">See more</a>
            </div>
        `;
        productContainer.appendChild(productBox);
    });
}

function filterProducts() {
    const searchInput = document.querySelector('.search-input').value.toLowerCase();
    const categorySelect = document.querySelector('.search-select').value;
    const filteredProducts = products.filter(product => {
        const matchesSearch = product.name.toLowerCase().includes(searchInput);
        const matchesCategory = categorySelect === "All" || product.category === categorySelect;
        return matchesSearch && matchesCategory;
    });
    displayFilteredProducts(filteredProducts);
}

function displayFilteredProducts(filteredProducts) {
    const productContainer = document.querySelector('.shop-section');
    productContainer.innerHTML = '';

    filteredProducts.forEach(product => {
        const productBox = document.createElement('div');
        productBox.className = 'box';
        productBox.innerHTML = `
            <div class="box-contents">
                <h2>${product.name}</h2>
                <div class="box-img" style="background-image: url('${product.image}');"></div>
                <button onclick="addToCart(${product.id})">Add to Cart</button>
                <a href="#">See more</a>
            </div>
        `;
        productContainer.appendChild(productBox);
    });
}

function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    cart.push(product);
    alert(`${product.name} has been added to your cart.`);
    displayCart();
}

function displayCart() {
    const cartContainer = document.querySelector('.cart-contents');
    cartContainer.innerHTML = '';

    cart.forEach((item, index) => {
        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';
        cartItem.innerHTML = `
            <h3>${item.name}</h3>
            <button onclick="removeFromCart(${index})">Remove</button>
        `;
        cartContainer.appendChild(cartItem);
    });
}

function removeFromCart(index) {
    cart.splice(index, 1);
    displayCart();
}

document.querySelector('.search-input').addEventListener('input', filterProducts);
document.querySelector('.search-select').addEventListener('change', filterProducts);

displayProducts();
