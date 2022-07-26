var number =[1, 400, 13, 12, 14, 321, 123];
var i = 0;
var total = 0;
while(i < number.length){
    total = total + number[i];
    i = i + 1;
}
console.log(`total : ${total}`)