let shop= document.getElementById("shop");
console.log(shop);

let basket= JSON.parse(localStorage.getItem("data")) || [];

let generateShop= ()=>{
  shop.innerHTML =shopData.map((x)=>{
    let {id, name, desc, price,img}=x;
    let search= basket.find((x)=>x.id===id) || [];
    return`
    <div id="product-id-${id}" class="items">
      <img  width="219" src="${img}">
      <div class="details">
        <h3>${name}</h3>
        <p>${desc}</p>
        <div class="price-quantity">
          <h2>$ ${price}</h2>
          <div class="button">
           <i onclick="decrement(${id})" class="bi bi-dash-lg"></i>
           <div id="${id}" class="quantity">
            ${search.item === undefined? 0: search.item}
           </div>
           <i onclick="increment(${id})" class="bi bi-plus-lg"></i>
          </div>
        </div>
      </div>
    </div>`
  }).join("");
};

generateShop();



let increment=(id)=>{
  selectedItem= id;
  let search= basket.find((x)=>x.id=== selectedItem.id)
  if (search === undefined) {
    basket.push({
      id: selectedItem.id,
      item: 1
    })
  } else {
    search.item+=1
  }
  console.log({basket})
  update(selectedItem.id)
  localStorage.setItem("data", JSON.stringify(basket))
}

let decrement=(id)=>{
  selectedItem= id;
  let search= basket.find((x)=>x.id=== selectedItem.id)
  if (search === undefined) return;
  else if (search === 0) return;
   else {
    search.item--
  }
  
  
  console.log({basket})
  update(selectedItem.id)
  basket= basket.filter((x)=>x.item !==0)
  localStorage.setItem("data", JSON.stringify(basket))
}

let calculation=()=>{
  let cartIcon = document.getElementById("cart-number");
  cartIcon.innerHTML= basket.map((x)=>x.item).reduce((x,y)=>x+y, 0)
} 
calculation()
