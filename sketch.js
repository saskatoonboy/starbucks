
const outputText = document.getElementById('output');
const drinkButton = document.getElementById('newDrinkButton');
const settingsButton = document.getElementById('settingsButton');

function randRun(func, start, increment, maxRuns) {

  if (increment < 0) {

    increment = 0;

  }

  let threshold = Math.random();
  let returns = [];
  let runs = 0;

  while (threshold < start && runs <= maxRuns) {

    returns.push(func());
    start = start * increment;
    runs = runs + 1;

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
  if (drink.canChangeWhip() && (Math.random() < parseInt(newWhipChance.value) / 100 || parseInt(whipValues[drink.topping.whip.value].value) == 0)) {

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

  // random espresso
  if (drink.shots > 0 || drink.shots.default > 0) {

    if ((Math.random() < parseInt(newEspressoChance.value) / 100) || parseInt(espressoValues[drink.espresso.value].value) == 0) {
      console.log('Changing Espresso');
      let espValue = 0;
      let weightTotal = 0;
      let espLow = parseInt(espressoValues[0].value);

      for (let i = 0; i < espressoValues.length; i++) {

        weightTotal = weightTotal + parseInt(espressoValues[i].value);

      }

      const rand = Math.floor(Math.random() * weightTotal);

      for (let i = 1; i < espressoValues.length; i++) {
        if (rand < espLow + parseInt(espressoValues[i].value) && rand >= espLow) {

          espValue = i;

        }

        espLow = espLow + parseInt(espressoValues[i].value);

      }
      console.log(espValue);
      drink.espresso.set(espValue);
    }

  }

  // random flavours
  let chosenFlavours = randRun(pickFlavour, 0.50, 0.40, parseInt(maxFlavours.value));
  let flavourTotal = chosenFlavours.length + drink.defaultFlavour.length;
  let sweetMultiplier = Math.random() * (parseFloat(maxSweetness.value) - parseFloat(minSweetness.value)) + parseFloat(minSweetness.value);
  let syrupAmount = Math.round(drink.getSyrupCount() * sweetMultiplier / flavourTotal * 2) / 2;
  let sweetnessTotal = drink.defaultFlavour.length * syrupAmount;

  if (chosenFlavours.length > 0) {

    for (let i = 0; i < drink.defaultFlavour.length; i++) {

      let chosen = drink.defaultFlavour[i];
  
      drink.syrups[chosen].set(syrupAmount);
  
    }
  
    for (let i = 0; i < chosenFlavours.length; i++) {
  
      let chosen = chosenFlavours[i];
  
      if (sweetnessTotal + syrupAmount <= drink.getSyrupCount() * parseFloat(maxSweetness.value)) {
        if (chosen in drink.defaultFlavour) {
          drink.syrups[chosen].set(0);
        } else {
          drink.syrups[chosen].set(syrupAmount);
        }
      }
  
    }
  }


  // random milk
  if (drink.milk.value > 0 && drink.canChangeMilk()) {

    if ((Math.random() < parseInt(newMilkChance.value) / 100) || parseInt(milkValues[drink.milk.value - 1].value) == 0) {

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

  let rand = Math.random();
  let total = 0;
  let flavour;
  for (key in flavourChance) {

    total = total + flavourChance[key];
    if (total > rand) {
      flavour = key;
      break
    }
  }

  return flavour;

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
