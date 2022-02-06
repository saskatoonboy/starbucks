
function pistachioFrappuccino() {

    let drink = new Drink();
    drink.name = 'Pistachio Frappaccino'
    drink.milk.set('3%');
    drink.foam.set(0);
    drink.topping.whip.set(2);
    drink.topping['Salted Brown Butter'].set(2);
    drink.syrups['Pistachio'].set(2);
    return drink;

}

function pistachioCreamFrappuccino() {

    let drink = new pistachioFrappuccino();
    drink.name = 'Pistachio Cream Frappuccino'
    return drink;

}

function sugarCookieOatFrappuccino() {

    let drink = new Drink();
    drink.name = 'Sugar Cookie Oat Frappaccino'
    drink.milk.set('Oat');
    drink.foam.set(0);
    drink.topping.whip.set(2);
    drink.topping['Red and Green Sprinkles'].set(2);
    drink.syrups['Sugar Cookie'].set(2);
    return drink;

}

function sugarCookieCreamOatFrappuccino() {

    let drink = new sugarCookieOatFrappuccino();
    drink.name = 'Sugar Cookie Oat Cream Frappuccino'
    return drink;

}

function chestnutPralineFrappuccino() {

    let drink = new Drink();
    drink.name = 'Chestnut Praline Frappaccino'
    drink.milk.set('3%');
    drink.foam.set(0);
    drink.topping.whip.set(2);
    drink.topping['Chestnut Praline'].set(2);
    drink.syrups['Chestnut Praline'].set(2);
    return drink;

}

function chestnutPralineCreamFrappuccino() {

    let drink = new chestnutPralineFrappuccino();
    drink.name = 'Chestnut Praline Cream Frappuccino'
    return drink;

}

function caramelBruleFrappuccino() {

    let drink = new Drink();
    drink.name = 'Caramel Brule Frappaccino'
    drink.milk.set('3%');
    drink.foam.set(0);
    drink.topping.whip.set(2);
    drink.topping['Caramel Brule'].set(2);
    drink.syrups['Caramel Brule'].set(2);
    return drink;

}

function caramelBruleCreamFrappuccino() {

    let drink = new caramelBruleFrappuccino();
    drink.name = 'Caramel Brule Cream Frappuccino'
    return drink;

}

function caramelFrappuccino() {

    let drink = new Drink();
    drink.name = 'Caramel Frappaccino'
    drink.milk.set('3%');
    drink.foam.set(0);
    drink.topping.whip.set(2);
    drink.topping['caramel'].set(2);
    drink.syrups['Caramel'].set(2);
    return drink;

}

function cafeVanillaFrappuccino() {

    let drink = new Drink();
    drink.name = 'Cafe Vanilla Frappaccino'
    drink.milk.set('3%');
    drink.foam.set(0);
    drink.topping.whip.set(2);
    drink.vanillabean.set(3);
    return drink;

}

function vanillaBeanCreamFrappuccino() {

    let drink = new cafeVanillaFrappuccino();
    drink.name = 'Vanilla Bean Cream Frappuccino'
    return drink;

}

function coffeeFrappuccino() {

    let drink = new Drink();
    drink.name = 'Coffee Frappaccino'
    drink.milk.set('3%');
    drink.foam.set(0);
    return drink;

}

function espressoFrappuccino() {

    let drink = coffeeFrappuccino();
    drink.name = 'Espresso Frappuccino';
    drink.shots.set(1);
    return drink;

}

function whiteMochaFrappuccino() {

    let drink = new Drink();
    drink.name = 'White Mocha Frappaccino'
    drink.milk.set('3%');
    drink.foam.set(0);
    drink.topping.whip.set(2);
    drink.syrups['White Mocha'].set(2);
    return drink;

}

function mochaFrappuccino() {

    let drink = new Drink();
    drink.name = 'Mocha Frappaccino'
    drink.milk.set('3%');
    drink.foam.set(0);
    drink.topping.whip.set(2);
    drink.syrups['Mocha'].set(2);
    return drink;

}

function caramelRibbonCrunchFrappuccino() {

    let drink = new Drink();
    drink.name = 'Caramel Ribbon Crunch Frappaccino'
    drink.milk.set('3%');
    drink.foam.set(0);
    drink.topping.whip.set(2);
    drink.syrups['Dark Caramel'].set(2);
    drink.topping.caramel.set(2);
    drink.topping['Caramel Crunch'].set(2);
    return drink;

}

function caramelRibbonCrunchCreamFrappuccino() {

    let drink = new caramelRibbonCrunchFrappuccino();
    drink.name = 'Caramel Ribbon Crunch Cream Frappuccino'
    return drink;

}

function javaChipFrappuccino() {

    let drink = mochaFrappuccino();
    drink.name = 'Java Chip Frappuccino';
    drink.frapchips.set(3);
    drink.topping.mocha.set(2);
    return drink;

}

