// ДЗ 1
function checkIsNan (value){
    return +value != value
}
let sumDigit = "9"

if (checkIsNan (sumDigit)) {
    console.log("Not a number")
}
else {
    console.log("Correct")
}


//ДЗ 2

function randomInDiapason (min,max){
    return Math.round(Math.random() * (max - min) + min)
}
function calculateRandomOddandEven (count){
    let quantityEven = 0
    let quantityOdd = 0
    for (let i=0;i<count;i++){
        let result = randomInDiapason(1,120)
        if(result%2==0){
            quantityEven++
        }
        else {
            quantityOdd++
        }
    }
    console.log("total quantity:"+count)
    console.log("even quantity:" + quantityEven)
    
    console.log("odd quantity:" + quantityOdd)
    
    console.log("percent of even's numbers:" + Math.round((quantityEven/count)*100))
    console.log("percent of odd's numbers:" + Math.round((quantityOdd/count)*100))
}
calculateRandomOddandEven(100)

