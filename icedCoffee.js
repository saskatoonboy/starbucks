
function coldBrew() {

    let drink = new Drink();
    drink.name = 'Cold Brew';
    drink.temp.set(0);
    drink.water.set(2);
    drink.foam.set(0);
    drink.ice.set(2);
    return drink;

}

function irishCreamColdBrew() {

    let drink = coldBrew();
    drink.name = 'Irish Cream Cold Brew';
    drink.topping.irishCreamColdFoam.set(2);
    drink.topping['Cocoa Powder'].set(2);
    drink.syrups['Irish Cream'].set(2);
    return drink;

}

function saltedCaramelCreamColdBrew() {

    let drink = coldBrew();
    drink.name = 'Salted Caramel Cold Foam Cold Brew';
    drink.topping.saltedCaramelCreamColdFoam.set(2);
    drink.syrups['Vanilla'].set(2);
    return drink;

}

function vanillaSweetCreamColdBrew() {

    let drink = coldBrew();
    drink.name = 'Vanilla Sweet Cream Cold Brew';
    drink.topping.vanillaSweetCream.set(2);
    drink.syrups['Vanilla'].set(2);
    return drink;

}

function icedCoffee() {

    let drink = new Drink();
    drink.name = 'Iced Coffee';
    drink.temp.set(0);
    drink.foam.set(0);
    drink.ice.set(2);
    drink.syrups['Classic'].set(4);
    return drink;

}

function icedCoffeeWithMilk() {

    let drink = icedCoffee();
    drink.name = 'Iced Coffee With Milk';
    drink.milk.set('2%');
    return drink;

}

function icedShakenEspresso() {

    let drink = icedCoffeeWithMilk();
    drink.name = 'Iced Shaken Espresso';
    drink.shots.set(3);
    return drink;

}

function icedBrownSugarOatShakenEspresso() {

    let drink = icedShakenEspresso();
    drink.name = 'Iced Brown Sugar Oat Shaken Espresso';
    drink.espresso.set('Blonde');
    drink.syrups['Classic'].set(0);
    drink.syrups['Brown Sugar'].set(4);
    drink.topping['Cinnamon'].set(2);
    drink.milk.set('Oat');
    return drink;

}

drinks.coldBrew = coldBrew;
drinks.irishCreamColdBrew = irishCreamColdBrew;
drinks.saltedCaramelCreamColdBrew = saltedCaramelCreamColdBrew;
drinks.vanillaSweetCreamColdBrew = vanillaSweetCreamColdBrew;
drinks.icedCoffee = icedCoffee;
drinks.icedCoffeeWithMilk = icedCoffeeWithMilk;
drinks.icedShakenEspresso = icedShakenEspresso;
drinks.icedBrownSugarOatShakenEspresso = icedBrownSugarOatShakenEspresso;
