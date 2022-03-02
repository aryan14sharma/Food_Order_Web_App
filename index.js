let Mode ={
  descData=[
      {
          "id":1,
          "food_name":"Veg Platter",
          "food_image_link":"images/dish1.jpeg",
          "veg_status":true,
          "price": "699",
          "food_description":"An authentic veg platter with 3 pieces of Paneer Achari, 3 pieces of Hara Bhara, 3 pieces of Veg Seekh and 3 pieces of Malai Chaap."
      },
      {
          "id":2,
          "food_name":"Non-Veg Platter",
          "food_image_link":"images/dish2.jpeg",
          "veg_status":false,
          "price": "899",
          "food_description":"An authentic non veg platter with 3 pieces of Barnala Mathi Chicken Tikka, 3 pieces of Dhaniya Chicken, 3 pieces of Tawa Chicken and 3 pieces of Chicken Kebab."
      },
      {
          "id":3,
          "food_name":"Mixed Platter",
          "food_image_link":"images/dish3.jpeg",
          "veg_status":false,
          "price": "799",
          "food_description":"An authentic mixed platter with 3 pieces of Barnala Methi Chicken, 3 pieces of Chicken Kebab, 3 pieces of Hara Bhara and 3 pieces of Paneer Tikka."
      },
      {
          "id":4,
          "food_name":"Dhaniya Chicken Tikka",
          "food_image_link":"images/dish4.jpeg",
          "veg_status":false,
          "price": "249",
          "food_description":"Succulent chicken marinated & flavoured with fresh coriander, grilled to perfection"
      },
      {
          "id":5,
          "food_name":"Malai Chicken Tikka",
          "food_image_link":"images/dish5.jpeg",
          "veg_status":false,
          "price": "249",
          "food_description":"Tender chicken smeared in rich cream flavoured with herbs and spices"
      }
  ],
  init: function(data){
    this.descData=data;
  },

  sendData: function(params) {
    return this.descData;
  }

}

let view={
  init:function (params) {
    this.render();
  },
  buildFoodTemplate: function (data) {
    return `
  <div id="${data.id}">
            <h3 class="${data.food_name}">${data.food_name}</h3>
            <h4 class="food__item__price">${data.price}</h4>
            <p id="food1__item__info">${food_description}</p>
            <button class="add__food__button">ADD</button>
      </div>
    `;
  },

  buildView: function (params) {
    let tempData=controller.getData();
    
    document.getElementByID("food__items__description").innerHTML=`${tempData.map(this.buildFoodTemplate).join("")}`;
  },
  render: function(){
    this.buildFoodView();
  }
}

let octopus={
  init: function(){
    mode.init(descData);
    view.render();
  },
  getData: function(){
    return mode.descData;
  }
}