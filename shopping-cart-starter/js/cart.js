let flowers = [
  {
    name: "Roses",
    image: "6437364-rose-2907178_1920.jpg",
    price: 30.0,
    qtty: 1,
  },
  {
    name: "Pink Fower",
    image: "pinkflower.jpg",
    price: 30.0,
    qtty: 1,
  },
  {
    name: "orchid",
    image: "white-pink.jpg",
    price: 40.0,
    qtty: 1,
  },
  {
    name: "Blue Flowers",
    image: "Buenosflower.jpg",
    price: 30.0,
    qtty: 1,
  },
  {
    name: "Mixed-Flowers",
    image: "mixedflower.jpg",
    price: 40.0,
    qtty: 1,
  },
  {
    name: "jasmine",
    image: "jasmin.jpg",
    price: 30.0,
    qtty: 1,
  },
];

const currencyFormatter = new Intl.NumberFormat("de-AT", {
  style: "currency",
  currency: "EUR",
});

//Flower card start -->
const flowersContainer = document.querySelector(".flowers");

flowers.forEach((flower) => {
  flowersContainer.innerHTML += `
    <div class="card flower col my-4" style="width: 300px">
     <img
    class="card-img-top mt-2 px-3"
    src="./flowerimages/${flower.image}"
    alt="${flower.name}"
  />
  <div class="card-body px-3 py-0">
    <h5 class="card-title">${flower.name}</h5>
    
    <p class="card-text h3 text-end"> ${flower.price}</p>
    <p class="card-text3 d-flex justify-content-end"> 
      <button class="btn w-75 btn-primary flower-button">
        <i class="fs-4 bi bi-cart-plus"></i> Add to cart
      </button>
    </p>
  </div>
</div>
`;
});

let cart = [];
let addToCartBtns = document.querySelectorAll(".flower-button");

addToCartBtns.forEach((btn, index) => {
  btn.addEventListener("click", function () {
    //cart.push(flowers[index]);
    addToCart(flowers[index]);
    //console.log(cart);//
  });
});
function addToCart(item) {
  let existingflower = cart.find((cartItem) => {
    return cartItem.name == item.name;
  });

  if (existingflower) {
    item.qtty++;
  } else {
    cart.push(item);
  }
}
createRows();

const cartContainer = document.getElementById("cart-container");

function createRows() {
  cartContainer.innerHTML = "";
  cart.forEach((item) => {
    cartContainer.innerHTML += `
   <div class="cart-row row gx-0">
            <div
              class="cart-item col-6 ps-md-5 my-2 d-flex align-items-center justify-content-start"
            >
              <img
                class="cart-item-image"
                src="flowerimages/${item.image}"
                width="100"
                height="100"
                alt="flower-logo"
              />
              <div class="cart-item-title h5 ms-2">${item.name}</div>
            </div>
            <div
              class="cart-qtty-action col-2 d-flex justify-content-center align-items-center"
            >
              <div class="d-flex">
                <i class="plus fs-5 bi bi-plus-circle-fill"></i>
              </div>
              <div class="text-center m-0 cart-quantity h4 w-25"${item.qtty}>1</div>
              <div class="d-flex">
                <i class="minus fs-5 bi bi-dash-circle-fill"></i>
              </div>
            </div>
            <div class="col-1 d-flex justify-content-start align-items-center">
              <i class="del fs-4 bi bi-trash3-fill text-danger"></i>
            </div>
            <div class="cart-price col-3 h5 my-auto text-end p-2 pe-sm-5">
              ${currencyFormatter.format(item.price)}
            </div>
          </div>
        </div> 
   
   
   `;
  });
}
