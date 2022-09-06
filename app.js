const iceCream = [{
  name: 'Cookie Dough',
  image: 'https://celebratingsweets.com/wp-content/uploads/2014/04/Cookie-Dough-Ice-Cream-1-5.jpg',
  price: 1,
  quantity: 0
}, {
  name: 'Vanilla',
  image: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/ultimate-vanilla-ice-cream-1628511695.jpg',
  price: 1,
  quantity: 0
}, {
  name: 'Strawberry',
  image: 'https://www.realfoodwithjessica.com/wp-content/uploads/2017/07/paleostrawberryicecream2.jpg',
  price: 2,
  quantity: 0
}]

const vessels = [{
  name: 'Waffle Cone',
  image: 'https://m.media-amazon.com/images/I/71VNjBMakfL._SL1500_.jpg',
  price: 2,
  quantity: 0
}, {
  name: 'Waffle Bowl',
  image: 'http://images.wbmason.com/350/L_JOY66050.jpg',
  price: 4,
  quantity: 0
}]

const toppings = [{
  name: 'Sprinkles',
  image: 'https://upload.wikimedia.org/wikipedia/commons/f/f6/Sprinkles2.jpg',
  price: 1,
  quantity: 0
}, {
  name: 'Choclate Chips',
  image: 'https://www.eatthis.com/wp-content/uploads/sites/4/2020/05/chocolate-chips.jpg?quality=82&strip=1&resize=640%2C360',
  price: 2,
  quantity: 0
}]

function addToppingsToCart(name) {
  let topping = toppings.find(topping => topping.name == name)
  // @ts-ignore
  topping.quantity++
  // @ts-ignore
  drawCart()
}
function addVesselsToCart(name) {
  let vessel = vessels.find(vessel => vessel.name == name)
  // @ts-ignore
  vessel.quantity++
  // @ts-ignore
  drawCart()
}
function addIceCreamToCart(name) {
  let cream = iceCream.find(cream => cream.name == name)
  // @ts-ignore
  cream.quantity++
  // @ts-ignore
  drawCart()
}

function drawCart() {
  let cart = document.getElementById('cart-list')
  let template = ''
  toppings.forEach(topping => {
    if (topping.quantity > 0) {
      template += `<div class="d-flex justify-content-between">
            <p>${topping.name}</p>
            <p>${topping.quantity}</p>
            <p>$${topping.price}</p>
            <p>$${topping.price * topping.quantity}</p>
          </div>`
    }
  })
  vessels.forEach(vessel => {
    if (vessel.quantity > 0) {
      template += `<div class="d-flex justify-content-between">
            <p>${vessel.name}</p>
            <p>${vessel.quantity}</p>
            <p>$${vessel.price}</p>
            <p>$${vessel.price * vessel.quantity}</p>
          </div>`
    }
  })
  iceCream.forEach(cream => {
    if (cream.quantity > 0) {
      template += `<div class="d-flex justify-content-between">
            <p>${cream.name}</p>
            <p>${cream.quantity}</p>
            <p>$${cream.price}</p>
            <p class="cream-price">$${cream.price * cream.quantity}</p>
          </div>`
    }
  })
  cart.innerHTML = template
  drawTotal()
}

function drawTotal() {
  let total = 0
  iceCream.forEach(cream => {
    total += cream.price * cream.quantity
  })
  vessels.forEach(vessel => {
    total += vessel.price * vessel.quantity
  })
  toppings.forEach(topping => {
    total += topping.price * topping.quantity
  })
  document.getElementById('cart-total').innerText = '$' + total
}

function checkout() {
  let cart = document.getElementById('cart-total')
  iceCream.forEach(cream => {
    cream.quantity = 0
  })
  vessels.forEach(vessel => {
    vessel.quantity = 0
  })
  toppings.forEach(topping => {
    topping.quantity = 0
  })
  drawCart()
}

drawCart()
drawTotal()
