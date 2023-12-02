var addtocardbutton = document.getElementsByClassName("shop-item-button");
for (let index = 0; index < addtocardbutton.length; index++) {
  addtocardbutton[index].addEventListener("click", selectproduct);
}
function selectproduct(event) {
  let buton = event.target.parentElement.parentElement;
  let title = buton.getElementsByClassName("shop-item-title")[0].innerText;
  let price = buton.querySelectorAll(".shop-item-price")[0].innerText;
  let image = buton.querySelectorAll(".shop-item-image")[0].src;
  console.log(title, price, image);
  addToCardItem(title, price, image);
}
function addToCardItem(title, price, image) {
  let cardrow = document.createElement("div");
  cardrow.classList.add("cart-row");
  cardrow.innerText = title;
  let carditemsway = document.querySelectorAll(".cart-items")[0];

  let cardrowcontent = `<div class="cart-item cart-column">
  <img
    class="cart-item-image"
    src="${image}"
    width="100"
    height="100"
  />
  <span class="cart-item-title">${title}</span>
</div>
<span class="cart-price cart-column">${price}</span>
<div class="cart-quantity cart-column">
  <input class="cart-quantity-input" type="number" value="2" />
  <button class="btn btn-danger" type="button">REMOVE</button>
</div>`;
  cardrow.innerHTML = cardrowcontent;
  carditemsway.appendChild(cardrow);
}
