
function kiwiStarfruitRefresher() {

    let drink = new Drink();
    drink.name = 'Kiwi Starfruit Refresher';
    drink.temp.set(0);
    drink.foam.set(0);
    drink.water.set(2);
    drink.ice.set(2);
    drink.refresher.kiwi.set(2);
    drink.inclusions.kiwi.set(2);
    return drink;

}

function kiwiStarfruitLemonade() {

    let drink = new kiwiStarfruitRefresher();
    drink.name = 'Kiwi Starfruit Lemonade';
    drink.water.set(0);
    drink.juice.lemonade.set(2);
    return drink;

}

function starDrink() {

    let drink = new kiwiStarfruitRefresher();
    drink.name = 'Star Drink';
    drink.water.set(0);
    drink.milk.set('Coconut');
    return drink;

}

function mangoDragonfruitRefresher() {

    let drink = new kiwiStarfruitRefresher();
    drink.name = 'Mango Dragonfruit Refresher';
    drink.refresher.kiwi.set(0);
    drink.inclusions.kiwi.set(0);
    drink.refresher.mango.set(2);
    drink.inclusions.mango.set(2);
    return drink;

}

function mangoDragonfruitLemonade() {

    let drink = new kiwiStarfruitLemonade();
    drink.name = 'Mango Dragonfruit Lemonade';
    drink.refresher.kiwi.set(0);
    drink.inclusions.kiwi.set(0);
    drink.refresher.mango.set(2);
    drink.inclusions.mango.set(2);
    return drink;

}

function dragonDrink() {

    let drink = new starDrink();
    drink.name = 'Dragon Drink';
    drink.refresher.kiwi.set(0);
    drink.inclusions.kiwi.set(0);
    drink.refresher.mango.set(2);
    drink.inclusions.mango.set(2);
    return drink;

}

function strawberryAcaiRefresher() {

    let drink = new kiwiStarfruitRefresher();
    drink.name = 'Strawberry Acai Refresher';
    drink.refresher.kiwi.set(0);
    drink.inclusions.kiwi.set(0);
    drink.refresher.strawberry.set(2);
    drink.inclusions.strawberry.set(2);
    return drink;

}

function strawberryAcaiLemonade() {

    let drink = new kiwiStarfruitLemonade();
    drink.name = 'Strawberry Acai Lemonade';
    drink.refresher.kiwi.set(0);
    drink.inclusions.kiwi.set(0);
    drink.refresher.strawberry.set(2);
    drink.inclusions.strawberry.set(2);
    return drink;

}

function strawberryCoconutDrink() {

    let drink = new starDrink();
    drink.name = 'Strawberry Coconut Drink';
    drink.refresher.kiwi.set(0);
    drink.inclusions.kiwi.set(0);
    drink.refresher.strawberry.set(2);
    drink.inclusions.strawberry.set(2);
    return drink;

}

function coldMilk() {

    let drink = new Drink();
    drink.name = 'Cold Milk';
    drink.milk.set('2%');
    drink.temp.set(0);
    drink.foam.set(0);
    return drink;

}

function lemonade() {

    let drink = new Drink();
    drink.name = 'Lemonade';
    drink.juice.lemonade.set(2);
    drink.temp.set(0);
    drink.foam.set(0);
    drink.ice.set(2);
    return drink;

}

function blendedStrawberryLemonade() {

    let drink = new Drink();
    drink.strawberrypuree.set(2);
    drink.syrups['Classic'].set(2);
    return drink;

}

drinks.kiwiStarfruitRefresher = kiwiStarfruitRefresher;
drinks.kiwiStarfruitLemonade = kiwiStarfruitLemonade;
drinks.starDrink = starDrink;
drinks.mangoDragonfruitRefresher = mangoDragonfruitRefresher;
drinks.mangoDragonfruitLemonade = mangoDragonfruitLemonade;
drinks.dragonDrink = dragonDrink;
drinks.strawberryAcaiRefresher = strawberryAcaiRefresher;
drinks.strawberryAcaiLemonade = strawberryAcaiLemonade;
drinks.strawberryCoconutDrink = strawberryCoconutDrink;
drinks.coldMilk = coldMilk;
drinks.lemonade = lemonade;
drinks.blendedStrawberryLemonade = blendedStrawberryLemonade;
