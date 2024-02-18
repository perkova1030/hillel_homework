
//ДЗ 1
let star = ""
for (var i=0; i<10; i++) {
    star +="*"
    console.log(star)
}

//ДЗ 1.1 c функцией
function printStars(numbersOfStars,symbol){
    let star = ""
    for (var i=0; i<numbersOfStars; i++) {
        star +=symbol
        console.log(star)
    }
}
printStars(10,"*")

//If you want to draw your own number of the stars ->
let numbersOfStars = prompt("Fill with number")
if (+numbersOfStars == numbersOfStars && +numbersOfStars>0){
    let symbol = prompt("Fill with symbol")
    printStars(numbersOfStars,symbol)
}
else {
    console.log("Fill the number")
}


//ДЗ 2
let sum = 0;
for (let i = 1; i<=100; i++) {
    if (i%3 !== 0){
        sum +=i
    }
}
console.log(sum)

//ДЗ 3
function pow (x, y) {
    let result = x
    for (let i=1; i<y; i++){
        result*=x  
    }
    return result
}
let finish = pow(5,5)
console.log(finish)

