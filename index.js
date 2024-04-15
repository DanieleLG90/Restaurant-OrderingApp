import {menuArray} from "./data.js";
const foodList = document.getElementById('container')
const orderingContainer = document.getElementById('orderingContainer')
const orderedFoodList = document.getElementById('orderedFoodList')
const totalP = document.getElementById('totalP')
const completeOrderBtn = document.getElementById('completeOrderBtn')
const infoContainer = document.getElementById('infoContainer')
const customerName = document.getElementById('customerName')
const backToMenuBtn = document.getElementById('backToMenuBtn')

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
        orderingContainer.classList.remove('none')
        //console.log(orderedList)
        //console.log(e.target.dataset.id)
    } else if (orderedList.includes(e.target.dataset.id)){
        //console.log(orderedList)
        //console.log('EUREKA')
    } else if (e.target.dataset.remove){
        //console.log(orderedList)
        removeItem (e.target.dataset.remove)
        orderedFoodList.innerHTML = orderingList(orderedList).join('')
        totalP.innerHTML = totalPrice(orderedList)
        if (orderedList.length === 0){
            clearWindow ()
        }
    }
})

function clearWindow () {
    orderingContainer.classList.add('none')
}

const orderedList = []

function addingOrderedFood (foodXx){
    const foodToAdd = menuArray.filter(function(foodObj){
        return foodObj.id == Number(foodXx)
    })[0]
    orderedList.push(foodToAdd)
    orderedFoodList.innerHTML = orderingList(orderedList).join('')
    totalP.innerHTML = totalPrice(orderedList)
}

function orderingList (food){
    return food.map(function(foodItem){
        return `<div class="foodListElm">
                <h4 class="orderName">${foodItem.name}</h4>
                
                <button class="removeBtn" data-remove="${foodItem.id}">remove</button>
                <span class="orderPrice">$${foodItem.price}</span>
                </div>`
    })
}

function totalPrice (price){
    const totalPrc = price.reduce(function (total, singlePrice){
        return total + singlePrice.price
    }, 0)
    
    const tenPerDisc = (totalPrc * 10) / 100
    const fifteenPerDisc = (totalPrc * 15) / 100
    if (totalPrc < 50){
        //return `10% $${totalPrc - tenPerDisc}`
        return `$${totalPrc}`
        console.log('minore 50')
    } else if (totalPrc < 70){
        //return `15% $${totalPrc - fifteenPerDisc}`
        return `10% $${totalPrc - tenPerDisc}`
        console.log('minore 70')
    } else{
        return `15% $${totalPrc - fifteenPerDisc}`
        console.log('maggiore 70')
    }
    //return `$${totalPrc}`
}

function removeItem (food){
    const foodToRemove = menuArray.filter(function(foodObj){
        return foodObj.id == Number(food)
    })[0]
    orderedList.splice(foodToRemove, 1)
    return orderedList
}

completeOrderBtn.addEventListener('click', function(){
    //console.log('ciao')
    infoContainer.classList.remove('none')
})

const loginForm = document.getElementById('infoContainer')
loginForm.addEventListener('submit', function(e){
    e.preventDefault()
})

document.getElementById('loginForm').addEventListener('submit', function(){
   // console.log('ciao')
    orderingContainer.innerHTML = `<div>
                                    <h4 class='greatingMsg'>Thanks, ${customerName.value}! Your order is on the way!</h4>
                                    <div class="promo">
                                        <h4 class="promoIntro">Promo code for your next order:</h4>
                                        <p class="promoCode">${makePromo(3)}-${makePromo(3)}</p>
                                    </div>
                                   </div>`
    infoContainer.classList.add('none')
})

backToMenuBtn.addEventListener('click', function(){
    infoContainer.classList.add('none')
})

// generate random promo code for next order

function makePromo(length) {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < length) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
      counter += 1;
    }
    return result;
}

