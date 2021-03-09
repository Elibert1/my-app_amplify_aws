let billAmount = 43.76;

function gratuity(theActualBill){        //Gratutity function that multiplies
    return theActualBill * 0.2;         // the value of theActualBill by 20%
}

function totalWithGrat(value){       //the function takes in the amount as an argument (value)
return gratuity(value) + value;     //which then adds the returned value to the bill amount in line 1
}
//.toFixed(2) puts a fixed decimal point to only 2 places (ie: 120.00)
console.log("Your total including gratuity is:" + '$' + totalWithGrat(billAmount).toFixed(2));

//back tick version of the above console.log allows ... 
console.log(`Your total bill including gratuity is $${totalWithGrat(billAmount).toFixed(2)}`);