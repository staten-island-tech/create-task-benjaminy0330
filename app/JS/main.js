import "../CSS/style.css"
import { groceries } from "./groceries";
////
const cardlocation = document.getElementById("cards");
let totalPrice = 0;

// Function to update the cart and total price
function updateCart(itemName, itemPrice) {
  const cart = document.getElementById("cart");

  // Add the item to the cart
  const cartItem = document.createElement("div");
  cartItem.classList.add("cart-item");
  cartItem.innerHTML = `
    <li>${itemName}</li>
    <p>Price: $${itemPrice.toFixed(2)}</p>
  `;
  cart.appendChild(cartItem);

  // Update the total price
  totalPrice += itemPrice;
  document.getElementById("total").innerHTML = `<h2>Total: $${totalPrice.toFixed(2)}</h2>`;
}

// Function to add event listeners to "Add to bag" buttons
function attachAddToCartListeners() {
  const addButtons = document.querySelectorAll(".add");

  addButtons.forEach((button, index) => {
    button.addEventListener("click", () => {
      const item = groceries[index]; // Get the grocery item
      updateCart(item.name, item.price);
    });
  });
}

// Call attachAddToCartListeners after rendering the items
groceries.forEach((grocery) => {
  const html = `
    <div class = "card">
        <h2 class ="name">${grocery.name}</h2>
        <h2 class = "origin">${grocery.type}</h2>
        <h2>${grocery.price}</h2>
        <button class = "add">Add to bag</button>
    </div>
  `;
  cardlocation.insertAdjacentHTML("beforeend", html);
});



document.querySelector(".all").addEventListener("click", function(){
    document.querySelector(".cards").innerHTML = "";
    
    groceries.forEach((grocery) => {
        const html = `
        <div class = "card">
            <h2 class ="name">${grocery.name}</h2>
            <h2 class = "origin">${grocery.type}</h2>
            <h2>${grocery.price}</h2>
            <button class = "add">Add to bag</button>
        </div>
        `;
        
        cardlocation.insertAdjacentHTML("beforeend", html)
        
})
})


document.querySelector(".Beverage").addEventListener("click", function(){
    document.querySelector(".cards").innerHTML ="";
    const beverage = groceries.filter(grocery => grocery.type.includes("Beverage"));

    beverage.forEach((grocery) => {
        const html = `
        <div class = "card">
            <h2 class ="name">${grocery.name}</h2>
            <h2 class = "origin">${grocery.type}</h2>
            <h2>${grocery.price}</h2>
            <button class = "add">Add to bag</button>
        </div>
        `;
        
        cardlocation.insertAdjacentHTML("beforeend", html)
        
})
})

document.querySelector(".Dairy").addEventListener("click", function(){
    document.querySelector(".cards").innerHTML ="";
    const dairy = groceries.filter(grocery => grocery.type.includes("Dairy"));
    

    dairy.forEach((grocery) => {
        const html = `
        <div class = "card">
            <h2 class ="name">${grocery.name}</h2>
            <h2 class = "origin">${grocery.type}</h2>
            <h2>${grocery.price}</h2>
            <button class = "add">Add to bag</button>
        </div>
        `;
        
        cardlocation.insertAdjacentHTML("beforeend", html)
        
})
})

document.querySelector(".Grain").addEventListener("click", function(){
    document.querySelector(".cards").innerHTML ="";
    const grain = groceries.filter(grocery => grocery.type.includes("Grain"));
    

    grain.forEach((grocery) => {
        const html = `
        <div class = "card">
            <h2 class ="name">${grocery.name}</h2>
            <h2 class = "origin">${grocery.type}</h2>
            <h2>${grocery.price}</h2>
            <button class = "add">Add to bag</button>
        </div>
        `;
        
        cardlocation.insertAdjacentHTML("beforeend", html)
        
})
})

document.querySelector(".Pantry").addEventListener("click", function(){
    document.querySelector(".cards").innerHTML ="";
    const pantry = groceries.filter(grocery => grocery.type.includes("Pantry"));
    
    pantry.forEach((grocery) => {
        const html = `
        <div class = "card">
            <h2 class ="name">${grocery.name}</h2>
            <h2 class = "origin">${grocery.type}</h2>
            <h2>${grocery.price}</h2>
            <button class = "add">Add to bag</button>
        </div>
        `;
        
        cardlocation.insertAdjacentHTML("beforeend", html)
        
})
})

document.querySelector(".Produce").addEventListener("click", function(){
    document.querySelector(".cards").innerHTML ="";
    const produce = groceries.filter(grocery => grocery.type.includes("Produce"));
    
    produce.forEach((grocery) => {
        const html = `
        <div class = "card">
            <h2 class ="name">${grocery.name}</h2>
            <h2 class = "origin">${grocery.type}</h2>
            <h2>${grocery.price}</h2>
            <button class = "add">Add to bag</button>
        </div>
        `;
        
        cardlocation.insertAdjacentHTML("beforeend", html)
        
})
})


document.querySelector(".Protein").addEventListener("click", function(){
    document.querySelector(".cards").innerHTML ="";
    const protein = groceries.filter(grocery => grocery.type.includes("Protein"));
    
    protein.forEach((grocery) => {
        const html = `
        <div class = "card">
            <h2 class ="name">${grocery.name}</h2>
            <h2 class = "origin">${grocery.type}</h2>
            <h2>${grocery.price}</h2>
            <button class = "add">Add to bag</button>
        </div>
        `;
        
        cardlocation.insertAdjacentHTML("beforeend", html)
        
})
})

attachAddToCartListeners();