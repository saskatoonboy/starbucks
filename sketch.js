
const outputText = document.getElementById('output');
const drinkButton = document.getElementById('newDrinkButton');
const settingsButton = document.getElementById('settingsButton');
const sizesDiv = document.getElementById('sizes');
const iceDiv = document.getElementById('ice');
const coldDiv = document.getElementById('coldBar');
const hotDiv = document.getElementById('hotBar');
const sizeCheckboxes = [document.getElementById('short'),document.getElementById('tall'),document.getElementById('grande'),document.getElementById('venti'),document.getElementById('trenta')];
const iceValues = [document.getElementById('noIce'),document.getElementById('lightIce'),document.getElementById('normalIce'),document.getElementById('extraIce')];

const drinkEnables = {

  refreshers: document.getElementById('refreshers'),
  icedTea: document.getElementById('icedTea'),
  frappuccino: document.getElementById('frappuccino'),
  icedCoffee: document.getElementById('icedCoffee'),
  coldBrew: document.getElementById('coldBrew'),
  other: document.getElementById('other'),
  latte: document.getElementById('latte'),
  brewedTea: document.getElementById('brewedTea'),
  otherTea: document.getElementById('otherTea'),
  brewedCoffee: document.getElementById('brewedCoffee'),
  americano: document.getElementById('americano'),
  steamedMilk: document.getElementById('steamedMilk'),
  appleJuice: document.getElementById('appleJuice'),
  espresso: document.getElementById('espresso'),

}

function expandHot() {
  
}

function randRun(func, start, increment) {

  if (increment < 0) {

    increment = 0;

  }

  let threshold = Math.random();
  let returns = [];

  while (threshold < start) {

    returns.push(func());
    start = start * increment;

  }

  return returns;

}

let drink;
function makeDrink() {

  // choose random base drink
  let rand = Math.random();
  let total = 0;
  let name;
  for (key in drinkChance) {

    total = total + drinkChance[key];
    if (total > rand) {
      name = key;
      break
    }
  }

  drink = new drinks[name]();

  if (!(drinkEnables[drink.category].checked)) {

    return false;

  }


  // random size
  if (!(drink instanceof Espresso)) {
    let chosenSize = Math.floor(Math.random() * 5);

    while (!((chosenSize > 0 || drink.temp.value > 0) && (chosenSize < 4 || drink.canBeTrenta()) && chosenSize >= 0 && chosenSize <= 4 && sizeCheckboxes[chosenSize].checked)) {

      chosenSize = Math.floor(Math.random() * 5);

    }
    drink.changeSize(chosenSize);
  }
  drink.setDefaults();

  // random ice
  if (drink.temp.value == 0 && drink.canChangeIce()) {

    let iceValue = 0;
    let weightTotal = 0;
    let iceLow = parseInt(iceValues[0].value);

    for (let i = 0; i < iceValues.length; i++) {

      weightTotal = weightTotal + parseInt(iceValues[i].value);

    }

    const rand = Math.floor(Math.random() * weightTotal);
    console.log(rand);
    console.log(weightTotal);

    for (let i = 1; i < iceValues.length; i++) {
      console.log(i, iceLow, iceLow+parseInt(iceValues[i].value));
      if (rand < iceLow+parseInt(iceValues[i].value) && rand >= iceLow) {

        iceValue = i;

      }

      iceLow = iceLow + parseInt(iceValues[i].value);

    }

    drink.ice.set(iceValue);

  }

  // random shots
  if (drink.canChangeShots()) {
    let chosenShots = randRun(pickShot, 0.30, 0.50);
    let shotAdjustment = drink.shots.value;
    for (let i = 0; i < chosenShots.length; i++) {

      shotAdjustment = shotAdjustment + chosenShots[i];
      if (shotAdjustment < 0) {
        shotAdjustment = 0;
      }

    }

    drink.shots.set(shotAdjustment);
  }

  // random flavours
  let chosenFlavours = randRun(pickFlavour, 0.40, 0.25);
  for (let i = 0; i < chosenFlavours.length; i++) {

    let chosen = chosenFlavours[i];

    if (chosen in drink.defaultFlavour) {
      drink.syrups[chosen].set(0);
    } else {
      drink.syrups[chosen].set(Math.floor(drink.getSyrupCount() / (chosenFlavours.length + drink.defaultFlavour.length)));
    }

  }

  for (let i = 0; i < drink.defaultFlavour.length; i++) {

    let chosen = drink.defaultFlavour[i];


    drink.syrups[chosen].set(Math.ceil(drink.getSyrupCount() / (chosenFlavours.length + drink.defaultFlavour.length)));


  }


  // random milk
  if (drink.milk.value > 0) {

    if (Math.random() > 0.90) {
      drink.milk.set(Math.floor(Math.random()*11));
    }

  }

  drink.display()
  return true;
}

function pickFlavour() {

  return flavours[Math.floor(Math.random() * flavours.length)];

}

function pickShot() {

  const rand = Math.random();
  if (rand < 0.5) {
    return -1;
  }
  return 1;

}

while(!makeDrink());

function openSettings() {
  if (outputText.style.display == 'none') {
    outputText.style.display = '';
    drinkButton.style.display = 'inline-block';
    sizesDiv.style.display = 'none';
    iceDiv.style.display = 'none';
    coldDiv.style.display = 'none';
    hotDiv.style.display = 'none';
    if (!(sizeCheckboxes[1].checked || sizeCheckboxes[2].checked || sizeCheckboxes[3].checked)) {
      sizeCheckboxes[2].checked = true;
    }
  } else {
    outputText.style.display = 'none';
    drinkButton.style.display = 'none';
    sizesDiv.style.display = 'inline';
    iceDiv.style.display = 'inline';
    coldDiv.style.display = 'inline';
    hotDiv.style.display = 'inline';
  }

}
