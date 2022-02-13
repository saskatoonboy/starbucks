
class IcedTea extends Drink {

    constructor(tea, lemonade) {

        super('icedTea');
        this.iced();
        this.name = 'Iced ' + tea + ' Tea';
        if (lemonade) { 
            this.name = this.name + ' Lemonade';
            this.juice.lemonade.set(2);
        } else {
            this.water.set(2);
        }
        if (tea == 'Passion Tango') {
            tea = 'passion';
        } else {
            tea = tea.toLowerCase();
        }

        this.tea[tea].set(2);
        this.syrups['Liquid Cane Sugar'].set(this.getSyrupCount());

    }

    canBeTrenta() {
        
        return true;

    }

    canChangeShots() {

        return false;

    }

    canChangeWhip() {

        return false;

    }

}

class IcedBlackTea extends IcedTea {

    constructor() {

        super('Black', false);

    }

}

class IcedBlackTeaLemonade extends IcedTea {

    constructor() {

        super('Black', true);

    }

}

class IcedGreenTea extends IcedTea {

    constructor() {

        super('Green', false);

    }

}

class IcedGreenTeaLemonade extends IcedTea {

    constructor() {

        super('Green', true);

    }

}

class IcedPassionTangoTea extends IcedTea {

    constructor() {

        super('Passion Tango', false);

    }

}

class IcedPassionTangoTeaLemonade extends IcedTea {

    constructor() {

        super('Passion Tango', true);

    }

}

class IcedPeachGreenTea extends IcedGreenTea {

    constructor() {

        super();
        this.juice.peach.set(2);
        this.name = 'Iced Peach Green Tea';

    }

}

class IcedPeachGreenTeaLemonade extends IcedGreenTeaLemonade {

    constructor() {

        super();
        this.juice.peach.set(2);
        this.name = 'Iced Peach Green Tea Lemonade';

    }

}

class IcedChaiTeaLatte extends ChaiTeaLatte {

    constructor() {

        super();
        this.iced();
        this.name = 'Iced ' + this.name;

    }

}

class IcedLondonFogTeaLatte extends LondonFogTeaLatte {

    constructor() {

        super();
        this.iced();
        this.name = 'Iced ' + this.name;

    }

}

class IcedRoyalEnglishBreakfastTeaLatte extends RoyalEnglishBreakfastTeaLatte {

    constructor() {

        super();
        this.iced();
        this.name = 'Iced ' + this.name;

    }

}

class IcedMatchaTeaLatte extends MatchaTeaLatte {

    constructor() {

        super();
        this.iced();
        this.name = 'Iced ' + this.name;

    }

}

class IcedMatchaTeaLemonade extends IcedMatchaTeaLatte {

    constructor() {

        super();
        this.name = 'Iced Matcha Lemonade';
        this.milk.set(0);
        this.juice.lemonade.set(2);

    }

}

drinks.IcedBlackTea = IcedBlackTea;
drinks.IcedBlackTeaLemonade = IcedBlackTeaLemonade;
drinks.IcedGreenTea = IcedGreenTea;
drinks.IcedGreenTeaLemonade = IcedGreenTeaLemonade;
drinks.IcedPassionTangoTea = IcedPassionTangoTea;
drinks.IcedPassionTangoTeaLemonade = IcedPassionTangoTeaLemonade;
drinks.IcedPeachGreenTea = IcedPeachGreenTea;
drinks.IcedPeachGreenTeaLemonade = IcedPeachGreenTeaLemonade;
drinks.IcedChaiTeaLatte = IcedChaiTeaLatte;
drinks.IcedLondonFogTeaLatte = IcedLondonFogTeaLatte;
drinks.IcedRoyalEnglishBreakfastTeaLatte = IcedRoyalEnglishBreakfastTeaLatte;
drinks.IcedMatchaTeaLatte = IcedMatchaTeaLatte;
drinks.IcedMatchaTeaLemonade = IcedMatchaTeaLemonade;
