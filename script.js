const toggle = document.getElementById("bar");
const nav = document.getElementById("navbar");
const close = document.getElementById("close");

if (toggle) {
  toggle.addEventListener("click", () => {
    nav.classList.add("active");
    console.log("worked");
  });
}

if (close) {
  close.addEventListener("click", () => {
    nav.classList.remove("active");
    console.log("worked");
  });
}

const page = document.getElementById("page");
const page2 = document.getElementById("page2");
const pagination1 = document.getElementById("pagination1");
const pagination2 = document.getElementById("pagination2");

if ((pagination1, pagination2)) {
  pagination1.addEventListener("click", (e) => {
    page.style.display = "contents";
    page2.style.display = "none";
    pagination1.classList.add("active");
    pagination2.classList.remove("active");
    e.preventDefault();
    console.log(" you cliked me");
  });
}
if ((pagination2, pagination1)) {
  pagination2.addEventListener("click", (e) => {
    page2.style.display = "flex";
    page.style.display = "none";
    pagination2.classList.add("active");
    pagination1.classList.remove("active");
    e.preventDefault();
    console.log(" you cliked me");
  });
}

const LOCAL_STORAGE_KEY = "cart_products"


const products = [
  {
    id:1,
    image: "images/fullpackage.jpg",
    name: "Addidas",
    description: "Cartoon astronut design",
    star: 4,
    price: 4000,
  },
  {
    id:2,
    image:"images/kingHandbead.jpg",
    name: "Addidas",
    description: "Cartoon astronut design",
    star: 4,
    price: 3000,
  },
    {
    id:3,
    image:"images/ankaraBook.jpg",
    name: "Addidas",
    description: "Cartoon astronut design",
    star: 4,
    price: 3000,
  },
  {
    id:4,
    image:"images/scafankara.jpg",
    name: "Addidas",
    description: "Cartoon astronut design",
    star: 4,
    price: 3000,
  },
  {
    id:5,
    image:"images/fullpackage.jpg",
    name: "Addidas",
    description: "Cartoon astronut design",
    star: 4,
    price: 3000,
  },
  {
    id:6,
    image:"images/ankaraHandBag.jpg",
    name: "Addidas",
    description: "Cartoon astronut design",
    star: 4,
    price: 3000,
  },
  {
    id:7,
    image:"images/ankaraBag.jpg",
    name: "Addidas",
    description: "Cartoon astronut design",
    star: 4,
    price: 3000,
  },
];

function addProductToCart(id){
    const product = products.find(product=> product.id === id)

    const cartProducts = getCartFromLocalStorage()

    const updatedCartProducts = [...cartProducts, product]

    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updatedCartProducts))

    window.location.pathname = '/cart.html'
}

function loadProducts() {
  const productsWarapper = document.querySelector(".products");

  const cartProducts = getCartFromLocalStorage()

  productsWarapper.innerHTML = products
    .map(
      (product) => `
    <div class="col-md-6 col-lg-3 col-xxl-3 col-sm-6 col-12">
    <div>
      <img class="w-100 product-image" src="${product.image}"> </img>
      <div class="description">
        <span>${product.name}</span>
        <h5>${product.description}</h5>
        <div class="star"> 
          <i class="fas fa-star "> </i>
          <i class="fas fa-star "> </i>
          <i class="fas fa-star "> </i>
          <i class="fas fa-star "> </i>
          <i class="fas fa-star "> </i>
        </div>
        <h4> #${product.price} </h4>
      </div>
      ${!cartProducts.some((_product)=> _product.id === product.id) ? `<button class="cart" onClick="addProductToCart(${product.id})" > <i class="fal fa-shopping-cart"> </i> </button>` : '<a href="/cart.html">View cart</a>'}
    </div>
  </div>
    `
    )
    .join("");
}



// function getProductfromCart(id){
//   const product = products.find(product=> product.id === id)

//   localStorage.getItem('cart_product', JSON.parse(product)) 
// }

function deletedata (id) {
  
  // const datadelete =  localStorage.getItem('cart_product', JSON.stringify(product)) ;
  // datadelete.splice(1,1)

  const cartProducts = getCartFromLocalStorage()

  const updatedCart = cartProducts.filter(product => product.id !== id)


  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updatedCart))

  displaycart()

  if(updatedCart.length === 0){
    window.location.pathname = '/'
  }

  }


function displaycart(  ) {
 

  const productsWarapper = document.querySelector("#tablehtml");

  const cartProducts = getCartFromLocalStorage();
  productsWarapper.innerHTML = cartProducts
    .map(
      (product) =>{
        return  `
        <table id="tablehtml" width="100%">
    
        <tbody> 
            <tr> 
                <td><button onClick="deletedata(${product.id})" > <i  class=" far fa-times-circle"> </i> </button></td>
                <td> <img src="${product.image}"> </img> </td>
                <td> ${product.name} </td>
                <td id="productPrice">${product.price}</td>
                <td><button onClick="updateCartItem(${product.id}, 'quantity',${Math.max(1, Number(product.quantity) - 1)})"> - </button> <input type="number" readonly value="${Math.max(1, Number(product.quantity ?? 1))}"></input> <button onClick="updateCartItem(${product.id}, 'quantity',${(product.quantity ?? 1) + 1})">+ </button> </td>
                <td > ${(product.quantity ?? 1) * product.price} </td>
               </tr>
        </tbody>
    </table>
      `
      }
    )
    .join("");
   
}




const getCartFromLocalStorage = ()=>{
  const localStorageCartProducts = localStorage.getItem(LOCAL_STORAGE_KEY)

  const cartProducts = localStorageCartProducts === undefined || localStorageCartProducts === null ? [] : JSON.parse(localStorageCartProducts)

  return cartProducts
}

const updateCartItem = (id, field, value)=>{
  const cartItems = getCartFromLocalStorage()

  const updatedCart = cartItems.map((product)=> {
    if(product.id === id){
      product[field] = value
    }
    return product
  })

  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updatedCart))
console.log( updatedCart);
  displaycart()

}

const displayTotal = () => {
  cartItems = getCartFromLocalStorage()
 const display
}

// Sub total javascript
 
