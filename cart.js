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
        document.getElementsByClassName('items__description')[0]
        .addEventListener('click', (event) => {
          this.handleEvent(event);
        });
    },
    handleEvent(event) {
        let dishClassName = event.target.parentElement.className;
        let category = dishClassName.split(' ')[0];
      if (event.target.innerHTML === 'Add')
     {
      octopus.addToCart(foodData[category][0]);
      }
    }
    ,
    buildFoodTemplate(data){
        return ` 
        <div class="food__item__in__cart">
            <h3 class="food__item__name">${data.id}</h3>
            <h4 class="food__item__price">${data.count*data.price}</h4>
    </div>
    `;
    }
    ,
    buildCartView(){
        var cartItems=octopus.octSendData();
        document.getElementById("cart__empty__container").innerHTML=`${cartItems.map(this.buildFoodTemplate).join("")}`;
    }
    ,render(cartItems){
        let cartView=this.buildCartView();
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
        return this.items;
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