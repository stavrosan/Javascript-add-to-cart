let flowers = [
{
name: "Roses",
image: "https://cdn.pixabay.com/photo/2018/02/09/21/46/rose-3142529_640.jpg",
price: 20,
qtty: 1,
},
{
name: "Tulips",
image: "https://cdn.pixabay.com/photo/2017/04/23/20/36/tulips-2254970_640.jpg",
price: 25,
qtty: 1,
},
{
name: "Lilies",
image: "https://cdn.pixabay.com/photo/2016/07/11/21/23/water-lily-1510707_640.jpg",
price: 19,
qtty: 1,
},
{
name: "Violets",
image: "https://cdn.pixabay.com/photo/2017/05/22/13/36/water-lily-2334209_640.jpg",
price: 28,
qtty: 1,

},
{
name: "Daisies",
image: "https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510_1280.jpg",
price: 21,
qtty: 1,
},
{
    name: "Daisies",
    image: "https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510_1280.jpg",
    price: 21,
    qtty: 1,
    }
];

//let products = document.querySelectorAll(".flowers");

flowers.forEach(function(flower){
document.getElementById("result").innerHTML+=
`
<div class="card">
  <img src="${flower.image}">
    <div class="script">
      <h3>${flower.name}</h3><p>€ ${flower.price}</p>           
      <div class="links cart-button"><button class="go"><i class="fs-4 bi bi-cart-plus"></i> Add to cart</button>  
      </div>
      </div>
      </div>
        `;
})

let addTocartBtn = document.querySelectorAll(".cart-button");

let cartCount=0;
let cart = [];


addTocartBtn.forEach(function(btn,i) {
btn.addEventListener("click",function() {
    addTocart(i);   
})
})



function addTocart(i) {
    if (cart.find((item) => item.name == flowers[i].name)){
    flowers[i].qtty++;
    }else{
        cart.push(flowers[i]);
    }
    //console.log("Item added");
    cartCount++;
    createCartInHTML();
    calcTotal();
    updateCartCount();
    };


    function updateCartCount() {
      const cartCountElement = document.querySelector(".cart-count");
      if (cartCountElement) {
        cartCountElement.innerText = cartCount;
    }
    }

  
function increaseCartCount() {
  cartCount += 1;
  updateCartCount();
}

function decreaseCartCount() {
  if (cartCount > 0) {
      cartCount -= 1;
      updateCartCount();
  }
}

function plusQtty(i){
    cart[i].qtty++;
    document.querySelectorAll(".qtty")[i].innerText = cart[i].qtty;
    
}


function minusQtty(i) {
    if (cart[i].qtty==1 ) {
        cart.splice(i,1); //when qqty==1, we remove the item
    } else {
        cart[i].qtty--;//otherwise we do a minus 1
    document.querySelectorAll(".qtty")[i].innerHTML=cart[i].qtty;

    }
}

function removeQtty(i) {
    cart[i].qtty=1;
    cart.splice(i,1);
}


function calcTotal(){
    let total=0;

    cart.forEach(function(flower){
        total=total+(flower.price*flower.qtty);
   })

   document.getElementById("price").innerHTML=total + "€";
}

// const cartCount = document.querySelector('.cart-count');
// let count = cart[i].qtty++;

// cartCount.innerHTML = count;

// if (count === 0) {
//     cartCount.style.display = 'none';
// } else {
//   cart.push(cart[i]);
//     cartCount.style.display = 'block';
// }



   function createCartInHTML(){
    document.getElementById("cart").innerHTML="";
    cart.forEach(function(item){
        document.getElementById("cart").innerHTML+=
        `
        <section id="cart">
         <article class="product">
        <header>
          <a class="remove">
            <img src="${item.image}" alt="">

            <h3>Remove product</h3>
          </a>
        </header>

        <div class="content">

          <h1>${item.name}</h1>

          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta, numquam quis perspiciatis ea ad omnis provident laborum dolore in atque.

          <div title="You have selected this product to be shipped in the color yellow." style="top: 0" class="color yellow"></div>
          <div style="top: 43px" class="type small">XXL</div>
        </div>

        <footer class="content">
          <span class="minus fs-5 bi bi-dash-circle-fill"></span>
          <span class="qtty">${item.qtty}</span>
          <span class="plus fs-5 bi bi-plus-circle-fill"></span>
          <h2 class="full-price">€ ${item.price}</h2>
        </footer>
      </article>
      </section>
      </div>
`;
})

    

   let plusBtns = document.querySelectorAll(".plus");

   plusBtns.forEach((plusBtn,i) => {
   plusBtn.addEventListener("click",function(){
    plusQtty(i);
    calcTotal();
    increaseCartCount();
   })

});
   let minusBtns = document.querySelectorAll(".minus");

   minusBtns.forEach((minusBtn,i) => {
   minusBtn.addEventListener("click",function(){
     minusQtty(i);
     calcTotal();
     createCartInHTML();
     decreaseCartCount();
    })
})

let removeBtns = document.querySelectorAll(".remove");

   removeBtns.forEach((removeBtn,i) => {
   removeBtn.addEventListener("click",function(){
     removeQtty(i);
     calcTotal();
     createCartInHTML();
    })
})

   }
   