var age = prompt("Вкажіть ваш вік", "18");

if (+age == age) {
    age = +age
    if (age <=0) {
        console.log("The number should be more than 1");
    }
    else {
        switch (age) {
            case 1:
            case 21:
            case 31:
            case 41:
            case 51:
            case 61:
            case 71:
            case 81:
            case 91:
            case 101:
                console.log("рік")
                break
        }
        
        if ((age >=2 && age <= 4) || (age >=22 && age <= 24) || (age >=32 && age <= 34) || (age >=42 && age <= 44) || (age >=52 && age <= 54) || (age >=62 && age <= 64) || (age >=72 && age <= 74) || (age >=82 && age <= 84) || (age >=92 && age <= 94) || (age >=102 && age <= 104)) {
            console.log("роки")
        }
        if ((age >=5 && age <=20) || (age >=25 && age <=30) || (age >=35 && age <=40) || (age >=45 && age <=50) || (age >=55 && age <=60) || (age >=65 && age <=70) || (age >=75 && age <=80) || (age >=85 && age <=90) || (age >=95 && age <=100) || (age >=105 && age <=110)) {
            console.log("років")
        }
        if (age >=111) {
            console.log("Who are you?")
        }
    }
}
else {
    console.log ("You need to type a number")
}
