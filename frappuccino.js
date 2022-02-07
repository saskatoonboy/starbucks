
class Frappuccino extends Drink {

    constructor(syrup, cream) {

        super();
        this.iced();
        this.milk.set('Whole');
        this.topping.whip.set(2);
        if (syrup != undefined) {

            this.syrups[syrup].set(this.getFrapCount());
            if (cream) {

                this.name = syrup + ' Cream Frappuccino';

            } else {

                this.name = syrup + ' Frappuccino';

            }

        }

    }

    getSyrupCount() {

        return this.getFrapCount();

    }

}

class PistachioFrappuccino extends Frappuccino {

    constructor() {

        super('Pistachio', false);
        this.topping['Salted Brown Butter'].set(2);

    }
    
}

class PistachioCreamFrappuccino extends Frappuccino {

    constructor() {

        super('Pistachio', true);
        this.topping['Salted Brown Butter'].set(2);

    }
    
}

class SugarCookieOatFrappuccino extends Frappuccino {

    constructor() {

        super('Sugar Cookie', false);
        this.topping['Red and Green Sprinkles'].set(2);
        this.milk.set('Oat');

    }
    
}

class SugarCookieOatCreamFrappuccino extends Frappuccino {

    constructor() {

        super('Sugar Cookie', true);
        this.topping['Red and Green Sprinkles'].set(2);
        this.milk.set('Oat');

    }
    
}

class ChestnutPralineFrappuccino extends Frappuccino {

    constructor() {

        super('Chestnut Praline', false);
        this.topping['Chestnut Praline'].set(2);

    }
    
}

class ChestnutPralineCreamFrappuccino extends Frappuccino {

    constructor() {

        super('Chestnut Praline', true);
        this.topping['Chestnut Praline'].set(2);

    }
    
}

class CaramelBruleFrappuccino extends Frappuccino {

    constructor() {

        super('Caramel Brule', false);
        this.topping['Caramel Brule'].set(2);

    }
    
}

class CaramelBruleCreamFrappuccino extends Frappuccino {

    constructor() {

        super('Caramel Brule', true);
        this.topping['Caramel Brule'].set(2);

    }
    
}

class CaramelFrappuccino extends Frappuccino {

    constructor() {

        super('Caramel', false);
        this.topping.caramel.set(2);

    }

}

class CafeVanillaFrappuccino extends Frappuccino {

    constructor() {

        super(undefined, false);
        this.name = 'Cafe Vanilla Frappuccino';
        this.vanillabean.set(this.getFrapCount());

    }

}

class VanillaBeanCreamFrappuccino extends Frappuccino {

    constructor() {

        super(undefined, false);
        this.name = 'Vanilla Bean Cream Frappuccino';
        this.vanillabean.set(this.getFrapCount());

    }

}

class CoffeeFrappuccino extends Frappuccino {

    constructor() {

        super(undefined, false);
        this.name = 'Coffee Frappuccino';
        this.topping.whip.set(0);

    }

}

class EspressoFrappuccino extends Frappuccino {

    constructor() {

        super(undefined, false);
        this.name = 'Espresso Frappuccino';
        this.shots.set(1);
        this.topping.whip.set(0);

    }

}

class WhiteMochaFrappuccino extends Frappuccino {

    constructor() {

        super('White Mocha', false);

    }
    
}

class WhiteChocolateCreamFrappuccino extends Frappuccino {

    constructor() {

        super('White Mocha', true);
        this.name = 'White Chocolate Cream Frappuccino';

    }
    
}

class MochaFrappuccino extends Frappuccino {

    constructor() {

        super('Mocha', false);

    }
    
}

class CaramelRibbonCrunchFrappuccino extends Frappuccino {

    constructor() {

        super('Dark Caramel', false);
        this.name = 'Caramel Ribbon Crunch Frappuccino';
        this.topping['Caramel Crunch'].set(2);
        this.topping.caramel.set(2);
    }
    
}

class CaramelRibbonCrunchCreamFrappuccino extends CaramelRibbonCrunchFrappuccino {

    constructor() {

        super();
        this.name = 'Caramel Ribbon Crunch Cream Frappuccino';

    }

}

class JavaChipFrappuccino extends MochaFrappuccino {

    constructor() {

        super();
        this.name = 'Java Chip Frappuccino';
        this.frapchips.set(this.getFrapCount());
        this.topping.mocha.set(2);

    }

}

class MochaCookieCrumbleFrappuccino extends JavaChipFrappuccino {

    constructor() {
        
        super();
        this.name = 'Mocha Cookie Crumble Frappuccino';
        this.topping['Cookie Crumbles'];

    }

}

class DoubleChocolatyChipCreamFrappuccino extends JavaChipFrappuccino {

