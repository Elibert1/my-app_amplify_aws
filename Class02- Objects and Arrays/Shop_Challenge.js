let list = ["pop tarts", "ramen noodles", "chips", "salsa", "coffee"];
list.push('fruit loops');
list[4]='fair trade coffee';
list.splice(2,2,'rice','beans'); //The first #2 is the destination and the second #2 is how many are being spliced.
let cart = [];

cart.push(list.pop());
cart.push(list.shift());
while (list.length > 0) {
    cart.push(list.pop());
}
cart.sort().reverse();
console.log("The items in cart contains: " + cart.join(','));