var greeting = (function (name) {
  console.log('hello' + name);
}('John'));

var buy = (function (item, item2) {
  console.log('You need to get ' + item + ' ' + item2);
}('soap', 'sand'));

var chicken = {
  calorie: 140,
  protien: 10,
  fats: 5,
};

function item(food) {
  food.push('saturated fats');
}

item(chicken);
console.log(chicken.fats);
