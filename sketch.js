
let drink = undefined;

function setup() {
  createCanvas(600, 600);
  drink = new Drink();

}

function draw() {
  background(0);
}

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
    this.toppping = generateToppings();
    this.cup = new Size();
    this.juice  = {apple:new RangeCustomization("Apple Juice", 0), peach:new RangeCustomization('Peach Blend', 0), lemonade:new RangeCustomization("Lemonade", 0)};
    this.matcha = new Sweetener('Matcha');
    this.tea = {green:new RangeCustomization("Green Tea", 0), passion:new RangeCustomization("Passion Tango Tea", 0), green:new RangeCustomization("Black Tea", 0)};
    this.vanillabean = new Sweetener('Vanilla Bean Powder');
    this.strawberrypuree = RangeCustomization('Strawberry Puree', 0);
    this.refresher = {mango:new RangeCustomization("Mango Dragonfruit", 0), strawberry:new RangeCustomization("Strawberry Acai", 0), kiwi:new RangeCustomization("Kiwi Starfruit", 0)};
    
  }

}
