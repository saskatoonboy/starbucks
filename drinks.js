const drinkChance = {

    tradMisto : 4,
    blondeRoast : 4,
    pikeRoast : 4,
    decafePikeRoast : 4,
    signatureRoast : 4,
    americano: 5,
    irishCreamAmericano: 5,
    brownSugarOatAmericano: 5,
    americanoMisto: 5,

}

const drinks = {

}

let total = 0;
for (key in drinkChance) {

    total = total + drinkChance[key];

}

for (key in drinkChance) {

    drinkChance[key] = drinkChance[key]/total;

}
