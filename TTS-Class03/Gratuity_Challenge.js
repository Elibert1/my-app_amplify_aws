let billAmount = 43.76;

function gratuity(theActualBill){        //
    return theActualBill * 0.2;         //
}

function totalWithGrat(value){       //
return gratuity(value) + value;     //
}
console.log("Your total including gratuity is:" + '$' + totalWithGrat(billAmount).toFixed(2));
console.log(`Your total bill including gratuity is $${totalWithGrat(billAmount).toFixed(2)}`);