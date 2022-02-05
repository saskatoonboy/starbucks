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

drinks.tradMisto = tradMisto;
drinks.blondeRoast = blondeRoast;
drinks.pikeRoast = pikeRoast;
drinks.decafePikeRoast = decafePikeRoast;
drinks.signatureRoast = signatureRoast;
drinks.americano = americano;
drinks.irishCreamAmericano = irishCreamAmericano;
drinks.brownSugarOatAmericano = brownSugarOatAmericano;
drinks.americanoMisto = americanoMisto;
