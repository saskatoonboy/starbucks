
class HotChocolate extends Mocha {

    constructor() {

        super();
        this.name = 'Hot Chocolate';
        this.shots.set(0);

    }

}
class WhiteHotChocolate extends WhiteMocha {

    constructor() {

        super();
        this.name = 'White Hot Chocolate';
        this.shots.set(0);

    }

}
class PeppermintHotChocolate extends PeppermintMocha {

    constructor() {

        super();
        this.name = 'Peppermint Hot Chocolate';
        this.shots.set(0);

    }

}
class PeppermintWhiteHotChocolate extends PeppermintWhiteMocha {

    constructor() {

        super();
        this.name = 'Peppermint White Hot Chocolate';
        this.shots.set(0);

    }

}

class SteamedAppleJuice extends Drink {

    constructor() {

        super();
        this.name = 'Steamed Apple Juice';
        this.juice.apple.set(2);

    }

}

class CaramelAppleSpice extends SteamedAppleJuice {

    constructor() {

        super();
        this.name = 'Caramel Apple Spice';
        this.syrups['Cinnamon Dolce'].set(this.getSyrupCount());
        this.topping.whip.set(2);
        this.topping.caramel.set(2);
        
    }

}

class SteamedMilk extends Latte {

    constructor() {

        super();
        this.name = 'Steamed Milk';
        this.shots.set(0);

    }

}

class PistachioCream extends PistachioLatte {

    constructor() {

        super();
        this.name = 'Pistachio Cream';
        this.shots.set(0);

    }

}

class CaramelBruleCream extends CaramelBruleLatte {

    constructor() {

        super();
        this.name = 'Caramel Brule Cream';
        this.shots.set(0);

    }

}

class ChestnutPralineCream extends ChestnutPralineLatte {

    constructor() {

        super();
        this.name = 'Chestnut Praline Cream';
        this.shots.set(0);

    }

}

class VanillaCream extends SteamedMilk {

    constructor() {

        super();
        this.name = 'Vanilla Cream';
        this.syrups['Vanilla'].set(this.getSyrupCount());
        this.topping.whip.set(2);

    }

}

drinks.HotChocolate = HotChocolate;
drinks.WhiteHotChocolate = WhiteHotChocolate;
drinks.PeppermintHotChocolate = PeppermintHotChocolate;
drinks.PeppermintWhiteHotChocolate = PeppermintWhiteHotChocolate;
drinks.CaramelAppleSpice = CaramelAppleSpice;
drinks.SteamedAppleJuice = SteamedAppleJuice;
drinks.SteamedMilk = SteamedMilk;
drinks.PistachioCream = PistachioCream;
drinks.CaramelBruleCream = CaramelBruleCream;
drinks.ChestnutPralineCream = ChestnutPralineCream;
drinks.VanillaCream = VanillaCream;
