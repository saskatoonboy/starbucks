// parent class

class Customization {

    constructor() {

        this.value = 0;
        this.str = ['error'];
        this.default = this.value;

    }

    toString() {
        return this.str[this.value];
    }

    set(val) {

        if (typeof (val) == 'number') {

            this.value = val;

        } else {

            this.value = this.str.indexOf(val);

        }

    }

    isDefault() {

        return this.default == this.value;

    }

    setDefault() {

        this.default = this.value;

    }

}

class RangeCustomization extends Customization {

    constructor(name, val) {

        super();
        this.value = val;
        this.default = val;
        this.str = ['No '+name, 'Light '+name, name, 'Extra '+name];

    }

}

// Size
class Size extends Customization {

    constructor() {

        super();
        this.value = 2;
        this.default = 2;
        this.str = ['Short', 'Tall', 'Grande', 'Venti', 'Trenta'];

    }

    canBeCold() {

        return this.size > 0;

    }

    canBeHot() {

        return this.size < 4;

    }

    useSleve() {

        return this.size == 3;

    }

}

class Espresso extends Customization {

    constructor() {

        super();
        this.value = 1;
        this.default = 1;
        this.str = ['Decaf', 'Signature', 'Blonde'];
        this.ristretto = false;

    }

    makeRistretto(bool) {

        this.ristretto = bool;

    }

    isRistretto() {

        return this.ristretto;

    }

}

// Temperature

class Temp extends Customization {

    constructor() {

        super();
        this.value = 2;
        this.default = 2;
        this.str = ['Iced', 'Warm', 'Hot', 'Extra Hot'];

    }

    makeIced(bool) {

        if (bool) {
            this.value = 0;
        } else {
            this.value = 2;
        }

    }

    isIced() {

        return this.value == 0;

    }

    useSleve() {
        return this.isExtraHot();
    }

}

class Shots extends Customization {

    constructor() {

        super();
        this.value = 0;
        this.str = ['', 'Single', 'Double', 'Triple', 'Quad'];

    }

    toString() {

        if (this.value > 4) {
            return this.value + ' shots';
        } else {
            return super.toString();
        }

    }

    hasEspresso() {

        return this.value > 0;

    }

}

class Syrup extends Customization {

    constructor(name) {

        super();
        this.value = 0;
        this.name = name;

    }

    toString() {

        if (this.value > 0) {

            return this.value + ' pumps ' + this.name;

        } else if (this.value < 0) {

            return this.name;

        }

        return '';

    }

}

function generateSyrups() {

    const syrups = ['Vanilla', 'Sf Vanilla', 'Caramel', 'Peppermint', 'Honey Blend', 'Raspberry', 'Chestnut Praline', 'Toffee Nut', 'Hazelnut', 'Mocha', 'White Mocha', 'Chai', 'Creme Brulee', 'Pistachio', "Dark Caramel", "Classic", "Liquid Cane Sugar", 'Cinnamon Dolce', "Irish Cream", 'Sugar Cookie', "Brown Sugar"];

    const dic = {};

    for (let i = 0; i < syrups.length; i++) {

        dic[syrups[i]] = new Syrup(syrups[i]);

    }

    return dic;

}

class Splash extends Customization {

    constructor() {

        super();
        this.value = 0;
        this.str = ['', 'Light Splash', "Splash", "Extra Splash"];

    }

}

class Milk extends Customization {

    constructor() {
        super();
        this.value = 0;
        this.str = ['', 'Nonfat Milk', '1% Milk', '2% Milk', 'Whole Milk', 'Lactaid Milk', "Coconut MIlk", 'Almond Milk', "Soy MIlk", "Oat Mlk", "Heavy Cream", "Breve"];
        this.splash = new Splash();
    }
    
    toString() {

        if (this.splash.value == 0) {
            return super.toString();
        } else {
            return this.splash.toString() + " of " + super.toString();
        }

    }

    setSplash(val) {

        this.splash.set(val);

    }

    set(val) {

        super.set(val.substring(0, val.length-5));

    }

}

class Sweetener extends Syrup {

    toString() {

        if (this.value > 0) {

            return this.value + ' ' + this.name;

        }

        return '';

    }

}

function generateSweeteners() {

    const sweeteners = ['Sugar', 'Raw Sugar', 'Splenda', 'Stevia', 'Honey'];

    const dic = {};

    for (let i = 0; i < sweeteners.length; i++) {

        dic[sweeteners[i]] = new Sweetener(sweeteners[i]);

    }

    return dic;

}

class Topping {

    constructor(name) {

        this.value = false;
        this.name = name;
        this.default = false;

    }

    toString() {

        if (this.value) {
            return this.name;
        }
        return '';

    }

    set(bool) {
        this.value = bool;
    }

    isDefault() {

        return this.value == this.default;

    }

    setDefault() {

        this.default = this.value;

    }

}

function generateToppings() {

    const toppings = ['Cocoa Powder', 'Chestnut Praline', 'Chocolate Curls', 'Chinnamon Dolce', 'Red and Green Sprinkles', 'Salted Brown Butter', 'Caramel Brulee', 'Cinnamon', 'Caramel Crunch', 'Cookie Crummbles'];

    const dic = {};

    for (let i = 0; i < toppings.length; i++) {

        dic[toppings[i]] = new Topping(toppings[i]);

    }

    dic.caramel = new RangeCustomization("Caramel Drizzle", 0);
    dic.mocha = new RangeCustomization("Mocha Drizzle", 0);
    dic.whip = new RangeCustomization("Whip", 0);
    dic.coalfoam = new RangeCustomization("Cold Foam", 0);
    dic.vanillasweetcreamcoldfoam = new RangeCustomization("Vanilla Sweet Cream Cold Foam", 0);
    dic.irshcreamcoldfoam = new RangeCustomization("Irish Cream Cold Foam", 0);
    dic.saltedcaramelcoldfoam = new RangeCustomization("Salted Caramel Cold Foam", 0);

    return dic;

}
