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
    alt="course1"
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
    cart.push(flowers[index]);
    console.log(cart);
  });
});
