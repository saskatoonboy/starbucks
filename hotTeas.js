
class TeaLatte extends Drink {

    constructor() {

        super('brewedTea');
        this.water.set(2);
        this.milk.set('2%');
        this.foam.set(2);

    }

    iced() {

        super.iced();
        this.water.set(0);

    }

    canChangeShots() {

        return false;

    }

}

class ChaiTeaLatte extends TeaLatte {

    constructor() {

        super();
        this.name = 'Chai Tea Latte';
        this.syrups['Chai'].set(this.getSyrupCount());
        this.category = 'otherTea'

    }

    canChangeShots() {

        return true;

    }
    
}

class Tea extends Drink {

    constructor(name) {

        super('brewedTea');
        this.name = name + ' Tea';

    }

    canChangeShots() {

        return false;

    }

}

class ChaiTea extends Tea {

    constructor() {

        super('Chai');

    }
    
}

class EarlGreyTea extends Tea {

    constructor() {

        super('Earl Grey');

    }
    
}

class RoyalEnglishBreakfastTea extends Tea {

    constructor() {

        super('Royal English Breakfast');

    }
    
}

class LondonFogTeaLatte extends TeaLatte {

    constructor() {

        super();
        this.name = 'London Fog Tea Latte';
        this.syrups['Vanilla'].set(this.getSyrupCount());

    }

}

class RoyalEnglishBreakfastTeaLatte extends TeaLatte {

    constructor() {

        super();
        this.name = 'Royal English Breakfast Tea Latte';
        this.syrups['Liquid Cane Sugar'].set(this.getSyrupCount());

    }

}

class MatchaTeaLatte extends TeaLatte {

    constructor() {

        super();
        this.name = 'Matcha Tea Latte';
        this.syrups['Liquid Cane Sugar'].set(this.getSyrupCount());
        this.matcha.set(this.getFrapCount());
        this.water.set(0);
        this.category = 'otherTea';

    }

}

class EmperorsCloudAndMistTea extends Tea {

    constructor() {

        super('Emperor\'s Cloud and Mist');

    }
    
}

class JadeCitrusMintTea extends Tea {

    constructor() {

        super('Jade Citrus Mint');

    }
    
}

class PeachTranquilityTea extends Tea {

    constructor() {

        super('Peach Tranquility');

    }
    
}

class MintMajestyTea extends Tea {

    constructor() {

        super('Mint Majesty');

    }
    
}

class HoneyCitrusMintTea extends Drink {

    constructor() {

        super('otherTea');
        this.name = 'Honey Citrus Mint Tea';
        this.counts.syrups = [1, 1, 2, 2, 0];
        this.syrups['Honey Blend'].set(this.getSyrupCount());
        this.water.set(2);
        this.juice.lemonade.set(2);

    }

}

drinks.EarlGreyTea = EarlGreyTea;
drinks.ChaiTea = ChaiTea;
drinks.RoyalEnglishBreakfastTea = RoyalEnglishBreakfastTea;
drinks.JadeCitrusMintTea = JadeCitrusMintTea;
drinks.EmperorsCloudAndMistTea = EmperorsCloudAndMistTea;
drinks.MintMajestyTea = MintMajestyTea;
drinks.PeachTranquilityTea = PeachTranquilityTea;
drinks.HoneyCitrusMintTea = HoneyCitrusMintTea;
drinks.LondonFogTeaLatte = LondonFogTeaLatte;
drinks.RoyalEnglishBreakfastTeaLatte = RoyalEnglishBreakfastTeaLatte;
drinks.ChaiTeaLatte = ChaiTeaLatte;
drinks.MatchaTeaLatte = MatchaTeaLatte;
