var firstName = 'Dan';
var age = 28;

console.log(firstName + ' ' + age);

var job, isMarried;

job = 'teacher';
isMarried = false;

console.log(firstName + ' is a '+ age + ' year old '+ job + '. Is he married? ' + isMarried);

age = 'twenty eight';

var year, yearNel, yearArp;
year = 2020;
yearNel = year - 28;
yearArp = year - 15;

console.log(yearNel);

var now = 2018;

console.log( now + 2);

var firstName = 'John';
var age = 16;
var civilStatus = 'single';

if (civilStatus === 'married') {
    console.log(firstName + ' is married!');
} else {
    console.log(firstName + ' will hopefully marry soon :)');
}

var isMarried = true;

if (isMarried) {
    console.log(firstName + 'is married!');
} else {
    console.log(firstName + 'will hopefully marry soon :)');
}

if (age < 13) {
    console.log(firstName + 'ís a boy.');
} else if (age >= 13 && age <20) {
    console.log(firstName + 'is a teenager.');
} else {
    console.log(firstName + 'is a man.');
}

age >=16 ? console.log(firstName + ' drinks beer ') : console.log(firstName + ' drinks juice ');
var drink = age >= 18 ? 'beer' : 'juice';
console.log(drink);

var job = 'teacher';
switch (job) {
    case 'teacher':
    console.log(firstName + ' teches kids how to code');
    break;
    case 'driver':
    console.log(firstName + ' drives car how to code');
    break;
    default:
    console.log(firstName + ' does somethig else');
}

function calculateAge(birthYear) {
    return 2019 - birthYear;
}

var ageJohn = calculateAge(1990);
var ageNel = calculateAge(1997); 
console.log(ageJohn, ageNel);

function yearsUntilRetirement(birthYear, firstName) {
    var age = calculateAge(birthYear);
    var retirement = 65 - age;

    if (retirement > 0){
    console.log(firstName + ' retires in ' + retirement + 'years' );
}
else{
    console.log(firstName + ' is already retired ')
    }
}

yearsUntilRetirement(1990, 'John');

var whatDoYouDo = function(job, firstName) {
    switch(job) {
        case 'teacher':
        return(firstName + ' teches kids how to code');
        
        case 'driver':
        return(firstName + ' drives car how to code');
        
        default:
        return(firstName + ' does somethig else');
    }
} 

console.log(whatDoYouDo('teacher','John'));
console.log(whatDoYouDo('driver','Jane'));




