let products = [];

let cart = JSON.parse(localStorage.getItem("cart")) || [];

// ===============================
// 1. LOAD PRODUCTS FROM API
// ===============================

async function loadProducts() {

    const response = await fetch(
        "https://fakestoreapi.com/products"
    );

    products = await response.json();

    displayProducts(products);
}


// ===============================
// 2. DISPLAY PRODUCTS
// ===============================

function displayProducts(productList) {

    const container =
        document.getElementById("productContainer");

    container.innerHTML = "";

    productList.forEach(product => {

        container.innerHTML += `
            <div class="product">

                <img src="${product.image}">

                <h3>${product.title}</h3>

                <p>₹${product.price}</p>

                <button onclick="addToCart(${product.id})">
                    Add to Cart
                </button>

            </div>
        `;
    });
}


// ===============================
// 3. SEARCH PRODUCTS
// ===============================

document.getElementById("searchBox")
    .addEventListener("input", function() {

        const keyword = this.value.toLowerCase();

        const filteredProducts = products.filter(product =>
            product.title.toLowerCase().includes(keyword)
        );

        displayProducts(filteredProducts);
    });


// ===============================
// 4. ADD TO CART
// ===============================

function addToCart(productId) {

    const product = products.find(
        p => p.id === productId
    );

    cart.push(product);

    localStorage.setItem(
        "cart",
        JSON.stringify(cart)
    );

    displayCart();
}


// ===============================
// 5. DISPLAY CART
// ===============================

function displayCart() {

    const container =
        document.getElementById("cartContainer");

    container.innerHTML = "";

    let total = 0;

    cart.forEach((product, index) => {

        total += product.price;

        container.innerHTML += `
            <p>
                ${product.title}
                - ₹${product.price}

                <button onclick="removeFromCart(${index})">
                    Remove
                </button>
            </p>
        `;
    });

    document.getElementById("cartTotal")
        .innerText = total.toFixed(2);
}


// ===============================
// 6. REMOVE FROM CART
// ===============================

function removeFromCart(index) {

    cart.splice(index, 1);

    localStorage.setItem(
        "cart",
        JSON.stringify(cart)
    );

    displayCart();
}


// ===============================
// 7. PLACE ORDER
// ===============================

function placeOrder() {

    if (cart.length === 0) {

        alert("Cart is empty!");

        return;
    }

    document.getElementById("orderContainer").innerHTML = `
        <div class="product">

            <h3>Order #1001</h3>

            <p>Order Placed..</p>
            <p> Packed…</p>
            <p> Shipped..</p>
            <p> Out for Delivery..</p>

        </div>
    `;

    cart = [];

    localStorage.removeItem("cart");

    displayCart();

    alert("Order placed successfully!");
}


// ===============================
// 8. INITIALIZE APPLICATION
// ===============================

loadProducts();

displayCart();