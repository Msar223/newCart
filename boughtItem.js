let  basket= JSON.parse(localStorage.getItem("data")) || [];
console.log(shopData)
let label= document.getElementById("label")
let shoppingCart= document.getElementById("shoppingCart")

let calculation =()=>{
  let cartIcon = document.getElementById("cart-number")
  
  cartIcon.innerHTML = basket.map((x)=>x.item).reduce((x,y)=>x+y, 0)
}

calculation()


 let generateCartItems=()=> {
  if (basket.length !==0){
    label.innerHTML= `<h2>Total Bills: $<span id="total-amount"></span></h2>
    <button class="homeBtn"><a href="cart.html">Home</a></button>
  <button onclick="deleteAll()" class="clear-cart">Clear Cart</button>`
   
    shoppingCart.innerHTML= basket.map((x)=>{
      let {id, item}= x;
      let search= shopData.find((y)=>y.id===id)
      return `
      
      <div class="shoppingItems">
      <img  id="images" width="120"  src="${search.img}">
      <div class="shoppingDetails">
        <div class="itemsName-price">
          <h2>${search.name}</h3>
          <h3>$ ${search.price}</h3>
          <div class="delete-icon" onclick="deleted(${id})"><i class="bi bi-calendar2-x"></i></div>
        </div>
        <div class="increase-decrease-quantity">
        <i class="bi bi-dash" onclick="decrement(${id})"></i>
        <div class="quantity" id="${id}">${item}</div>
        <i class="bi bi-plus" onclick="increment(${id})"></i>
        </div>
        <div class="total-price">$ ${search.price*item}</div>
        
      </div>
      </div>
      `
    }).join("");
  }
  else {
    label.innerHTML=`
    <h2>Cart is empty</h2>
    <button class="homeBtn" ><a href="cart.html" >Back to home</a></button>
    `
    shoppingCart.innerHTML=""
  };
 };

 generateCartItems()

 let increment =(id)=>{
  
  let selectedItem= id;
  let search= basket.find((x)=> x.id === selectedItem.id)
  if (search === undefined) {
    basket.push({
      id: selectedItem.id,
      item: 1
    });
  }
  else {
   search.item += 1
  } 
  console.log(selectedItem.id)
  update(selectedItem.id)
  
  localStorage.setItem("data", JSON.stringify(basket))
  generateCartItems()
  totalAmount()
}
 
let decrement =(id)=>{
  
  let selectedItem= id;
  let search= basket.find((x)=> x.id === selectedItem.id)
  if (search === undefined) return;
  else if ( search === 0) return;
  else {
   search.item -= 1
  } 
  console.log(selectedItem.id)
  update(selectedItem.id)
  basket= basket.filter((x)=> x.item !== 0)
  
  localStorage.setItem("data", JSON.stringify(basket))
  generateCartItems()
  totalAmount()
}
 
 let deleteAll=()=>{
  basket= localStorage.clear();
  basket=[]
  generateCartItems()
  calculation()
 }

let deleted =(id)=> {
  let selectedItem= id;
  basket = basket.filter((x)=>x.id !== selectedItem.id);
  generateCartItems();
  totalAmount()
  localStorage.setItem("data", JSON.stringify(basket));
  
 }

 let totalAmount=()=>{
 if (basket.length !==0){
  let amount =document.getElementById("total-amount");
  amount.innerHTML= basket.map((x)=>{
    let {id, item}= x;
    let search= shopData.find((y)=>y.id===id)
    return item*search.price;
  }).reduce((x,y)=>x+y, 0)
  console.log(amount)
} else return;
} 
totalAmount()

// add new car 

let names= document.getElementById("item-name");
let description= document.getElementById("description");
let image= document.getElementById("new-image");
let prices= document.getElementById("prices");

let addCart= document.getElementById("btn-add-cart");
addCart.addEventListener("submit", ()=>{
  shopData.push({
    id: 'T',
    name: "names.value",
    price: "prices.value",
    img: "image.value",
    desc: "description.value"
  })
  console.log(shopData.length)
})



