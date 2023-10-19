// Sample product data
const products = [
    {
        "id": 1,
        "name": "Amber Crest",
        "price": 139.99,
        "image": "https://megnasaloni.github.io/the-altelier/images/AmberCrest.jfif"
    },
    {
        "id": 2,
        "name": "Auburn Heat",
        "price": 150.33,
        "image": "https://megnasaloni.github.io/the-altelier/images/AuburnHeat.jfif"
    },
    {
        "id": 3,
        "name": "Aurora Reigns",
        "price": 170.45,
        "image": "https://megnasaloni.github.io/the-altelier/images/AuroraReigns.jfif"
    },
    {
        "id": 4,
        "name": "Azure Mist",
        "price": 113.67,
        "image": "https://megnasaloni.github.io/the-altelier/images/AzureMist.jfif"
    },
    {
        "id": 5,
        "name": "E Gloria",
        "price": 200.99,
        "image": "https://megnasaloni.github.io/the-altelier/images/E-Gloria.jfif"
    },
    {
        "id": 6,
        "name": "Elixir Jade",
        "price": 145.66,
        "image": "https://megnasaloni.github.io/the-altelier/images/ElixirJade.jfif"
    },
    {
        "id": 7,
        "name": "Enigma",
        "price": 145.89,
        "image": "https://megnasaloni.github.io/the-altelier/images/Enigma.jfif"
    },
    {
        "id": 8,
        "name": "Eve's Mistake",
        "price": 249.99,
        "image": "https://megnasaloni.github.io/the-altelier/images/Eve's_Mistake.jfif"
    },
    {
        "id": 9,
        "name": "Fantasy Lust",
        "price": 118.90,
        "image": "https://megnasaloni.github.io/the-altelier/images/FantasyLust.jfif"
    },
    {
        "id": 10,
        "name": "Florissima",
        "price": 135.79,
        "image": "https://megnasaloni.github.io/the-altelier/images/Florissima.jfif"
    },
    {
        "id": 11,
        "name": "Inhale",
        "price": 175.80,
        "image": "https://megnasaloni.github.io/the-altelier/images/Inhale.jfif"
    },
    {
        "id": 12,
        "name": "Juliet's Curse",
        "price": 213.99,
        "image": "https://megnasaloni.github.io/the-altelier/images/Juliet's_Curse.jfif"
    },
    {
        "id": 13,
        "name": "Lilith's Tempt",
        "price": 190.89,
        "image": "https://megnasaloni.github.io/the-altelier/images/Lilith's_Tempt.jfif"
    },
    {
        "id": 14,
        "name": "Poison",
        "price": 200.45,
        "image": "https://megnasaloni.github.io/the-altelier/images/Poison.jfif"
    },
    {
        "id": 15,
        "name": "Sapphire Lane",
        "price": 275.99,
        "image": "https://megnasaloni.github.io/the-altelier/images/SapphireLane.jfif"
    },
    {
        "id": 16,
        "name": "Summer Shine",
        "price": 290.67,
        "image": "https://megnasaloni.github.io/the-altelier/images/SummerShine.jfif"
    },
    {
        "id": 17,
        "name": "The Pacifist",
        "price": 150.67,
        "image": "https://megnasaloni.github.io/the-altelier/images/ThePacifist.jfif"
    },
    {
        "id": 18,
        "name": "The Tempest",
        "price": 300.99,
        "image": "https://megnasaloni.github.io/the-altelier/images/TheTempest.jfif"
    }
];

const productContainer = document.getElementById('product-list');
const cartContainer = document.getElementById('cart-items');
const cartTotalDisplay = document.getElementById('cart-total');
const cartTotalDisplayHeader = document.getElementById('cart-total-header');

// Initialize a cart object to track added products
const cart = {};

