var Mark = {
    fullName : 'Mark Thomas',
    mass : '69',
    height : '1.75',
    calcBMI : function(){
       this.BMI = this.mass / (this.height * this.height);
       return this.BMI;
    }
}
var John = {
    fullName : 'John Wani',
    mass : '54',
    height : '1.52',
    calcBMI : function(){
        this.BMI = this.mass / (this.height * this.height)
        return(this.BMI);
    }
}

Mark.calcBMI();
John.calcBMI();
console.log(Mark);
console.log(John);
if (Mark.BMI > John.BMI){
    console.log(Mark.fullName + ' has higher BMI then John ' + Mark.BMI)
}
else if (Mark.BMI < John.BMI){
    console.log(John.fullName + ' has higher BMI then Mark ' + John.BMI)
}
else {
    console.log(John.fullName + ' has the same BMI as of ' + Mark.fullName)
}