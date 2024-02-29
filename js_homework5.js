// ДЗ 1
let chair = {
    width: 50,
    height: 120,
    weight: 5,
    getInfo: function(){
        for (let key in this){
            if(typeof this[key] == "function"){
                continue
            }
            console.log(key + ":" + this[key])
        }  
    }
}
chair.getInfo()

chair.color = "black"
chair.material = "wood"
chair.patern = "dots"
chair.upholstery = "leather"
console.log("----------------")
chair.getInfo()

// ДЗ 2

let services = {
    "стрижка": "60 грн" ,
    "гоління": "80 грн",
    "миття голови": "100 грн",
    price: function() {
        let sum = 0
        for (let key in this){
            if (typeof this[key] == "function"){
                continue
            }
            sum+=parseFloat(this[key])
        }
        console.log("Сума: "+sum);
    },
    minPrice: function(){
        let x = Object.values(this)
        let arr = []
        for (let key in x){
            if (typeof x[key] == "function"){
                continue
            }
            arr.push(parseFloat(x[key]))
        }
        //How i've done this https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/min
        console.log("Мінімальна ціна: " + Math.min(...arr))
    },
    maxPrice: function(){
        let x = Object.values(this)
        let arr = []
        for (let key in x){
            if (typeof x[key] == "function"){
                continue
            }
            arr.push(parseFloat(x[key]))

        }
        //How i've done this https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/min
        console.log("Максимальна ціна: " + Math.max(...arr))
    }
};

services.price()
services.minPrice()
services.maxPrice()

console.log('---New elements---')

services['Розбити скло'] = "500 грн"
services['покраска'] = "1500 грн"
services['укладка'] = "200.5 грн"
services['сушка'] = "30 грн"

services.price()
services.minPrice()
services.maxPrice()

