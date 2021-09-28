function Product(name, price) {
  this.name = name;
  this.price = price;
}

function Food(name, price) {
  debugger;
  Product.call(this, name, price);
  debugger;
  this.category = "food";
}

const FUNCTION_CALL = () => console.log(new Food("cheese", 5).name);
