import "../CSS/style.css"
import { groceries } from "./groceries";

const cardlocation = document.getElementById("cards");
let totalPrice = 0;

function updateCart(itemName, itemPrice) {
  const cart = document.getElementById("cart");

  
  const cartItem = document.createElement("div");
  cartItem.classList.add("cart-item");
  cartItem.innerHTML = `
    <p>${itemName}</p>
    <p>Price: $${itemPrice.toFixed(2)}</p>
  `;
  cart.appendChild(cartItem);

  
  totalPrice += itemPrice;
  document.getElementById("total").innerHTML = `<h2>Total: $${totalPrice.toFixed(2)}</h2>`;
}


function attachAddToCartListeners(filteredGroceries) {
    const addButtons = document.querySelectorAll(".add");
  
    addButtons.forEach((button, index) => {
      button.addEventListener("click", () => {
        const item = filteredGroceries[index]; 
        updateCart(item.name, item.price);
      });
    });
}
  



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
attachAddToCartListeners(groceries);


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


document.querySelector(".Beverage").addEventListener("click", function () {
    document.querySelector(".cards").innerHTML = ""; 
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
      cardlocation.insertAdjacentHTML("beforeend", html);
    });
  
    attachAddToCartListeners(beverage); 
  });
  

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
    });
    attachAddToCartListeners(dairy);
    });

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
attachAddToCartListeners(grain);
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
attachAddToCartListeners(pantry);
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
attachAddToCartListeners(produce);
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
attachAddToCartListeners(protein);
})

