
// дз 1
let someArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
function randomizer (min,max){
   return Math.floor((Math.random() * max) + min);
}
function randomArray (arr){
    for (let i=0; i<arr.length;i++){
        let save = arr[i]
        let randomIndex = randomizer(0, arr.length-1)
        arr[i] = arr[randomIndex]
        arr[randomIndex] = save
    }
}
randomArray(someArr)
console.log(someArr)

// дз 2 
const company = {
    name: 'Велика Компанія',
    type:'Головна компанія',
    platform: 'Платформа для продажу квитків',
    sellsSolution: 'Рішення для продажу квитків',
    clients: [
        {
            name: 'Клієнт 1',
            type: 'subCompany',
            uses: 'ПО для продажу квитків',
            sells: 'Рішення для продажу квитків',
            partners: [
                {
                    name: 'Клієнт 1.1',
                    type: 'subSubCompany',
                    uses: 'Рішення для продажу квитків',
                    sells: 'Рішення для продажу квитків',
                },
                {
                    name: 'Клієнт 1.2',
                    type: 'subSubCompany',
                    uses: 'Рішення для продажу квитків',
                    sells: 'Рішення для продажу квитків',
                    partners: [
                        {
                            name: 'Клієнт 1.2.3',
                            type: 'subSubCompany',
                            uses: 'Рішення для продажу квитків',
                            sells: 'Рішення для продажу квитків',
                        }
                    ]
                }
            ]
        },
        {
            name: 'Клієнт 2',
            type: 'subCompany',
            uses: 'ПО для продажу квитків',
            sells: 'Рішення для продажу квитків'
        }
    ]
};

function findCompanyByName (companyName){
    if (company.name == companyName){
        return company
    }
    for(let i=0; i<company.clients.length; i++){
        if (company.clients[i].name == companyName){
          return company.clients [i]
        }
        let partners = company.clients[i].partners
        let j = 0;
        let sub = []
        while(partners){
            if(j >= partners.length && sub.length){
                partners = sub.shift();
                j = 0
            }
            else if (j >= partners.length || (sub.length == 0 && j >= partners.length)){
                break;
            }

            if(partners[j].name == companyName){
                return partners[j];
            }

            if(partners[j].partners){
                sub.push(partners[j].partners);
            }
            
            j++;
        }
    }
}
console.log(findCompanyByName('Клієнт 1.2'))

