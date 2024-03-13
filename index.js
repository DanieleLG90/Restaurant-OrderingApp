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
            <button class="addBtn" id="${foodElm.id}">+</button>
        </div>`
    })
}

foodList.innerHTML = addElmToMenu(menuArray).join('')

const menuItem = menuArray.map(function(foodId){
    return foodId
})


document.addEventListener('click', function(e) {
    if (e.target.id){
        addingOrderedFood(e.target.id)
    }

})

function addingOrderedFood (food){
    const addItem = menuArray.filter(function(foodObj){
        return foodObj.id === food
        })[0]

    console.log (addItem)

}