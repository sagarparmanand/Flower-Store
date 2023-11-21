c = 0;
function chan() {
    if (c != 0) {
        document.getElementById('ch').src = 'images/heart.png'
        c--
    }
    else {
        document.getElementById('ch').src = 'images/heart fill.png'
        c++
    }

}

c1 = 0
function cha2() {
    if (c1 != 0) {
        document.getElementById('ch2').src = 'images/heart.png'
        c1--
    }
    else {
        document.getElementById('ch2').src = 'images/heart fill.png'
        c1++
    }
}

c3 = 0
function cha3() {
    if (c3 != 0) {
        document.getElementById('ch3').src = 'images/heart.png'
        c3--
    }
    else {
        document.getElementById('ch3').src = 'images/heart fill.png'
        c3++
    }
}

c4 = 0
function cha4() {
    if (c4 != 0) {
        document.getElementById('ch4').src = 'images/heart.png'
        c4--
    }
    else {
        document.getElementById('ch4').src = 'images/heart fill.png'
        c4++
    }
}

c5 = 0
function cha5() {
    if (c5 != 0) {
        document.getElementById('ch5').src = 'images/heart.png'
        c5--
    }
    else {
        document.getElementById('ch5').src = 'images/heart fill.png'
        c5++
    }
}

c6 = 0
function cha6() {
    if (c6 != 0) {
        document.getElementById('ch6').src = 'images/heart.png'
        c6--
    }
    else {
        document.getElementById('ch6').src = 'images/heart fill.png'
        c6++
    }
}

c7 = 0
function cha7() {
    if (c7 != 0) {
        document.getElementById('ch7').src = 'images/heart.png'
        c7--
    }
    else {
        document.getElementById('ch7').src = 'images/heart fill.png'
        c7++
    }
}

c8 = 0
function cha8() {
    if (c8 != 0) {
        document.getElementById('ch8').src = 'images/heart.png'
        c8--
    }
    else {
        document.getElementById('ch8').src = 'images/heart fill.png'
        c8++
    }
}

//                                             Form


const form = document.getElementById('form');
const namee = document.getElementById('namee');
const email = document.getElementById('email');
const number = document.getElementById('number');
const messagee = document.getElementById('message');

form.addEventListener('submit', e => {
    e.preventDefault();
    validateInputs();
});

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');
    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success');
}

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');
    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
}

const isVa1idEmai1 = email => {
    const re = email;
    return re.test(String(email).toLowerCase());
}

const validateInputs = () => {
    const nameValue = namee.value.trim();
    const emailValue = email.value.trim();
    const numberValue = number.value.trim();
    const messageValue = messagee.value.trim();

    if (nameValue === '') {
        setError(namee, 'name is required');
    } else {
        setSuccess(namee);
    }

    if (emailValue === '') {
        setError(email, 'email is required');
    }
    else {
        setSuccess(email);
    }

    if (numberValue === '') {
        setError(number, 'number is required');
    } else {
        setSuccess(number);
    }

    if (messageValue === '') {
        setError(messagee, 'message is required');
    } else {
        setSuccess(messagee);
    }

};


//                                                     Cart

let cartIcon = document.querySelector("#cart-icon");
let cart = document.querySelector(".cart");
let closeCart = document.querySelector("#close-cart");

//                               opening tab
cartIcon.onclick = () => {
    cart.classList.add("active");
};


//                                closing tab
closeCart.onclick = () => {
    cart.classList.remove("active");
};

if (document.readyState == "loading") {
    document.addEventListener("DOMContentLoaded", ready);
} else {
    ready();
}

