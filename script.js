const minus = document.getElementById("minus");
const plus = document.getElementById("plus");
const productNumber = document.getElementById("productNumber");
const cartNumber = document.getElementById("cartNumber");
const cartBtn = document.getElementById("cartBtn");
const checkNumber = document.getElementById("checkNumber");
const checkAmount = document.getElementById("checkAmount");
const deleteBtn = document.getElementById("deleteBtn");
const cart = document.getElementById("cart");
const cartBox = document.getElementById("cartBox");
// let mainImages = document.querySelector(".mainImage");
const galleryImages = document.querySelectorAll(".galleryImages");
let number = 0;
let checkout;

plus.addEventListener("click" ,() =>  {
    number++;
    productNumber.textContent = number;
    cartNumber.textContent = number;
    checkNumber.textContent = number;
    checkout = number * Number(125);
    checkAmount.textContent = checkout;
})

minus.addEventListener("click" ,() =>  {
    if (number > 0) {
        number--;
        productNumber.textContent = number;
        cartNumber.textContent = number;
        checkNumber.textContent = number;
        checkout = number * Number(125);
        checkAmount.textContent = checkout;
      }
    if (number == 0) {
        number--;
        cartNumber.style.display = "none";
      }
})
deleteBtn.addEventListener("click" ,() =>  {
    if (number > 0) {
        number--;
        productNumber.textContent = number;
        cartNumber.textContent = number;
        checkNumber.textContent = number;
        checkout = number * Number(125);
        checkAmount.textContent = checkout;
      }
    if (number == 0) {
        number--;
        cartNumber.style.display = "none";
      }
})
cartBtn.addEventListener("click", () => {
    cartNumber.style.display = "block";
})
cart.addEventListener("click", () => {
    cartBox.classList.toggle("opac");
})

galleryImages.forEach((images, i) => {
  images.addEventListener("click", () => {
    const mainImages = document.getElementById("mainImage");
    mainImages.src = images.src;
  })
})


const navIcon = document.querySelector(".navIcon");
const header = document.querySelector(".header");

navIcon.addEventListener("click", () => {
  header.classList.toggle("active");
});