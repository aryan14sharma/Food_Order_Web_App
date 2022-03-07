import foodData from "./data.json" assert {type: "json"};

let mode={
    cartData:{
        dishes:[],
        total: 0,
        totalCount:0
      },
  init: function(data){
    this.cartData=data;
  },

  getData: function() {
    return this.cartData;
  },
  addItem: function (item) {
    console.log(item);
    if(this.countOfItem(item.id)==0){
        item.count=1;
        this.cartData.dishes.push(item);
    }
    else{
        let existItem=this.getItem(item.id);
        existItem.count+=1;
    }
    this.cartData.total+=item.price;
    this.totalCount+=1;
  },
  countOfItem(id){
      this.dishes.forEach(item => {
          if(item.id==id)return item.count;
      });
      return 0;
  },

  getItem(id){
    this.dishes.forEach(item => {
        this.dishes.forEach(item => {
            if(item.id==id)return item;
        });
        return null;
    });
  }
}

let view={
    
    init(){
        document.getElementsByClassName('add__food__button')[0]
        .addEventListener('click', (event) => {
            console.log(octopus.items);
          this.handleEvent(event);
        });
    },
   emptyCart() {
    const emptycart = `<div class="emptyCart">
            <h3 class="secondaryH3">Empty Cart</h3>
            <p class="lightWeightedText"></p>
            <div class="emptyCart">
              <p class="secondaryP">
                Good food is always cooking! Go ahead, order some yummy items from the menu.
              </p>
            </div>
          </div>`;
    return emptycart;
  },
   buildCart(cartItems) 
  {
    if (cartItems.totalItems == 0) {
      return emptyCart();
    }
    let cartHeader = this.buildCartHeader(cartItems.totalItems);
    let items = this.buildCartItems(cartItems.dishes);
    let cart = `
      <div class="cartItems">
        ${cartHeader}
        ${items}
        <div class="checkout">
          <div class="subtotal">
            <h4>Total</h4>
            <span>${cartItems.total}</span>
          </div>
          <div>
            <button>Checkout</button>
          </div>
        </div>
      </div>
    `;
    return cart;
  },
  
   buildCartHeader(len) {
    let header = ` <div>
            <h1>Cart</h1>
            <p>${len} ${len == 1 ? 'Item' : 'Items'}</p>
          </div>`;
    return header;
  },
  
   buildCartItems(dishes) {
    let items = ``;
    dishes.forEach((dish) => {
      items += `<div class="cartItem">

              <div>
                <h3>${dish.food_name}</h3>
                <p>${dish.subTotal}</p>
              </div>
              <button id="${dish.id}" class="secondaryButton" >
                  
                  <span class="quantity">${dish.quantity}</span>
                  
              </button>
            </div>
            `;
    });
    return items;
  },

    handleEvent(event) {
        let dishClassName = event.target.parentElement.className;
        let category = dishClassName.split(' ')[0];
        console.log(category);
      if (event.target.innerHTML === 'ADD')
     {
       console.log(foodData[category][0]);
       octopus.octAddItem(foodData[category][0]);
      }
    }
    
    ,render(cartItems){
        let cartView=this.buildCart(cartItems);
        document.getElementsByClassName("cart__empty__container").innerHTML=cartView;
    }
}

let octopus = {
    items:[],

    init(){
        this.octGetData();
        view.init();
    },

    octSendData(){
        return octopus.items;
    },

    octGetData(){
        this.items=mode.getData();
        this.octRender();
    }, 

    octRender(){
        view.render(this.items);
    },

    octAddItem(item){
        mode.addItem(item);
        this.octGetData();
    },

    octGetCount(itemid){
        return mode.countOfItem(itemid);
    },

    octGetItem(itemId){
        return mode.getItem(itemId);
    }
}

octopus.init();