function mochaCookieCrumbleFrappuccino() {

    let drink = javaChipFrappuccino();
    drink.topping['Cookie Crumbles'].set(2);
    return drink;

}

function peppermintMochaFrappuccino() {

    let drink = mochaFrappuccino();
    drink.name = 'Peppermint Mocha Frappuccino';
    drink.syrups['Peppermint'].set(2);
    drink.topping['Chocolate Curls'].set(2);
    return drink;

}

function peppermintWhiteMochaFrappuccino() {

    let drink = whiteMochaFrappuccino();
    drink.name = 'Peppermint White Mocha Frappuccino';
    drink.syrups['Peppermint'].set(2);
    drink.topping['Chocolate Curls'].set(2);
    return drink;

}

function peppermintWhiteChocolateCreamFrappuccino() {

    let drink = peppermintWhiteMochaFrappuccino();
    drink.name = 'Peppermint White Chocolate Cream Frappuccino';
    return drink;

}

function peppermintMochaCreamFrappuccino() {

    let drink = peppermintMochaFrappuccino();
    drink.name = 'Peppermint Mocha Cream Frappuccino';
    return drink;

}

function whiteChocolateCreamFrappuccino() {

    let drink = whiteMochaFrappuccino();
    drink.name = 'White Chocolate Cream Frappuccino';
    return drink;

}

function chocolateCookieCrumbleFrappuccino() {

    let drink = mochaCookieCrumbleFrappuccino();
    drink.name = 'Chocolate Cookie Crumble Frappuccino'
    return drink.name;

}

function doubleChocolatyChipCreamFrappuccino() {

    let drink = javaChipFrappuccino();
    drink.name = 'Double Chocolaty Cream Frappuccino'
    return drink.name;

}

function matchaCreamFrappuccino() {

    let drink = coffeeFrappuccino();
    drink.name = 'Matcha Cream Frappucino';
    drink.matcha.set(3);
    drink.syrups['Classic'].set(2);
    return drink;

}

function chaiCreamFrappuccino() {

    let drink = coffeeFrappuccino();
    drink.name = 'Chai Cream Frappucino';
    drink.syrups['Chai'].set(2);
    return drink;

}

function strawberryCreamFrappuccino() {

    let drink = coffeeFrappuccino();
    drink.name = 'Strawberry Cream Frappucino';
    drink.strawberrypuree.set(2);
    drink.syrups['Classic'].set(2);
    return drink;

}

drinks.pistachioFrappuccino = pistachioFrappuccino;
drinks.mochaFrappuccino = mochaFrappuccino;
drinks.coffeeFrappuccino = coffeeFrappuccino;
drinks.caramelFrappuccino = caramelFrappuccino;
drinks.espressoFrappuccino = espressoFrappuccino;
drinks.javaChipFrappuccino = javaChipFrappuccino;
drinks.chaiCreamFrappuccino = chaiCreamFrappuccino;
drinks.whiteMochaFrappuccino = whiteMochaFrappuccino;
drinks.cafeVanillaFrappuccino = cafeVanillaFrappuccino;
drinks.matchaCreamFrappuccino = matchaCreamFrappuccino;
drinks.caramelBruleFrappuccino = caramelBruleFrappuccino;
drinks.pistachioCreamFrappuccino = pistachioCreamFrappuccino;
drinks.sugarCookieOatFrappuccino = sugarCookieOatFrappuccino;
drinks.chestnutPralineFrappuccino = chestnutPralineFrappuccino;
drinks.peppermintMochaFrappuccino = peppermintMochaFrappuccino;
drinks.strawberryCreamFrappuccino = strawberryCreamFrappuccino;
drinks.vanillaBeanCreamFrappuccino = vanillaBeanCreamFrappuccino;
drinks.caramelBruleCreamFrappuccino = caramelBruleCreamFrappuccino;
drinks.mochaCookieCrumbleFrappuccino = mochaCookieCrumbleFrappuccino;
drinks.caramelRibbonCrunchFrappuccino = caramelRibbonCrunchFrappuccino;
drinks.sugarCookieCreamOatFrappuccino = sugarCookieCreamOatFrappuccino;
drinks.whiteChocolateCreamFrappuccino = whiteChocolateCreamFrappuccino;
drinks.chestnutPralineCreamFrappuccino = chestnutPralineCreamFrappuccino;
drinks.peppermintMochaCreamFrappuccino = peppermintMochaCreamFrappuccino;
drinks.peppermintWhiteMochaFrappuccino = peppermintWhiteMochaFrappuccino;
drinks.chocolateCookieCrumbleFrappuccino = pistachioFrappuccino;
drinks.caramelRibbonCrunchCreamFrappuccino = caramelRibbonCrunchCreamFrappuccino;
drinks.doubleChocolatyChipCreamFrappuccino = doubleChocolatyChipCreamFrappuccino;
drinks.peppermintWhiteChocolateCreamFrappuccino = peppermintWhiteChocolateCreamFrappuccino;
