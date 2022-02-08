class Drink {

    constructor(category) {

        this.size = new Size();
        this.espresso = new EspressoType();
        this.temp = new Temp();
        this.shots = new Shots();
        this.syrups = generateSyrups();
        this.milk = new Milk();
        this.foam = new RangeCustomization('Foam', 0);
        this.room = new RangeCustomization('Room', 2);
        this.water = new RangeCustomization('Water', 0);
        this.ice = new RangeCustomization('Ice', 0);
        this.sweeteners = generateSweeteners();
        this.topping = generateToppings();
        this.cup = new Size();
        this.juice = { apple: new RangeCustomization("Apple Juice", 0), peach: new RangeCustomization('Peach Blend', 0), lemonade: new RangeCustomization("Lemonade", 0) };
        this.matcha = new Sweetener('Matcha');
        this.tea = { green: new RangeCustomization("Green Tea", 0), passion: new RangeCustomization("Passion Tango Tea", 0), black: new RangeCustomization("Black Tea", 0) };
        this.vanillabean = new Sweetener('Vanilla Bean Powder');
        this.strawberrypuree = new RangeCustomization('Strawberry Puree', 0);
        this.refresher = { mango: new RangeCustomization("Mango Dragonfruit", 0), strawberry: new RangeCustomization("Strawberry Acai", 0), kiwi: new RangeCustomization("Kiwi Starfruit", 0) };
        this.inclusions = { mango: new Sweetener("Dragonfruit Inclusions", 0), strawberry: new Sweetener("Strawberry Inclusions", 0), kiwi: new Sweetener("Kiwi Inclusions", 0) };
        this.frapchips = new Sweetener('Frap Chips', 0);
        this.name;
        this.counts = { syrups: [2, 3, 4, 5, 0], shots: [1, 1, 2, 2, 0], inclusions: [0, 1, 1, 1, 2], frap: [0, 2, 3, 4, 0] };
        this.defaultFlavour = [];
        this.category = category;

    }

    canChangeIce() {

        return true;

    }

    canChangeShots() {

        return true;

    }

    canBeTrenta() {
        
        return false;

    }

    changeSize(val) {

        if (this.size.value != val) {
            const prevSyrup = this.getSyrupCount();
            const prevInclusions = this.getInclusionsCount();
            const prevShot = this.getShotCount();
            const prevFrap = this.getFrapCount();

            if (this.size.value == this.cup.value) {

                this.cup.set(val);

            }

            this.size.set(val);

            if (this.frapchips.value == prevFrap) {
                this.frapchips.set(this.getFrapCount());
            }

            if (this.matcha.value == prevFrap) {
                this.matcha.set(this.getFrapCount());
            }

            if (this.vanillabean.value == prevFrap) {
                this.vanillabean.set(this.getFrapCount());
            }

            if (this.shots.value == prevShot) {
                this.shots.set(this.getShotCount());
            }

            for (let key in this.syrups) {

                if (this.syrups[key].value == prevSyrup) {
                    this.syrups[key].set(this.getSyrupCount());
                }

            }

            for (let key in this.inclusions) {

                if (this.inclusions[key].value == prevInclusions) {
                    this.inclusions[key].set(this.getInclusionsCount());
                }

            }

        }

    }

    iced() {
        this.temp.set(0);
        this.ice.set(2);
        this.counts.syrups = [0, 3, 4, 6, 7];
        this.counts.shots = [0, 1, 2, 3, 0];
    }

    getInclusionsCount() {

        return this.counts.inclusions[this.size.value];

    }

    getShotCount() {
        return this.counts.shots[this.size.value]
    }

    getSyrupCount() {
        return this.counts.syrups[this.size.value]
    }

    getFrapCount() {
        return this.counts.frap[this.size.value]
    }

    display() {
        const vals = [this.espresso, this.temp, this.shots, this.milk, this.foam, this.room, this.water, this.ice, this.matcha, this.vanillabean, this.strawberrypuree];
        let out = this.size.toString() + ' ' + this.name;
        for (let i = 0; i < vals.length; i++) {
            if (vals[i].toString() != '' && !vals[i].isDefault()) {
                out = out + '<br>' + vals[i].toString();
            }
        }
        const vals2 = [this.syrups, this.sweeteners, this.toppping, this.juice, this.tea, this.refresher, this.inclusions];
        for (let i = 0; i < vals2.length; i++) {
            for (let key in vals2[i]) {

                if (vals2[i][key].toString() != '' && !vals2[i][key].isDefault()) {
                    out = out + '<br>' + vals2[i][key].toString();
                }

            }
        }
        if (this.cup.value != this.size.value) {
            out = out + '<br>In a ' + this.cup.toString() + ' cup';
        }
        if (this.espresso.ristretto && !this.espresso.defaultR) {

            out = out + '<br>Ristretto';

        }
        outputText.innerHTML = out;
    }

    setDefaults() {
        const vals = [this.espresso, this.temp, this.shots, this.milk, this.foam, this.room, this.water, this.ice, this.matcha, this.vanillabean, this.strawberrypuree];
        for (let i = 0; i < vals.length; i++) {
            if (vals[i].toString() != '' && !vals[i].isDefault()) {
                vals[i].setDefault();
            }
        }
        const vals2 = [this.syrups, this.sweeteners, this.toppping, this.juice, this.tea, this.refresher, this.inclusions];
        for (let i = 0; i < vals2.length; i++) {
            for (let key in vals2[i]) {

                if (vals2[i][key].toString() != '' && !vals2[i][key].isDefault()) {
                    vals2[i][key].setDefault();
                    if (i == 0) {

                        this.defaultFlavour.push(key);

                    }
                }

            }
        }
    }
}

