//Items
let flowers = [
{
name: "Pink Roses bouquet",
image: "https://cdn.pixabay.com/photo/2017/02/06/00/55/bouquet-2041844_640.jpg",
price: 38,
qtty: 1
},
{
name: "Tulips mix",
image: "https://cdn.pixabay.com/photo/2023/11/25/01/00/ai-generated-8410870_640.png",
price: 42,
qtty: 1
},
{
name: "Lilies bouquet",
image: "https://cdn.pixabay.com/photo/2021/03/13/12/27/flowers-6091612_640.jpg",
price: 40,
qtty: 1
},
{
name: "Violets collection",
image: "https://cdn.pixabay.com/photo/2019/06/18/17/54/asters-4282887_640.jpg",
price: 44,
qtty: 1
},
{
name: "Daisies bouquet",
image: "https://cdn.pixabay.com/photo/2020/08/08/12/10/flowers-5472859_640.jpg",
price: 35,
qtty: 1
},
{
name: "Orchids collection",
image: "https://cdn.pixabay.com/photo/2020/01/12/03/08/orchids-4759196_640.jpg",
price: 51,
qtty: 1

}
];


//Display of items
flowers.forEach(function(flower){
document.getElementById("result").innerHTML+=
`
<div class="card">
  <img src="${flower.image}">
    <div class="script">
      <h3>${flower.name}</h3><h5>€ ${flower.price}</h5>           
      <div class="links cart-button"><button class="go"><i class="fs-4 bi bi-cart-plus"></i> Add to cart</button>  
    </div>
  </div>
</div>
 `;
})

//Button to add to cart
let addTocartBtn = document.querySelectorAll(".cart-button");

//Declare cart and cartcount on navbar
let cartCount = 0;
let cart = [];

//Button add to cart for each item
addTocartBtn.forEach(function(btn,i) {
btn.addEventListener("click",function() {
    addTocart(i);   
})
})


//Function to add products to cart
function addTocart(i) {
if (cart.find((item) => item.name == flowers[i].name)){
    flowers[i].qtty++;
}else{
    cart.push(flowers[i]);
}
    cartCount++;
    createCartInHTML();
    calcTotal();
    updateCartCount();
    };

//Function to update cartcount on navbar
function updateCartCount() {
    const totalQtty = cart.reduce((total, item) => total + item.qtty, 0);
    const cartCountElement = document.querySelector(".cart-count");
    if (cartCountElement) {
        cartCountElement.innerText = totalQtty;
    }
    }

//Function to increase item count on navbar
function increaseCartCount() {
  cartCount += 1;
  updateCartCount();
}

//Function to decrease item count on navbar
function decreaseCartCount() {
  if (cartCount > 0) {
      cartCount -= 1;
      updateCartCount();
  }
}

//Function to delete item count on navbar
function removeCartCount(){
    cartCount = 0;
       
  updateCartCount();
 
}


//Function to increase item quantity 
function plusQtty(i){
    cart[i].qtty++;
    document.querySelectorAll(".qtty")[i].innerText = cart[i].qtty;
    
}

//Function to decrease item quantity
function minusQtty(i) {
    if (cart[i].qtty==1 ) {
        cart.splice(i,1); //when qqty==1, we remove the item
    } else {
        cart[i].qtty--;//otherwise we do a minus 1
    document.querySelectorAll(".qtty")[i].innerHTML=cart[i].qtty;

    }
}

//Function to delete item quantity
function removeQtty(i) {
   cart[i].qtty=1;
   cart.splice(i,1);
}

//Calculation of cart total amount
function calcTotal(){
    let total=0;

  cart.forEach(function(flower){
      total+=(flower.price*flower.qtty);
   })

   document.getElementById("price").innerHTML="€ "+ total ;
   
  }

//Function to create cart
function createCartInHTML(){
document.getElementById("cart").innerHTML="";
cart.forEach(function(item){
document.getElementById("cart").innerHTML+=
  `
    <div id="cart">
      <h2 class="product">
        <header>
          <a class="remove">
            <img src="${item.image}" alt="${item.name}">
            <h3>Remove</h3>
          </a>
        </header>
        <div class="content">
            <h1>${item.name}</h1>
        </div>
        <footer class="content">
          <span class="minus fs-5 bi bi-dash-circle-fill"></span>
          <span class="qtty">${item.qtty}</span>
          <span class="plus fs-5 bi bi-plus-circle-fill"></span>
          <h2 class="full-price">€ ${item.price}</h2>
        </footer>
      </h2>
    </div>
    
`;
});

//Add event to buttons
let plusBtns = document.querySelectorAll(".plus");

   plusBtns.forEach((plusBtn,i) => {
   plusBtn.addEventListener("click",function(){
    plusQtty(i);
    calcTotal();
    increaseCartCount();

   });

});

let minusBtns = document.querySelectorAll(".minus");

   minusBtns.forEach((minusBtn,i) => {
   minusBtn.addEventListener("click",function(){
     minusQtty(i);
     calcTotal();
     decreaseCartCount();
     createCartInHTML();
     removeCartCount();
    });
});

let removeBtns = document.querySelectorAll(".remove");

   removeBtns.forEach((removeBtn,i) => {
   removeBtn.addEventListener("click",function(){
     removeQtty(i);
     calcTotal();
     createCartInHTML();
     removeCartCount();
    
    });
});


};
   