
function hotChocolate() {

    let drink = mocha();
    drink.name = 'Hot Chocolate';
    drink.shots.set(0);
    return drink;

}

function whiteHotChocolate() {

    let drink = whiteMocha();
    drink.name = 'White Hot Chocolate';
    drink.shots.set(0);
    return drink;

}

function peppermintHotChocolate() {

    let drink = hotChocolate();
    drink.name = 'Peppermint Hot Chocolate';
    drink.syrups['Peppermint'].set(4);
    drink.topping['Chocolate Curls'].set(true);
    return drink;
}

function peppermintWhiteHotChocolate() {

    let drink = whiteHotChocolate();
    drink.name = 'Peppermint White Hot Chocolate';
    drink.syrups['Peppermint'].set(4);
    drink.topping['Chocolate Curls'].set(true);
    return drink;
}

function steamedAppleJuice() {

    let drink = new Drink();
    drink.name = 'Steamed Apple Juice';
    drink.foam.set(0);
    return drink;

}

function caramelAppleSpice() {

    let drink = steamedAppleJuice();
    drink.name = 'Caramel Apple Spice';
    drink.syrups['Cinnamon Dolce'].set(4);
    drink.topping.whip.set(2);
    drink.topping.caramel.set(2);
    return drink;

}

function steamedMilk() {

    let drink = latte();
    drink.name = 'Steamed Milk';
    drink.shots.set(0);
    return drink;

}

function pistachioCreme() {

    let drink = pistachioLatte();
    drink.name = 'Pistatio Cream';
    drink.shots.set(0);
    return drink;

}

function caramelBruleCreme() {

    let drink = caramelBruleLatte();
    drink.name = 'Caramel Brule Cream';
    drink.shots.set(0);
    return drink;

}

function chestnutPralineCreme() {

    let drink = chestnutPralineLatte();
    drink.name = 'Chestnut Praline Cream';
    drink.shots.set(0);
    return drink;

}

function vanillaCreme() {

    let drink = steamedMilk();
    drink.name = 'Vanilla Creme';
    drink.syrups['Vanilla'].set(4);
    drink.topping.whip.set(2);
    return drink;

}

drinks.hotChocolate = hotChocolate;
drinks.whiteHotChocolate = whiteHotChocolate;
drinks.peppermintHotChocolate = peppermintHotChocolate;
drinks.peppermintWhiteHotChocolate = peppermintWhiteHotChocolate;
drinks.caramelAppleSpice = caramelAppleSpice;
drinks.steamedAppleJuice = steamedAppleJuice;
drinks.steamedMilk = steamedMilk;
drinks.pistachioCreme = pistachioCreme;
drinks.caramelBruleCreme = caramelBruleCreme;
drinks.chestnutPralineCreme = chestnutPralineCreme;
drinks.vanillaCreme = vanillaCreme;
