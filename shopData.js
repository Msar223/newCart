let shopData= [{
  id: "a",
  name: "Casual Shirt",
  price: 45,
  desc: "lerem iptum ghjjdv huhdhbdbf, hhdbjkdjdbhdhd bhfg vhjjh vhjvn gh",
  img: "images/images3.jpeg"
}, {
  id: "b",
  name: "Office Shirt",
  price: 100,
  desc: "lerem iptum ghjjdv huhdhbdbf, hhdbjkdjdbhdhd bhfg vhjjh vhjvn gh",
  img: "images/images2.jpeg"
}, {
  id: "c",
  name: "Men's Suit",
  price: 250,
  desc: "lerem iptum ghjjdv huhdhbdbf, hhdbjkdjdbhdhd bhfg vhjjh vhjvn gh",
  img: "images/images1.jpeg"}, {
    id: "d",
  name: "T-Shirt",
  price: 25,
  desc: "lerem iptum ghjjdv huhdhbdbf, hhdbjkdjdbhdhd bhfg vhjjh vhjvn gh",
  img: "images/images4.jpeg"
  }]
    

  
    
    let update =(id)=>{
      let search =basket.find((x)=>x.id === id)
      document.getElementById(id).innerHTML = search.item
      calculation()
    }

     