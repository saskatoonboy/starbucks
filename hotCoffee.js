function tradMisto() {

    let misto = new Drink();
    misto.name = 'Trad Misto';
    misto.milk.set('2%');
    return misto

}

function blondeRoast() {
    let roast = new Drink();
    roast.name = "Blonde Roast";
    roast.foam.set(0);
    return roast;
}

function pikeRoast() {
    let roast = new Drink();
    roast.name = "Pike Roast";
    roast.foam.set(0);
    return roast;
}

function decafePikeRoast() {
    let roast = new Drink();
    roast.name = "Decaf Pike Roast";
    roast.foam.set(0);
    return roast;
}

function signatureRoast() {
    let roast = new Drink();
    roast.name = "Dark Roast";
    roast.foam.set(0);
    return roast;
}

function americano() {

    let drink = new Drink() 
    drink.name = 'Americano';
    drink.foam.set(0);
    drink.shots.set(3);
    drink.water.set(2);
    iceIt(drink);
    return drink;

}

function americanoMisto() {
    let drink = americano();
    drink.name = 'Americano Misto'
    drink.foam.set(2);
    drink.milk.set('2%');
    return drink;

}

function irishCreamAmericano() {
    let drink = americanoMisto();
    drink.name = 'Irish Cream Americano'
    drink.topping['Cocoa Powder'].set(2);
    drink.syrups['Irish Cream'].set(4);
    return drink;

}

function brownSugarOatAmericano() {
    let drink = americanoMisto();
    drink.name = 'Brown Sugar Oat Americano'
    drink.milk.set('Oat');
    drink.topping['Cinnamon'].set(2);
    drink.syrups['Brown Sugar'].set(4);
    drink.espresso.set('Blonde');
    return drink;

}

function latte() {

    let drink = new Drink();
    drink.name = 'Latte';
    drink.milk.set('2%');
    drink.shots.set(2);
    iceIt(drink);
    return drink;

}

function cappuccino() {
    let drink = latte();
    drink.name = 'Cappuccino';
    return drink;
}

function espresso() {

    let drink = new Drink();
    drink.name = 'Doppio Espresso';
    drink.shots.set(2);
    drink.size.set(-1);
    drink.cup.set(-1);
    iceIt(drink);
    return drink;

}

function espressoConPanna() {

    let drink = espresso();
    drink.name = 'Doppio Espresso Con Panna';
    drink.topping.whip.set(2);
    drink.temp.set(2);
    return drink;

}

function flatWhite() {

    let drink = new Drink();
    drink.name = 'Flat White';
    drink.milk.set('Whole');
    drink.espresso.ristretto = true;
    drink.shots.set(3);
    iceIt(drink);
    return drink;

}

function honeyAlmondFlatWhite() {

    let drink = flatWhite();
    drink.name = 'Honey Almond Flat White';
    drink.milk.set('Almond');
    drink.espresso.set('Blonde');
    drink.syrups['Honey Blend'].set(4);
    return drink;

}

function pistachioLatte() {

    let drink = latte();
    drink.name = 'Pistachio Latte';
    drink.syrups['Pistachio'].set(4);
    drink.topping['Salted Brown Butter'].set(2);
    return drink;

}

function sugarCookieOatLatte() {

    let drink = latte();
    drink.name = 'Sugar Cookie Oat Latte';
    drink.syrups['Sugar Cookie'].set(4);
    drink.milk.set("Oat");
    drink.topping['Red and Green Sprinkles'].set(2);
    return drink;

}

function caramelBruleLatte() {

    let drink = latte();
    drink.name = 'Caramel Brule Latte';
    drink.syrups['Caramel Brule'].set(4);
    drink.topping['Caramel Brule'].set(2);
    drink.topping.whip.set(2);
    return drink;

}

function chestnutPralineLatte() {

    let drink = latte();
    drink.name = 'Chestnut Praline Latte';
    drink.syrups['Chestnut Praline'].set(4);
    drink.topping['Chestnut Praline'].set(2);
    drink.topping.whip.set(2);
    return drink;

}

function cinnamonDolceLatte() {

    let drink = latte();
    drink.name = 'Cinnamon Dolce Latte';
    drink.syrups['Cinnamon Dolce'].set(4);
    drink.topping['Cinnamon Dolce'].set(2);
    drink.topping.whip.set(2);
    return drink;

}

function caramelMacchiato() {

    let drink = latte();
    drink.name = 'Caramel Macchiato';
    drink.syrups['Vanilla'].set(3);
    drink.topping.caramel.set(2);
    return drink;

}

function mocha() {

    let drink = latte();
    drink.name = 'Mocha';
    drink.syrups['Mocha'].set(4);
    drink.topping.whip.set(2);
    return drink;

}

function whiteMocha() {

    let drink = mocha();
    drink.name = 'White Mocha';
    drink.syrups['White Mocha'].set(4);
    drink.syrups['Mocha'].set(0);
    return drink;

}

function peppermintMocha() {

    let drink = mocha();
    drink.name = 'Peppermint Mocha';
    drink.syrups['Peppermint'].set(4);
    drink.topping['Chocolate Curls'].set(2);
    return drink;
}

function peppermintWhiteMocha() {

    let drink = whiteMocha();
    drink.name = 'Peppermint White Mocha';
    drink.syrups['Peppermint'].set(4);
    drink.topping['Chocolate Curls'].set(2);
    return drink;
}



drinks.tradMisto = tradMisto;
drinks.blondeRoast = blondeRoast;
drinks.pikeRoast = pikeRoast;
drinks.decafePikeRoast = decafePikeRoast;
drinks.signatureRoast = signatureRoast;
drinks.americano = americano;
drinks.irishCreamAmericano = irishCreamAmericano;
drinks.brownSugarOatAmericano = brownSugarOatAmericano;
drinks.americanoMisto = americanoMisto;
drinks.cappuccino = cappuccino;
drinks.espresso = espresso;
drinks.espressoConPanna = espressoConPanna;
drinks.flatWhite = flatWhite;
drinks.honeyAlmondFlatWhite = honeyAlmondFlatWhite;
drinks.latte = latte;
drinks.pistachioLatte = pistachioLatte;
drinks.caramelBruleLatte = caramelBruleLatte;
drinks.chestnutPralineLatte = chestnutPralineLatte;
drinks.sugarCookieOatLatte = sugarCookieOatLatte;
drinks.cinnamonDolceLatte = cinnamonDolceLatte;
drinks.caramelMacchiato = caramelMacchiato;
drinks.mocha = mocha
drinks.whiteMocha = whiteMocha;
drinks.peppermintMocha = peppermintMocha;
drinks.peppermintWhiteMocha = peppermintWhiteMocha;
