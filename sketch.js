
const outputText = document.getElementById('output');
const hot = new Classification([2, 3, 4, 5]);
const cold = new Classification([3, 4, 6, 7]);
const frap = new Classification([2, 3, 4]);
const cold_brew = new Classification([1, 2, 3, 4])

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
      console.log(name);
      break
    }
  }
  drink = new drinks[name]();

  // random size
  if (!(drink instanceof Espresso)) {
    let chosenSize = Math.floor(Math.random() * 5);

    while (!((chosenSize > 0 || drink.temp.value > 0) && (chosenSize < 4 || drink.canBeTrenta()) && chosenSize >= 0 && chosenSize <= 4)) {

      chosenSize = Math.floor(Math.random() * 5);

    }
    drink.changeSize(chosenSize);
  }
  drink.setDefaults();

  // random ice
  if (drink.temp.value == 0 && !(drink instanceof Frappuccino || drink instanceof BlendedStrawberryLemonade)) {

    drink.ice.set(Math.floor(Math.random() * 4));

  }

  // random shots
  if (!(drink instanceof Refresher || (drink instanceof TeaLatte && !drink instanceof ChaiTeaLatte) || drink instanceof IcedTea || drink instanceof Tea || drink instanceof Lemonade || drink instanceof BlendedStrawberryLemonade)) {
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

  let chosenFlavours = randRun(pickFlavour, 0.75, 0.30);
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

  drink.display()
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

makeDrink();

function openSettings() {



}
