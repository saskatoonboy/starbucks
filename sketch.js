
const outputText = document.getElementById('output');
const drinkButton = document.getElementById('newDrinkButton');
const settingsButton = document.getElementById('settingsButton');

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

    for (let i = 1; i < iceValues.length; i++) {
      if (rand < iceLow + parseInt(iceValues[i].value) && rand >= iceLow) {

        iceValue = i;

      }

      iceLow = iceLow + parseInt(iceValues[i].value);

    }

    drink.ice.set(iceValue);

  }

  // random whip
  if (drink.canChangeWhip()) {

    let whipValue = 0;
    let weightTotal = 0;
    let whipLow = parseInt(whipValues[0].value);

    for (let i = 0; i < whipValues.length; i++) {

      weightTotal = weightTotal + parseInt(whipValues[i].value);

    }

    const rand = Math.floor(Math.random() * weightTotal);

    for (let i = 1; i < whipValues.length; i++) {
      if (rand < whipLow + parseInt(whipValues[i].value) && rand >= whipLow) {

        whipValue = i;

      }

      whipLow = whipLow + parseInt(whipValues[i].value);

    }

    console.log(whipValue);

    drink.topping.whip.set(whipValue);

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
  if (drink.milk.value > 0 && drink.canChangeMilk()) {

    if (Math.random() > parseInt(newMilkChance.value) / 100) {

      let milkValue = 0;
      let weightTotal = 0;
      let milkLow = parseInt(milkValues[0].value);

      for (let i = 0; i < milkValues.length; i++) {

        weightTotal = weightTotal + parseInt(milkValues[i].value);

      }

      const rand = Math.floor(Math.random() * weightTotal);

      for (let i = 1; i < milkValues.length; i++) {
        if (rand < milkLow + parseInt(milkValues[i].value) && rand >= milkLow) {

          milkValue = i;

        }

        milkLow = milkLow + parseInt(milkValues[i].value);

      }

      drink.milk.set(milkValue + 1);
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

while (!makeDrink());
loadSettings();