const drinkChance = {

    TraditionalMisto: 1,
    BlondeRoast: 1,
    PikeRoast: 1,
    DarkRoast: 1,
    Americano: 1,
    IrishCreamAmericano: 1,
    BrownSugarOatAmericano: 1,
    AmericanoMisto: 1,
    Espresso: 1,
    EspressoConPanna: 1,
    FlatWhite: 1,
    HoneyAlmondFlatWhite: 1,
    Latte: 1,
    PistachioLatte: 1,
    SugarCookieOatLatte: 1,
    CaramelBruleLatte: 1,
    ChestnutPralineLatte: 1,
    CinnamonDolceLatte: 1,
    CaramelMacchiato: 1,
    Mocha: 1,
    WhiteMocha: 1,
    PeppermintWhiteMocha: 1,
    PeppermintMocha: 1,
    HotChocolate: 1,
    WhiteHotChocolate: 1,
    PeppermintHotChocolate: 1,
    PeppermintWhiteHotChocolate: 1,
    CaramelAppleSpice: 1,
    SteamedAppleJuice: 1,
    PistachioCream: 1,
    CaramelBruleCream: 1,
    VanillaCream: 1,
    ChestnutPralineCream: 1,
    EarlGreyTea: 1,
    ChaiTea: 1,
    RoyalEnglishBreakfastTea: 1,
    JadeCitrusMintTea: 1,
    EmperorsCloudAndMistTea: 1,
    MintMajestyTea: 1,
    PeachTranquilityTea: 1,
    HoneyCitrusMintTea: 1,
    LondonFogTeaLatte: 1,
    RoyalEnglishBreakfastTeaLatte: 1,
    ChaiTeaLatte: 1,
    MatchaTeaLatte: 1,
    IcedCoffee: 1,
    IcedCoffeeWithMilk: 1,
    ColdBrew: 1,
    IrishCreamColdBrew: 1,
    SaltedCaramelCreamColdFoamColdBrew: 1,
    VanillaSweetCreamColdBrew: 1,
    IcedBrownSugarOatShakenEspresso: 1,
    IcedShakenEspresso: 1,
    IcedBlackTea: 1,
    IcedBlackTeaLemonade: 1,
    IcedGreenTea: 1,
    IcedGreenTeaLemonade: 1,
    IcedPeachGreenTea: 1,
    IcedPeachGreenTeaLemonade: 1,
    IcedPassionTangoTea: 1,
    IcedPassionTangoTeaLemonade: 1,
    KiwiStarfruitRefresher: 1,
    KiwiStarfruitLemonade: 1,
    StarDrink: 1,
    MangoDragonfruitRefresher: 1,
    MangoDragonfruitLemonade: 1,
    DragonDrink: 1,
    StrawberryAcaiRefresher: 1,
    StrawberryAcaiLemonade: 1,
    StrawberryCoconutDrink: 1,
    ColdMilk: 1,
    Lemonade: 1,
    BlendedStrawberryLemonade: 1,
    PistachioFrappuccino: 1,
    MochaFrappuccino: 1,
    CoffeeFrappuccino: 1,
    CaramelFrappuccino: 1,
    EspressoFrappuccino: 1,
    JavaChipFrappuccino: 1,
    ChaiCreamFrappuccino: 1,
    WhiteMochaFrappuccino: 1,
    CafeVanillaFrappuccino: 1,
    MatchaCreamFrappuccino: 1,
    CaramelBruleFrappuccino: 1,
    PistachioCreamFrappuccino: 1,
    SugarCookieOatFrappuccino: 1,
    ChestnutPralineFrappuccino: 1,
    PeppermintMochaFrappuccino: 1,
    StrawberryCreamFrappuccino: 1,
    VanillaBeanCreamFrappuccino: 1,
    CaramelBruleCreamFrappuccino: 1,
    MochaCookieCrumbleFrappuccino: 1,
    CaramelRibbonCrunchFrappuccino: 1,
    SugarCookieOatCreamFrappuccino: 1,
    WhiteChocolateCreamFrappuccino: 1,
    ChestnutPralineCreamFrappuccino: 1,
    PeppermintMochaCreamFrappuccino: 1,
    PeppermintWhiteMochaFrappuccino: 1,
    PistachioFrappuccino: 1,
    CaramelRibbonCrunchCreamFrappuccino: 1,
    DoubleChocolatyChipCreamFrappuccino: 1,
    PeppermintWhiteChocolateCreamFrappuccino: 1,
    IcedAmericano: 1,
    IcedEspresso: 1,
    IcedFlatWhite: 1,
    IcedHoneyAlmondFlatWhite: 1,
    IcedLatte: 1,
    IcedPistachioLatte: 1,
    IcedSugarCookieOatLatte: 1,
    IcedCaramelBruleLatte: 1,
    IcedChestnutPralineLatte: 1,
    IcedCinnamonDolceLatte: 1,
    IcedCaramelMacchiato: 1,
    IcedMocha: 1,
    IcedWhiteMocha: 1,
    IcedPeppermintWhiteMocha: 1,
    IcedPeppermintMocha: 1,
    IcedLondonFogTeaLatte: 1,
    IcedRoyalEnglishBreakfastTeaLatte: 1,
    IcedChaiTeaLatte: 1,
    IcedMatchaTeaLatte: 1,
    IcedMatchaTeaLemonade: 1,

}

const drinks = {

}

let total = 0;
for (key in drinkChance) {

    total = total + drinkChance[key];

}

for (key in drinkChance) {

    drinkChance[key] = drinkChance[key] / total;

}
