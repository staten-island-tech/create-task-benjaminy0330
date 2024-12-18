import "../CSS/style.css"
import { groceries } from "./groceries";
//import {groceries} from "./products.js"

const cardlocation = document.getElementById("cards");
//default
groceries.forEach((grocery) => {
        const html = `
        <div class = "card">
            <h2 class ="name">${grocery.name}</h2>
            <h2 class = "origin">${grocery.type}</h2>
            <h2>${grocery.price}</h2>
            <button>Add to bag</button>
        </div>
        `;
        cardlocation.insertAdjacentHTML("beforeend", html)
})


document.querySelector(".all").addEventListener("click", function(){
    document.querySelector(".cards").innerHTML = "";
    
    groceries.forEach((grocery) => {
        const html = `
        <div class = "card">
            <h2 class ="name">${grocery.name}</h2>
            <h2 class = "origin">${grocery.type}</h2>
            <h2>${grocery.price}</h2>
            <button>Add to bag</button>
        </div>
        `;
        
        cardlocation.insertAdjacentHTML("beforeend", html)
        
})
})

//beverage
document.querySelector(".Beverage").addEventListener("click", function(){
    document.querySelector(".cards").innerHTML ="";
    const beverage = groceries.filter(grocery => grocery.type.includes("Beverage"));

    beverage.forEach((grocery) => {
        const html = `
        <div class = "card">
            <h2 class ="name">${grocery.name}</h2>
            <h2 class = "origin">${grocery.type}</h2>
            <h2>${grocery.price}</h2>
            <button>Add to bag</button>
        </div>
        `;
        
        cardlocation.insertAdjacentHTML("beforeend", html)
        
})
})
//dairy
document.querySelector(".Dairy").addEventListener("click", function(){
    document.querySelector(".cards").innerHTML ="";
    const dairy = groceries.filter(grocery => grocery.type.includes("Dairy"));
    

    dairy.forEach((grocery) => {
        const html = `
        <div class = "card">
            <h2 class ="name">${grocery.name}</h2>
            <h2 class = "origin">${grocery.type}</h2>
            <h2>${grocery.price}</h2>
            <button>Add to bag</button>
        </div>
        `;
        
        cardlocation.insertAdjacentHTML("beforeend", html)
        
})
})
//grain
document.querySelector(".Grain").addEventListener("click", function(){
    document.querySelector(".cards").innerHTML ="";
    const grain = groceries.filter(grocery => grocery.type.includes("Grain"));
    

    grain.forEach((grocery) => {
        const html = `
        <div class = "card">
            <h2 class ="name">${grocery.name}</h2>
            <h2 class = "origin">${grocery.type}</h2>
            <h2>${grocery.price}</h2>
            <button>Add to bag</button>
        </div>
        `;
        
        cardlocation.insertAdjacentHTML("beforeend", html)
        
})
})
//pantry
document.querySelector(".Pantry").addEventListener("click", function(){
    document.querySelector(".cards").innerHTML ="";
    const pantry = groceries.filter(grocery => grocery.type.includes("Pantry"));
    
    pantry.forEach((grocery) => {
        const html = `
        <div class = "card">
            <h2 class ="name">${grocery.name}</h2>
            <h2 class = "origin">${grocery.type}</h2>
            <h2>${grocery.price}</h2>
            <button>Add to bag</button>
        </div>
        `;
        
        cardlocation.insertAdjacentHTML("beforeend", html)
        
})
})
//produce
document.querySelector(".Produce").addEventListener("click", function(){
    document.querySelector(".cards").innerHTML ="";
    const produce = groceries.filter(grocery => grocery.type.includes("Produce"));
    
    produce.forEach((grocery) => {
        const html = `
        <div class = "card">
            <h2 class ="name">${grocery.name}</h2>
            <h2 class = "origin">${grocery.type}</h2>
            <h2>${grocery.price}</h2>
            <button>Add to bag</button>
        </div>
        `;
        
        cardlocation.insertAdjacentHTML("beforeend", html)
        
})
})

//protein

document.querySelector(".Protein").addEventListener("click", function(){
    document.querySelector(".cards").innerHTML ="";
    const protein = groceries.filter(grocery => grocery.type.includes("Protein"));
    
    protein.forEach((grocery) => {
        const html = `
        <div class = "card">
            <h2 class ="name">${grocery.name}</h2>
            <h2 class = "origin">${grocery.type}</h2>
            <h2>${grocery.price}</h2>
            <button>Add to bag</button>
        </div>
        `;
        
        cardlocation.insertAdjacentHTML("beforeend", html)
        
})
})



/*
const dairy = groceries.filter(grocery => grocery.type.includes("Dairy"));
console.log(dairy);

const protein = groceries.filter(grocery => grocery.type.includes("Protein"));
console.log(protein);

const produce = groceries.filter(grocery => grocery.type.includes("Produce"));
console.log(produce);

const beverage = groceries.filter(grocery => grocery.type.includes("Beverage"));
console.log(beverage);

const grain = groceries.filter(grocery => grocery.type.includes("Grain"));
console.log(grain);

const pantry = groceries.filter(grocery => grocery.type.includes("Pantry"));
console.log(pantry);*/