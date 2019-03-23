var bill = [124, 48, 268];
function calculateTip(bill) {
    var percentage;
    if (bill < 50) {
        percentage = .2;
    }
    else if (bill > 50 && bill < 200) {
        percentage = .15;
    }
    else {
        percentage = .1;
    }
    return percentage * bill;
}
var tips = [calculateTip(bill[0]), 
            calculateTip(bill[1]),
            calculateTip(bill[2])];

var finalamount = [bill[0] + tips[0],
                   bill[1] + tips[1],
                   bill[2] + tips[2]];
console.log(tips, finalamount);                                                
          

