
const outputText = document.getElementById('output');

class Drink {

  constructor() {

    this.size = new Size();
    this.espresso = new Espresso();
    this.temp = new Temp();
    this.shots = new Shots();
    this.syrups = generateSyrups();
    this.milk = new Milk();
    this.foam = new RangeCustomization('Foam', 2);
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
    this.name = 'Latte'

  }

  display() {
    const vals = [this.espresso, this.temp, this.shots, this.milk, this.foam, this.room, this.water, this.ice, this.matcha, this.vanillabean, this.strawberrypuree];
    let out = this.size.toString() + ' ' + this.name;
    for (let i = 0; i < vals.length; i++) {
      if (vals[i].toString() != '' && !vals[i].isDefault()) {
        out = out + '<br>' + vals[i].toString();
      }
    }
    const vals2 = [this.syrups, this.sweeteners, this.toppping, this.juice, this.tea, this.refresher];
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
    if (this.espresso.ristretto) {

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
    const vals2 = [this.syrups, this.sweeteners, this.toppping, this.juice, this.tea, this.refresher];
    for (let i = 0; i < vals2.length; i++) {
      for (let key in vals2[i]) {

        if (vals2[i][key].toString() != '' && !vals2[i][key].isDefault()) {
          vals2[i][key].setDefault();
        }

      }
    }
  }
}

let drink;
function makeDrink() {

  let rand = Math.random();
  let total = 0;
  let name;
  for (key in drinkChance) {

    total = total + drinkChance[key];
    if (total > rand) {
      name = key;
      console.log(name);
      break
    }

  }
  drink = drinks[name]();
  drink.setDefaults();
  drink.display()
}

makeDrink();
