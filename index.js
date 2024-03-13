import {menuArray} from "./data.js";
const foodList = document.getElementById('container')

function addElmToMenu (food){
    return food.map(function(foodElm){
        return `<div class="foodElm" id="foodElm">
            <h3 class="foodImg" id="foodImg">${foodElm.emoji}</h3>
            <div class="textContent" id="textContent">
                <h4 class="name">${foodElm.name}</h4>
                <p class="ingredients">Ingredients: ${foodElm.ingredients}</p>
                <p class="price">${foodElm.price}$</p>
            </div>
            <button class="addBtn" data-id="${foodElm.id}">+</button>
        </div>`
    })
}

foodList.innerHTML = addElmToMenu(menuArray).join('')


document.addEventListener('click', function(e) {
    if (e.target.dataset.id){
        addingOrderedFood(e.target.dataset.id)
        //console.log(e.target.dataset.id)
    }

})

function addingOrderedFood (foodXx){
    const foodToAdd = menuArray.filter(function(foodObj){
        //console.log(typeof foodObj.id)
        //console.log(typeof Number(foodXx))
        return foodObj.id == Number(foodXx)
    })[0]
    console.log(foodToAdd)
}