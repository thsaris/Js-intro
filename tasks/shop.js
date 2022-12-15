console.clear();

const currency = 'EUR';
const prekes = [
    {
        name: 'Bananas',
        price: 2,
        inStock: 10
    },
    {
        name: 'Agurkas',
        price: 3,
        inStock: 10
    },
    {
        name: 'Pomidoras',
        price: 1.57,
        inStock: 30
    },
];

function shop(prekes, currency) {
    console.log("MUSU PARDUOTUVE:");
    console.log(" ----------------");
    let totalPrice = 0;
    for (let i = 0; i < prekes.length; i++) {
        console.log(`${prekes[i].name} kainuoja ${prekes[i].price.toFixed(2)} ${currency} ir turime ju ${prekes[i].inStock} vienetu.`);
        totalPrice += prekes[i].price * prekes[i].inStock;
    }
    console.log("----------------");
    console.log(`Viso asortimento kaina: ${totalPrice.toFixed(2)} ${currency}.`);
}

shop(prekes, currency);


//console.log('MUSU PARDUOTUVE:');
//console.log('----------------');
//console.log(`1) Bananas kainuoja 2.00 EUR ir turime ju 10 vienetu.`);
//console.log(`2) Agurkas kainuoja 3.00 EUR ir turime ju 10 vienetu.`);
//console.log(`3) Pomidoras kainuoja 1.57 EUR ir turime ju 30 vienetu.`);
//console.log('----------------');
//console.log(`Viso asortimento kaina: 97.10 EUR.`);