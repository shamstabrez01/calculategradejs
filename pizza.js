let numberofguest = 4;

if (numberofguest <= 2) {
  pizzasize = "small";
} else if (numberofguest <= 5) {
  pizzasize = "medium";
} else if (numberofguest <= 9) {
  pizzasize = "large";
}

console.log(pizzasize);
