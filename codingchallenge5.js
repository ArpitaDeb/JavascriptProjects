var John={
    fullName: 'John Wani',
    bills : [124,48,268,180,42],
    tips:[],
    finalamount:[],

    calculateTip : function(){
        
        for (var i = 0; i< this.bills.length; i++)
        {
            var tipsPercentage;
            var bill = this.bills[i];
            
            if(bill< 50)
                {
                tipsPercentage = .2;
               }
            else if(bill>=50 && bill<200)
                {
                tipsPercentage = .15;
               }
            else if(bill> 200)
                {
                tipsPercentage = .10;
                }

        this.tips[i] = tipsPercentage*bill;
        this.finalamount[i] = bill +  this.tips[i];
        }
    }    
        
} 
John.calculateTip();

console.log(John.tips);
console.log(John.finalamount);

var Mark = {
    fullName : 'Mark David',
    bills: [77, 375, 110, 45],
    tips:[],
    finalamount:[],
    calculateTip: function(){
        for (var i=0; i< this.bills.length; i++)
        {
            var tipsPercentage;
            var bill = this.bills[i];

            if (bill<100)
            {tipsPercentage=.2}
            else if(bill>100 && bill<300)
            {tipsPercentage=.1}
            else if(bill>300)
            {tipsPercentage=.25}
            this.tips[i]= bill*tipsPercentage;
            this.finalamount[i]=bill + this.tips[i]; 
        }
    }
}
Mark.calculateTip();
console.log(Mark.tips);
console.log(Mark.finalamount);

function calctipsavg(tips){
    var sum = 0;
    
    for (var i=0; i<tips.length; i++){
        sum = sum + tips[i];
    }
   return sum/tips.length;
}
John.average = calctipsavg(John.tips);
Mark.average = calctipsavg(Mark.tips);
console.log(John);
console.log(Mark);