    constructor() {

        super();
        this.name = 'Double Chocolaty Chip Cream Frappuccino';

    }

}

class ChocolateCookieCrumbleFrappuccino extends MochaCookieCrumbleFrappuccino {

    constructor() {

        super();
        this.name = 'Chocolate Cookie Crumble Frappuccino';

    }

}

class PeppermintMochaFrappuccino extends MochaFrappuccino {

    constructor() {

        super();
        this.name = 'Peppermint ' + this.name;
        this.topping['Chocolate Curls'].set(2);
        this.syrups['Peppermint'].set(this.getFrapCount());

    }

}

class PeppermintWhiteMochaFrappuccino extends WhiteMochaFrappuccino {

    constructor() {

        super();
        this.name = 'Peppermint ' + this.name;
        this.topping['Chocolate Curls'].set(2);
        this.syrups['Peppermint'].set(this.getFrapCount());

    }

}

class PeppermintWhiteChocolateCreamFrappuccino extends PeppermintWhiteMochaFrappuccino {

    constructor() {

        super();
        this.name = 'Peppermint White Choclate Cream Frappuccino';

    }

}

class PeppermintMochaCreamFrappuccino extends PeppermintMochaFrappuccino {

    constructor() {

        super();
        this.name = 'Peppermint Mocha Cream Frappuccino';

    }

}

class MatchaCreamFrappuccino extends CoffeeFrappuccino {

    constructor() {

        super();
        this.name = 'Matcha Cream Frappuccino';
        this.matcha.set(this.getFrapCount());

    }

}

class ChaiCreamFrappuccino extends CoffeeFrappuccino {

    constructor() {

        super();
        this.name = 'Chai Cream Frappuccino';
        this.syrups['Chai'].set(this.getFrapCount());

    }

}

class StrawberryCreamFrappuccino extends CoffeeFrappuccino {

    constructor() {

        super();
        this.name = 'Strawberry Cream Frappuccino';
        this.syrups['Classic'].set(this.getFrapCount());
        this.strawberrypuree.set(2);

    }

}

drinks.PistachioFrappuccino = PistachioFrappuccino;
drinks.MochaFrappuccino = MochaFrappuccino;
drinks.CoffeeFrappuccino = CoffeeFrappuccino;
drinks.CaramelFrappuccino = CaramelFrappuccino;
drinks.EspressoFrappuccino = EspressoFrappuccino;
drinks.JavaChipFrappuccino = JavaChipFrappuccino;
drinks.ChaiCreamFrappuccino = ChaiCreamFrappuccino;
drinks.WhiteMochaFrappuccino = WhiteMochaFrappuccino;
drinks.CafeVanillaFrappuccino = CafeVanillaFrappuccino;
drinks.MatchaCreamFrappuccino = MatchaCreamFrappuccino;
drinks.CaramelBruleFrappuccino = CaramelBruleFrappuccino;
drinks.PistachioCreamFrappuccino = PistachioCreamFrappuccino;
drinks.SugarCookieOatFrappuccino = SugarCookieOatFrappuccino;
drinks.ChestnutPralineFrappuccino = ChestnutPralineFrappuccino;
drinks.PeppermintMochaFrappuccino = PeppermintMochaFrappuccino;
drinks.StrawberryCreamFrappuccino = StrawberryCreamFrappuccino;
drinks.VanillaBeanCreamFrappuccino = VanillaBeanCreamFrappuccino;
drinks.CaramelBruleCreamFrappuccino = CaramelBruleCreamFrappuccino;
drinks.MochaCookieCrumbleFrappuccino = MochaCookieCrumbleFrappuccino;
drinks.CaramelRibbonCrunchFrappuccino = CaramelRibbonCrunchFrappuccino;
drinks.SugarCookieOatCreamFrappuccino = SugarCookieOatCreamFrappuccino;
drinks.WhiteChocolateCreamFrappuccino = WhiteChocolateCreamFrappuccino;
drinks.ChestnutPralineCreamFrappuccino = ChestnutPralineCreamFrappuccino;
drinks.PeppermintMochaCreamFrappuccino = PeppermintMochaCreamFrappuccino;
drinks.PeppermintWhiteMochaFrappuccino = PeppermintWhiteMochaFrappuccino;
drinks.ChocolateCookieCrumbleFrappuccino = ChocolateCookieCrumbleFrappuccino;
drinks.CaramelRibbonCrunchCreamFrappuccino = CaramelRibbonCrunchCreamFrappuccino;
drinks.DoubleChocolatyChipCreamFrappuccino = DoubleChocolatyChipCreamFrappuccino;
drinks.PeppermintWhiteChocolateCreamFrappuccino = PeppermintWhiteChocolateCreamFrappuccino;
