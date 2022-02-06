
function icedBlackTea() {

    let drink = new Drink();
    drink.name = 'Iced Black Tea';
    drink.water.set(2);
    drink.foam.set(0);
    drink.ice.set(2);
    drink.tea.black.set(2);
    drink.syrups['Liquid Cane Sugar'].set(4);
    return drink;

}

function icedBlackTeaLemonade() {

    let drink = icedBlackTea();
    drink.name = 'Iced Black Tea Lemonade';
    drink.water.set(0);
    drink.juice.lemonade.set(2);
    return drink;

}

function icedGreenTea() {

    let drink = new icedBlackTea();
    drink.name = 'Iced Green Tea';
    drink.tea.green.set(2);
    drink.tea.black.set(0);
    return drink;

}

function icedGreenTeaLemonade() {

    let drink = icedBlackTeaLemonade();
    drink.name = 'Iced Green Tea Lemonade';
    drink.tea.green.set(2);
    drink.tea.black.set(0);
    return drink;

}

function icedPassionTangoTea() {

    let drink = new icedBlackTea();
    drink.name = 'Iced Passion Tango Tea';
    drink.tea.passion.set(2);
    drink.tea.black.set(0);
    return drink;

}

function icedPassionTangoTeaLemonade() {

    let drink = icedBlackTeaLemonade();
    drink.name = 'Iced Passion Tango Tea Lemonade';
    drink.tea.passion.set(2);
    drink.tea.black.set(0);
    return drink;

}

function icedPeachGreenTea() {

    let drink = new icedGreenTea();
    drink.name = 'Iced Peach Green Tea';
    drink.juice.peach.set(2);
    return drink;

}

function icedPeachGreenTeaLemonade() {

    let drink = icedGreenTeaLemonade();
    drink.name = 'Iced Peach Green Tea Lemonade';
    drink.juice.peach.set(2);
    return drink;

}

drinks.icedBlackTea = icedBlackTea;
drinks.icedBlackTeaLemonade = icedBlackTeaLemonade;
drinks.icedGreenTea = icedGreenTea;
drinks.icedGreenTeaLemonade = icedGreenTeaLemonade;
drinks.icedPassionTangoTea = icedPassionTangoTea;
drinks.icedPassionTangoTeaLemonade = icedPassionTangoTeaLemonade;
drinks.icedPeachGreenTea = icedPeachGreenTea;
drinks.icedPeachGreenTeaLemonade = icedPeachGreenTeaLemonade;
