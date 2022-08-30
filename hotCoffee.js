
class TraditionalMisto extends Drink {

    constructor() {

        super('brewedCoffee');
        this.name = 'Traditional Misto';
        this.milk.set('2%');
        this.foam.set(2);

    }

}

class BlondeRoast extends Drink {

    constructor() {

        super('brewedCoffee');
        this.name = 'Blonde Roast';

    } 

}

class PikeRoast extends Drink {

    constructor() {

        super('brewedCoffee');
        this.name = 'Pike Roast';

    } 

}

class DarkRoast extends Drink {

    constructor() {

        super('brewedCoffee');
        this.name = 'Dark Roast';

    } 

}

class Americano extends Drink {

    constructor() {

        super('americano');
        this.name = 'Americano';
        this.water.set(2);
        this.counts.shots = [1, 2, 3, 4, 0];
        this.shots.set(this.getShotCount());

    }

    iced() {
        super.iced();
        this.counts.shots = [0, 2, 3, 4, 0];
    }

}

class AmericanoMisto extends Americano {

    constructor() {

        super('americano');
        this.name = 'Americano Misto';
        this.milk.set('2%');
        this.foam.set(2);

    }

}

class IrishCreamAmericano extends AmericanoMisto {

    constructor() {

        super('americano');
        this.name = 'Irish Cream Americano';
        this.topping['Cocoa Powder'].set(2);
        this.syrups['Irish Cream'].set(this.getSyrupCount());

    }

}

class BrownSugarOatAmericano extends AmericanoMisto {

    constructor() {

        super('americano');
        this.name = 'Brown Sugar Oat Americano';
        this.topping['Cinnamon'].set(2);
        this.syrups['Brown Sugar'].set(this.getSyrupCount());
        this.espresso.set('Blonde');

    }

}

class Latte extends Drink {

    constructor() {

        super('latte');
        this.name = 'Latte';
        this.milk.set('2%');
        this.shots.set(this.getShotCount());
    }

}

class Cappuccino extends Latte {

    constructor() {

        super();
        this.name = 'Cappuccino';

    }

}

class Espresso extends Drink {

    constructor() {

        super('espresso');
        this.names = ['', 'Solo', 'Doppio', 'Triple', 'Quad'];
        this.name = 'Doppio Espresso';
        this.shots.set(2);
        this.size.set(0);
        this.size.str[0] = '';
        this.cup.set(0);

    }

    canChangeWhip() {

        return false;

    }

}

class EspressoConPanna extends Espresso {

    constructor() {

        super();
        this.name = 'Doppio Espresso Con Panna';
        this.topping.whip.set(2);

    }

    canChangeWhip() {

        return false;

    }

}

class FlatWhite extends Drink {

    constructor() {

        super('latte');
        this.name = 'Flat White';
        this.milk.set('Whole');
        this.espresso.makeRistretto(true);
        this.counts.shots = [2, 2, 3, 3, 0];
        this.shots.set(this.getShotCount);

    }

}

class HoneyAlmondFlatWhite extends FlatWhite {

    constructor() {

        super();
        this.name = 'Honey Almond Flat White';
        this.milk.set('Almond');
        this.syrups['Honey Blend'].set(this.getSyrupCount());
        this.espresso.set('Blonde');

    }

}

class SugarCookieOatLatte extends Latte {

    constructor() {

        super();
        this.name = 'Sugar Cookie Oat Latte';
        this.syrups['Sugar Cookie'].set(this.getSyrupCount());
        this.milk.set('Oat');
        this.topping['Red and Green Sprinkles'].set(2);

    }

}

class CaramelBruleLatte extends Latte {

    constructor() {

        super();
        this.name = 'Caramel Brule Latte';
        this.syrups['Caramel Brule'].set(this.getSyrupCount());
        this.topping['Caramel Brule'].set(2);
        this.topping.whip.set(2);

    }

}

class ChestnutPralineLatte extends Latte {

    constructor() {

        super();
        this.name = 'Chestnut Praline Latte';
        this.syrups['Chestnut Praline'].set(this.getSyrupCount());
        this.topping['Chestnut Praline'].set(2);
        this.topping.whip.set(2);

    }

}

class CinnamonDolceLatte extends Latte {

    constructor() {

        super();
        this.name = 'Cinnamon Dolce Latte';
        this.syrups['Cinnamon Dolce'].set(this.getSyrupCount());
        this.topping['Cinnamon Dolce'].set(2);
        this.topping.whip.set(2);

    }

}

class CaramelMacchiato extends Latte {

    constructor() {

        super();
        this.name = 'Caramel Macchiato';
        this.counts.syrups = [1, 2, 3, 4, 0];
        this.syrups['Vanilla'].set(this.getSyrupCount());
        this.topping.caramel.set(2);

    }

    iced() {

        super.iced();
        this.counts.syrups = [0, 2, 3, 5, 0];

    }

}

class Mocha extends Latte {

    constructor() {

        super();
        this.name = 'Mocha';
        this.syrups['Mocha'].set(this.getSyrupCount());
        this.topping.whip.set(2);

    }

}

class WhiteMocha extends Latte {

    constructor() {

        super();
        this.name = 'White Mocha';
        this.syrups['White Mocha'].set(this.getSyrupCount());
        this.topping.whip.set(2);

    }

}

class PeppermintMocha extends Mocha {

    constructor() {

        super();
        this.name = 'Perppermint Mocha';
        this.syrups['Mocha'].set(this.getSyrupCount());
        this.syrups['Peppermint'].set(this.getSyrupCount());
        this.topping['Chocolate Curls'].set(2);

    }

}

class PeppermintWhiteMocha extends WhiteMocha {

    constructor() {

        super();
        this.name = 'Peppermint White Mocha';
        this.syrups['White Mocha'].set(this.getSyrupCount());
        this.syrups['Peppermint'].set(this.getSyrupCount());
        this.topping['Chocolate Curls'].set(2);

    }

}



drinks.TraditionalMisto = TraditionalMisto;
drinks.BlondeRoast = BlondeRoast;
drinks.PikeRoast = PikeRoast;
drinks.DarkRoast = DarkRoast;
drinks.Americano = Americano;
drinks.IrishCreamAmericano = IrishCreamAmericano;
drinks.BrownSugarOatAmericano = BrownSugarOatAmericano;
drinks.AmericanoMisto = AmericanoMisto;
drinks.Cappuccino = Cappuccino;
drinks.Espresso = Espresso;
drinks.EspressoConPanna = EspressoConPanna;
drinks.FlatWhite = FlatWhite;
drinks.HoneyAlmondFlatWhite = HoneyAlmondFlatWhite;
drinks.Latte = Latte;
drinks.CaramelBruleLatte = CaramelBruleLatte;
drinks.ChestnutPralineLatte = ChestnutPralineLatte;
drinks.SugarCookieOatLatte = SugarCookieOatLatte;
drinks.CinnamonDolceLatte = CinnamonDolceLatte;
drinks.CaramelMacchiato = CaramelMacchiato;
drinks.Mocha = Mocha
drinks.WhiteMocha = WhiteMocha;
drinks.PeppermintMocha = PeppermintMocha;
drinks.PeppermintWhiteMocha = PeppermintWhiteMocha;
