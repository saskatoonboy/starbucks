
const rName = {kiwi: 'Kiwi Starfruit', strawberry: 'Strawberry Acai', mango: 'Mango Dragonfruit'};
const mName = {lemonade: 'Lemonde', water: 'Refresher'};
const cName = {kiwi: 'Star Drink', strawberry: 'Strawberry Coconut Drink', mango: 'Dragon Drink'};

class Refresher extends Drink {

    constructor(juice, mixin) {

        super();
        if (mixin == 'coconut') {
            this.name = cName[juice];
            this.milk.set('Coconut');
        } else if (mixin == 'water') {
            this.name = rName[juice] + ' ' + mName[mixin];
            this.water.set(2);
        } else {
            this.name = rName[juice] + ' ' + mName[mixin];
            this.juice.lemonade.set(2);
        }
        this.iced();
        this.refresher[juice].set(2);
        this.inclusions[juice].set(this.getInclusionsCount());
    }

    canBeTrenta() {
        
        return true;

    }

}

class KiwiStarfruitRefresher extends Refresher{

    constructor() {

        super('kiwi', 'water');

    }

}

class KiwiStarfruitLemonade extends Refresher{

    constructor() {

        super('kiwi', 'lemonade');

    }

}

class StarDrink extends Refresher{

    constructor() {

        super('kiwi', 'coconut');

    }

}

class MangoDragonfruitRefresher extends Refresher{

    constructor() {

        super('mango', 'water');

    }

}

class MangoDragonfruitLemonade extends Refresher{

    constructor() {

        super('mango', 'lemonade');

    }

}

class DragonDrink extends Refresher{

    constructor() {

        super('mango', 'coconut');

    }

}

class StrawberryAcaiRefresher extends Refresher{

    constructor() {

        super('strawberry', 'water');

    }

}

class StrawberryAcaiLemonade extends Refresher{

    constructor() {

        super('strawberry', 'lemonade');

    }

}

class StrawberryCoconutDrink extends Refresher{

    constructor() {

        super('strawberry', 'coconut');

    }

}

class ColdMilk extends Drink {

    constructor() {

        super();
        this.name = 'Cold Milk';
        this.milk.set('2%');
        this.iced();
        this.ice.set(0);

    }

}

class Lemonade extends Drink{

    constructor() {

        super();
        this.name = 'Lemonade';
        this.juice.lemonade.set(2);
        this.iced();

    }

    canBeTrenta() {
        
        return true;

    }
    
}

class BlendedStrawberryLemonade extends Drink {

    constructor() {

        super();
        this.name = 'Blended Strawberry Lemonade';
        this.strawberrypuree.set(2);
        this.iced();

    }

}

drinks.KiwiStarfruitRefresher = KiwiStarfruitRefresher;
drinks.KiwiStarfruitLemonade = KiwiStarfruitLemonade;
drinks.StarDrink = StarDrink;
drinks.MangoDragonfruitRefresher = MangoDragonfruitRefresher;
drinks.MangoDragonfruitLemonade = MangoDragonfruitLemonade;
drinks.DragonDrink = DragonDrink;
drinks.StrawberryAcaiRefresher = StrawberryAcaiRefresher;
drinks.StrawberryAcaiLemonade = StrawberryAcaiLemonade;
drinks.StrawberryCoconutDrink = StrawberryCoconutDrink;
drinks.ColdMilk = ColdMilk;
drinks.Lemonade = Lemonade;
drinks.BlendedStrawberryLemonade = BlendedStrawberryLemonade;
