var age = prompt("Вкажіть ваш вік", "18");

if (+age == age) {
    age = +age
    if (age <=0) {
        console.log("The number should be more than 1");
    }
    else {
        if(age >100){
            console.log("Who are you?")
        }
        else if(age % 10 == 1 && age !== 11){
            console.log( age + " рік")
        }
        else if((age % 10 > 1 && age % 10 < 5) && !(age >= 12 && age <= 14)){
            console.log(age + " роки")
        }
        else{
            console.log(age + " років")
        }
       
    }
}
else {
    console.log ("You need to type a number")
}