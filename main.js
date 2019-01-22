var age=40;

if ((age >=1) && (age <=17)){
	console.log('Ucheba');
} else if ((age >= 18) && (age <= 64)){
	console.log('Rabota');
} else if ((age >= 65) && (age <=100)){
	console.log('Pensia');
} else {
	console.log('Enter correct age')
}

var array = [1,2,3,4,5,6,7,8,9];
var i;

for (i=1;i< (array.length + 1);i++){ 
switch (i) {
    case 1: 
    console.log(i,'Разработчик');
    break;
    case 2:
    case 3:
    case 4:
    console.log(i,'Разработчика');
    break;
    case 5:
    case 6:
    case 7:
    case 8:
    case 9:
    console.log(i, 'Разработчиков');
    break;

}
}

