console.log("start")
import foodData from "./data.json" assert {type: "json"};

let Mode ={
  descData: foodData,

  init: function(data){
    this.descData=data;
  },

  sendData: function() {
    return this.descData;
  }

}

let view={
  init:function () {
    this.render();
  },
  buildFoodTemplate: function (data) {
    return `
  <div id="${data.id}">
            <h3 class="${data.food_name}">${data.food_name}</h3>
            <h4 class="food__item__price">${data.price}</h4>
            <p id="food1__item__info">${data.food_description}</p>
            <button class="add__food__button">ADD</button>
      </div>
    `;
  },

  buildView: function (params) {
    let tempData=octopus.getData();
    
    document.getElementById("food__items__description").innerHTML=`${tempData.map(this.buildFoodTemplate).join("")}`;
  },
  render: function(){
    this.buildView();
  }
}

let octopus={
  init: function(){
    Mode.init(foodData);
    view.render();
  },
  getData: function(){
    return Mode.descData;
  }
}
octopus.init();

console.log("End")