// Function to create a cart item element with quantity controls and individual total
function createCartItemElement(productId, productName, productPrice, quantity, productImage) {
    const cartItem = document.createElement('div');

    cartItem.innerHTML =

        `
    <li class="sm:flex py-3">
                        <div class="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200 mb-3 sm:mb-0">
                            <img src="${productImage}"
                                alt="Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt."
                                class="h-full w-full object-cover object-center">
                        </div>

                        <div class="sm:ml-4 flex flex-1 flex-col">
                            <div>
                                <div class="flex justify-between text-base font-medium text-gray-900">
                                    <h3>
                                        <a href="#">${productName}</a>
                                    </h3>
                                    <p class="ml-4 item-total">$${(quantity * productPrice).toFixed(2)}</p>
                                </div>
                                <p class="mt-1 text-sm text-gray-500">$${productPrice}</p>
                            </div>
                            <div class="mt-4 sm:mt-0 flex flex-1 items-end justify-between">
                                <div class="flex justify-start item-center ">
                                    <button class="decrement bg-gray-400 px-2 text-base rounded-l" data-product-id="${productId}">-</button>
                                    <span class="quantity-display bg-gray-200 px-3 py-0.5 text-base">${quantity}</span>
                                    <button class="increment bg-gray-400 px-2 text-base rounded-r" data-product-id="${productId}">+</button>
                                </div>

                                <div class="flex">
                                    <button type="button"
                                        class="font-medium text-black hover:text-gray-600 remove-from-cart" data-product-id="${productId}">Remove</button>
                                </div>
                            </div>
                        </div>
                    </li>

                    `

    const incrementButton = cartItem.querySelector('.increment');
    const decrementButton = cartItem.querySelector('.decrement');
    const removeButton = cartItem.querySelector('.remove-from-cart');

    incrementButton.addEventListener('click', () => {
        cart[productId].quantity += 1;
        updateCart();
    });

    decrementButton.addEventListener('click', () => {
        if (cart[productId].quantity > 1) {
            cart[productId].quantity -= 1;
        } else {
            // Remove the product from the cart if the quantity becomes 0
            delete cart[productId];
        }
        updateCart();
    });

    removeButton.addEventListener('click', () => {
        delete cart[productId];
        updateCart();
    });

    return cartItem;
}

// Function to calculate and display the cart's total cost
function calculateCartTotal() {
    let total = 0;
    for (const productId in cart) {
        const product = cart[productId];
        total += product.quantity * product.price;
    }
    return total.toFixed(2);
}

// Display products
products.forEach((product) => {
    const productItem = document.createElement('div');
    productItem.innerHTML =
        `
            <div class="group relative bg-white shadow rounded-md">
        <div
            class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 h-60">
            <img src="${product.image}" alt="${product.name}"
                class="h-full w-full object-cover object-center lg:h-full lg:w-full">
        </div>
        <div class="px-5 py-3 flex flex-col item-center gap-2">
            <h3 class="text-xl font-semibold text-center">
            ${product.name}
            </h3>
            <p class="text-base text-center font-medium text-gray-900">$${product.price}</p>
            <button class="px-4 py-1.5 bg-black text-white rounded-md add-to-cart" data-product-id="${product.id}">Add
                to Cart</button>
        </div>
    </div> `
        ;

    productContainer.appendChild(productItem);

    const addToCartButton = productItem.querySelector('.add-to-cart');
    const productId = product.id;

    addToCartButton.addEventListener('click', () => {
        const quantity = 1;

        if (cart[productId]) {
            cart[productId].quantity += 1;
        } else {
            cart[productId] = {
                name: product.name,
                price: product.price,
                image: product.image,
                quantity: quantity,
            };
        }

        updateCart();
    });

});

// Function to update the cart display and calculate the cart's total
function updateCart() {
    cartContainer.innerHTML = '';
    let total = 0;

    for (const productId in cart) {
        const product = cart[productId];
        const cartItem = createCartItemElement(productId, product.name, product.price, product.quantity, product.image);
        cartContainer.appendChild(cartItem);
        total += product.quantity * product.price;
    }

    cartTotalDisplay.textContent = `$${total.toFixed(2)} `;
    cartTotalDisplayHeader.textContent = `$${total.toFixed(2)} `;
}

// Initial update of the cart
updateCart();

