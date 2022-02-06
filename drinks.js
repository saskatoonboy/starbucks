const icedChance = 0.5;

function iceIt(drink) {

    const rand = Math.random();
    if (rand > drink) {

        drink.temp.set(0);
        drink.name = 'Iced ' + drink.name;

    }
    
}

const drinkChance = {

    tradMisto : 36,
    blondeRoast : 36,
    pikeRoast : 36,
    decafePikeRoast : 36,
    signatureRoast : 36,
    americano: 45,
    irishCreamAmericano: 45,
    brownSugarOatAmericano: 45,
    americanoMisto: 45,
    espresso: 45,
    espressoConPanna: 45,
    flatWhite: 45,
    honeyAlmondFlatWhite: 45,
    latte: 18,
    pistachioLatte: 18,
    sugarCookieOatLatte: 18,
    caramelBruleLatte: 18,
    chestnutPralineLatte: 18,
    cinnamonDolceLatte: 18,
    caramelMacchiato: 18,
    mocha: 18,
    whiteMocha: 18,
    peppermintWhiteMocha: 18,
    peppermintMocha: 18,
    hotChocolate: 18,
    whiteHotChocolate: 18,
    peppermintHotChocolate: 18,
    peppermintWhiteHotChocolate: 18,
    caramelAppleSpice: 20,
    steamedAppleJuice: 20,
    pistachioCreme: 18,
    caramelBruleCreme: 18,
    vanillaCreme: 18,
    chestnutPralineCreme: 18,
    earlGreyTea: 15,
    chaiTea: 15,
    royalEnglishBreakfastTea: 15,
    jadeCitrusMintTea: 15,
    emperorsCloudAndMistTea: 15,
    mintMajestyTea: 15,
    peachTranquilityTea: 15,
    honeyCitrusMintTea: 15,
    londonFog: 15,
    royalEnglishBreakfastTeaLatte: 15,
    chaiTeaLatte: 15,
    matchaTeaLatte: 15,
    icedCoffee: 20,
    icedCoffeeWithMilk: 20,
    coldBrew: 20,
    irishCreamColdBrew: 20,
    saltedCaramelCreamColdBrew: 20,
    vanillaSweetCreamColdBrew: 20,
    icedBrownSugarOatShakenEspresso: 20,
    icedShakenEspresso:20,
    icedBlackTea: 20,
    icedBlackTeaLemonade: 20,
    icedGreenTea: 20,
    icedGreenTeaLemonade: 20,
    icedPeachGreenTea: 20,
    icedPeachGreenTeaLemonade: 20,
    icedPassionTangoTea: 20,
    icedPassionTangoTeaLemonade: 20,
    kiwiStarfruitRefresher: 15,
    kiwiStarfruitLemonade: 15,
    starDrink: 15,
    mangoDragonfruitRefresher: 15,
    mangoDragonfruitLemonade: 15,
    dragonDrink: 15,
    strawberryAcaiRefresher: 15,
    strawberryAcaiLemonade: 15,
    strawberryCoconutDrink: 15,
    coldMilk: 15,
    lemonade: 15,
    blendedStrawberryLemonade: 15,
    pistachioFrappuccino: 6,
    mochaFrappuccino: 6,
    coffeeFrappuccino: 6,
    caramelFrappuccino: 6,
    espressoFrappuccino: 6,
    javaChipFrappuccino: 6,
    chaiCreamFrappuccino: 6,
    whiteMochaFrappuccino: 6,
    cafeVanillaFrappuccino: 6,
    matchaCreamFrappuccino: 6,
    caramelBruleFrappuccino: 6,
    pistachioCreamFrappuccino: 6,
    sugarCookieOatFrappuccino: 6,
    chestnutPralineFrappuccino: 6,
    peppermintMochaFrappuccino: 6,
    strawberryCreamFrappuccino: 6,
    vanillaBeanCreamFrappuccino: 6,
    caramelBruleCreamFrappuccino: 6,
    mochaCookieCrumbleFrappuccino: 6,
    caramelRibbonCrunchFrappuccino: 6,
    sugarCookieCreamOatFrappuccino: 6,
    whiteChocolateCreamFrappuccino: 6,
    chestnutPralineCreamFrappuccino: 6,
    peppermintMochaCreamFrappuccino: 6,
    peppermintWhiteMochaFrappuccino: 6,
    pistachioFrappuccino: 6,
    caramelRibbonCrunchCreamFrappuccino: 6,
    doubleChocolatyChipCreamFrappuccino: 6,
    peppermintWhiteChocolateCreamFrappuccino: 6,

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