//                          remove product
function ready() {
    var removeCartButton = document.getElementsByClassName('cart-remove')
    console.log(removeCartButton);
    for (var i = 0; i < removeCartButton.length; i++) {
        var button = removeCartButton[i]
        button.addEventListener('click', removeCartItem)
    }
    //                                  quantity 
    var quantityInput = document.getElementsByClassName('cart-quantity');
    for (var i = 0; i < quantityInput.length; i++) {
        var input = quantityInput[i];
        input.addEventListener("change", quantityChanged);
    }
    //                          add to cart
    var addCart = document.getElementsByClassName('add-cart');
    for (var i = 0; i < addCart.length; i++) {
        var button = addCart[i];
        button.addEventListener('click', addCartClicked);
    }
}

function addCartClicked(event) {
    var button = event.target;
    var shopProducts = button.parentElement
    var title = shopProducts.getElementsByClassName("product-title")[0].innerText;
    var price = shopProducts.getElementsByClassName("price")[0].innerText;
    var producImg = shopProducts.getElementsByClassName("iimmgg")[0].src;
    addProductToCart(title, price , producImg);
    updatetotal();
}

function addProductToCart(title, price, producImg) {
    var cartShopBoxs = document.createElement("div");
    cartShopBoxs.classList.add("cart-box");
    var cartItems = document.getElementsByClassName("cart-content")[0];
    var cartItemsNames = cartItems.getElementsByClassName("cart-product-title");
    for (var i = 0; i < cartItemsNames.length; i++) {
        if(cartItemsNames[i].innerHTML == title){
        alert("You have already added this item to cart");
    return;
    }
}

var cartBoxContent = `
<img src="${producImg}" alt="" class="cart-img">
<div class="detail-box">
  <div class="cart-product-title">${title}</div>
  <div class="cart-price">${price}</div>
  
  <input type="number" value="1" class="cart-quantity"> 
</div>
<i class='bx bxs-trash-alt cart-remove'></i> `;

cartShopBoxs.innerHTML = cartBoxContent;
cartItems.append(cartShopBoxs)
cartShopBoxs.getElementsByClassName('cart-remove')[0].addEventListener("click", removeCartItem)
cartShopBoxs.getElementsByClassName('cart-quantity')[0].addEventListener("change", quantityChanged)

}


//                                      Quantity changes

function quantityChanged(event) {
    var input = event.target;
    if (isNaN(input.value) || input.value <= 0) {
        input.value = 1;
    }
    updatetotal();
}

function removeCartItem(event) {
    var buttonClicked = event.target
    buttonClicked.parentElement.remove();
    updatetotal();
}

//                               update Total

function updatetotal() {
    var cartContent = document.getElementsByClassName('cart-content')[0]
    var cartBoxes = cartContent.getElementsByClassName('cart-box')
    var total = 0;
    for (var i = 0; i < cartBoxes.length; i++) {
        var cartBox = cartBoxes[i]
        var priceElement = cartBox.getElementsByClassName('cart-price')[0]
        var quantityElement = cartBox.getElementsByClassName('cart-quantity')[0]
        var price = parseFloat(priceElement.innerText.replace("Rs", ""));
        var quantity = quantityElement.value;
        total = total + (price * quantity);
    }
        document.getElementsByClassName("total-price")[0].innerText = "Rs" + total;
    }

//                    Buy Button

document.getElementsByClassName('btn-buy')[0].addEventListener("click", buyButtonClicked);

function buyButtonClicked(){
    alert("Your Order is placed");
    var cartContent = document.getElementsByClassName("cart-content")[0];
    while(cartContent.hasChildNodes()){
        cartContent.removeChild(cartContent.firstChild);
    }
    updatetotal();
}

//                                   ScrollReveal

ScrollReveal({ 
    reset: true,
    distance:'80px',
    duration:2000,
    delay:200 
});

ScrollReveal().reveal('.home2 h1, .head h1', { origin: 'top' });
 ScrollReveal().reveal('.card , .cont , .bt , .card , .footer , .home2 h6', { origin: 'bottom' });
 ScrollReveal().reveal('.phot , .cardd , .f', { origin: 'left' });
 ScrollReveal().reveal('.ims', { origin: 'right' });
 
