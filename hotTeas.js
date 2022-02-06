
function chaiTeaLatte() {

    let drink = new Drink();
    drink.name = 'Chai Tea Latte';
    drink.syrups['Chai'].set(4);
    drink.water.set(2);
    drink.milk.set('2%');
    drink.foam.set(2);
    iceIt(drink);
    return drink;

}

function chaiTea() {

    let drink = new Drink();
    drink.name = 'Chai Tea';
    drink.water.set(2);
    drink.foam.set(0);
    return drink;

}

function londonFog() {

    let drink = new Drink();
    drink.name = 'London Fog Tea Latte';
    drink.syrups['Vanilla'].set(4);
    drink.water.set(2);
    drink.milk.set('2%');
    drink.foam.set(2);
    iceIt(drink);
    return drink;

}

function earlGreyTea() {

    let drink = chaiTea();
    drink.name = 'Earl Grey Tea';
    return drink;

}

function royalEnglishBreakfastTea() {

    let drink = chaiTea();
    drink.name = 'Royal English Breakfast Tea';
    return drink;

}

function royalEnglishBreakfastTeaLatte() {

    let drink = new Drink();
    drink.name = 'Royal English Breakfast Tea Latte';
    drink.syrups['Liquid Cane Sugar'].set(4);
    drink.water.set(2);
    drink.milk.set('2%');
    drink.foam.set(2);
    iceIt(drink);
    return drink;

}

function matchaTeaLatte() {

    let drink = steamedMilk();
    drink.name = 'Matcha Tea Latte';
    drink.syrups['Liquid Cane Sugar'].set(4);
    drink.matcha.set(3);
    return drink;

}

function emperorsCloudAndMistTea() {

    let drink = chaiTea();
    drink.name = "Emperor's Cloud and Mist Tea";
    return drink;

}

function jadeCitrusMintTea() {

    let drink = chaiTea();
    drink.name = 'Jade Citrus Mint Tea';
    return drink;

}

function honeyCitrusMintTea() {

    let drink = new Drink();
    drink.name = 'Honey Citrus Mint Tea';
    drink.syrups['Honey Blend'].set(2);
    drink.water.set(2);
    drink.juice.lemonade.set(2);
    drink.foam.set(0);
    return drink;

}

function mintMajestyTea() {

    let drink = chaiTea();
    drink.name = 'Mint Majesty Tea';
    return drink;

}

function peachTranquilityTea() {

    let drink = chaiTea();
    drink.name = 'Peach Tranquility Tea';
    return drink;

}

drinks.earlGreyTea = earlGreyTea;
drinks.chaiTea = chaiTea;
drinks.royalEnglishBreakfastTea = royalEnglishBreakfastTea;
drinks.jadeCitrusMintTea = jadeCitrusMintTea;
drinks.emperorsCloudAndMistTea = emperorsCloudAndMistTea;
drinks.mintMajestyTea = mintMajestyTea;
drinks.peachTranquilityTea = peachTranquilityTea;
drinks.honeyCitrusMintTea = honeyCitrusMintTea;
drinks.londonFog = londonFog;
drinks.royalEnglishBreakfastTeaLatte = royalEnglishBreakfastTeaLatte;
drinks.chaiTeaLatte = chaiTeaLatte;
drinks.matchaTeaLatte = matchaTeaLatte;
