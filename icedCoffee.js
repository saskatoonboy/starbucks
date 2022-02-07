
class ColdBrew extends Drink {

    constructor() {

        super();
        this.iced();
        this.counts.syrups = [0, 1, 2, 3, 4];
        this.name = 'Cold Brew';

    }

    canBeTrenta() {
        
        return true;

    }

}

class IrishCreamColdBrew extends ColdBrew {

    constructor() {

        super();
        this.name = 'Irish Cream Cold Brew';
        this.syrups['Irish Cream'].set(this.getSyrupCount());
        this.topping['Cocoa Powder'].set(2);
        this.topping.irishcreamcoldfoam.set(2);

    }  

}

class SaltedCaramelCreamColdFoamColdBrew extends ColdBrew {

    constructor() {

        super();
        this.name = 'Salted Caramel Cream Cold Foam Cold Brew';
        this.syrups['Vanilla'].set(this.getSyrupCount());
        this.topping.saltedcaramelcoldfoam.set(2);

    }  

}

class VanillaSweetCreamColdBrew extends ColdBrew {

    constructor() {

        super();
        this.name = 'Vanilla Sweet Cream Cold Brew';
        this.syrups['Vanilla'].set(this.getSyrupCount());
        this.topping.vanillasweetcream.set(2);

    }  

}

class IcedCoffee extends Drink {

    constructor() {

        super();
        this.iced();
        this.name = 'Iced Coffee';
        this.syrups['Classic'].set(this.getSyrupCount());

    }

    canBeTrenta() {
        
        return true;

    }

}

class IcedCoffeeWithMilk extends IcedCoffee {

    constructor() {

        super();
        this.name = 'Iced Coffee With Milk';
        this.milk.set('2%');

    }

}

class IcedShakenEspresso extends IcedCoffeeWithMilk {

    constructor() {

        super();
        this.name = 'Iced Shaken Espresso';
        this.counts.shots = [0, 2, 3, 4, 0];
        this.shots.set(this.getShotCount());

    }

    canBeTrenta() {
        
        return false;

    }

}

class IcedBrownSugarOatShakenEspresso extends IcedShakenEspresso {

    constructor() {

        super();
        this.name = 'Iced Brown Sugar Oat Shaken Espresso';
        this.espresso.set('Blonde');
        this.syrups['Classic'].set(0);
        this.syrups['Brown Sugar'].set(this.getSyrupCount());
        this.topping['Cinnamon'].set(2);
        this.milk.set('Oat');

    }

}

class IcedAmericano extends Americano {

    constructor() {

        super();
        this.iced();
        this.name = 'Iced Americano';

    }

}

class IcedEspresso extends Espresso {

    constructor() {

        super();
        this.iced();
        this.name = 'Iced ' + this.name;
    }

}

class IcedHoneyAlmondFlatWhite extends HoneyAlmondFlatWhite {

    constructor() {

        super();
        this.iced();
        this.name = 'Iced ' + this.name;

    }

}

class IcedFlatWhite extends FlatWhite {

    constructor() {

        super();
        this.iced();
        this.name = 'Iced ' + this.name;

    }

}

class IcedPistachioLatte extends PistachioLatte {

    constructor() {

        super();
        this.iced();
        this.name = 'Iced ' + this.name;

    }

}

class IcedChestnutPralineLatte extends ChestnutPralineLatte {

    constructor() {

        super();
        this.iced();
        this.name = 'Iced ' + this.name;

    }

}

class IcedCaramelBruleLatte extends CaramelBruleLatte {

    constructor() {

        super();
        this.iced();
        this.name = 'Iced ' + this.name;

    }

}

class IcedSugarCookieOatLatte extends SugarCookieOatLatte {

    constructor() {

        super();
        this.iced();
        this.name = 'Iced ' + this.name;

    }

}

class IcedLatte extends Latte {

    constructor() {

        super();
        this.iced();
        this.name = 'Iced ' + this.name;

    }

}

class IcedCinnamonDolceLatte extends CinnamonDolceLatte {

    constructor() {

        super();
        this.iced();
        this.name = 'Iced ' + this.name;

    }

}

class IcedCaramelMacchiato extends CaramelMacchiato {

    constructor() {

        super();
        this.iced();
        this.name = 'Iced ' + this.name;

    }

}

class IcedMocha extends Mocha {

    constructor() {

        super();
        this.iced();
        this.name = 'Iced ' + this.name;

    }

}

class IcedWhiteMocha extends WhiteMocha {

    constructor() {

        super();
        this.iced();
        this.name = 'Iced ' + this.name;

    }

}

class IcedPeppermintMocha extends PeppermintMocha {

    constructor() {

        super();
        this.iced();
        this.name = 'Iced ' + this.name;

    }

}

class IcedPeppermintWhiteMocha extends PeppermintWhiteMocha {

    constructor() {

        super();
        this.iced();
        this.name = 'Iced ' + this.name;

    }

}

drinks.ColdBrew = ColdBrew;
drinks.IrishCreamColdBrew = IrishCreamColdBrew;
drinks.SaltedCaramelCreamColdFoamColdBrew = SaltedCaramelCreamColdFoamColdBrew;
drinks.VanillaSweetCreamColdBrew = VanillaSweetCreamColdBrew;
drinks.IcedCoffee = IcedCoffee;
drinks.IcedCoffeeWithMilk = IcedCoffeeWithMilk;
drinks.IcedShakenEspresso = IcedShakenEspresso;
drinks.IcedBrownSugarOatShakenEspresso = IcedBrownSugarOatShakenEspresso;
drinks.IcedAmericano = IcedAmericano;
drinks.IcedCaramelBruleLatte = IcedCaramelBruleLatte;
drinks.IcedCaramelMacchiato = IcedCaramelMacchiato;
drinks.IcedChestnutPralineLatte = IcedChestnutPralineLatte;
drinks.IcedCinnamonDolceLatte = IcedCinnamonDolceLatte;
drinks.IcedFlatWhite = IcedFlatWhite;
drinks.IcedEspresso = IcedEspresso;
drinks.IcedHoneyAlmondFlatWhite = IcedHoneyAlmondFlatWhite;
drinks.IcedLatte = IcedLatte;
drinks.IcedMocha = IcedMocha;
drinks.IcedPeppermintMocha = IcedPeppermintMocha;
drinks.IcedPeppermintWhiteMocha = IcedPeppermintWhiteMocha;
drinks.IcedPistachioLatte = IcedPistachioLatte;
drinks.IcedSugarCookieOatLatte = IcedSugarCookieOatLatte;
drinks.IcedWhiteMocha = IcedWhiteMocha;
