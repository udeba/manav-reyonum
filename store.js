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
}
