
const sizesDiv = document.getElementById('sizes');
const flavourDiv = document.getElementById('flavour');
const iceDiv = document.getElementById('ice');
const whipDiv = document.getElementById('whip');
const milkDiv = document.getElementById('milk');
const espressoDiv = document.getElementById('espressoDiv');
const coldDiv = document.getElementById('coldBar');
const hotDiv = document.getElementById('hotBar');
const sizeCheckboxes = [document.getElementById('short'), document.getElementById('tall'), document.getElementById('grande'), document.getElementById('venti'), document.getElementById('trenta')];
const iceValues = [document.getElementById('noIce'), document.getElementById('lightIce'), document.getElementById('normalIce'), document.getElementById('extraIce')];
const espressoValues = [document.getElementById('decaf'), document.getElementById('normal'), document.getElementById('blonde')];
const whipValues = [document.getElementById('noWhip'), document.getElementById('lightWhip'), document.getElementById('normalWhip'), document.getElementById('extraWhip')];
const milkValues = [document.getElementById('nonfatMilk'), document.getElementById('oneMilk'), document.getElementById('twoMilk'), document.getElementById('wholeMilk'), document.getElementById('lactaidMilk'), document.getElementById('coconutMilk'), document.getElementById('almondMilk'), document.getElementById('soyMilk'), document.getElementById('oatMilk'), document.getElementById('heavyCream'), document.getElementById('breve')];
const newMilkChance = document.getElementById('changeMilk');
const newWhipChance = document.getElementById('changeWhip');
const newEspressoChance = document.getElementById('changeEspresso');
const maxFlavours = document.getElementById('maxFlavour');
const minSweetness = document.getElementById('minSweet');
const maxSweetness = document.getElementById('maxSweet');

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

function unselectColdBar() {

    const selections = ['refreshers','icedTea','frappuccino','icedCoffee','coldBrew','other'];

    for (let i = 0; i < selections.length; i++) {

        drinkEnables[selections[i]].checked = false;

    }

}

function selectColdBar() {

    const selections = ['refreshers','icedTea','frappuccino','icedCoffee','coldBrew','other'];

    for (let i = 0; i < selections.length; i++) {

        drinkEnables[selections[i]].checked = true;

    }

}

function unselectHotBar() {

    const selections = ['latte','brewedTea','otherTea','brewedCoffee','americano','steamedMilk','appleJuice','espresso'];

    for (let i = 0; i < selections.length; i++) {

        drinkEnables[selections[i]].checked = false;

    }

}

function selectHotBar() {

    const selections = ['latte','brewedTea','otherTea','brewedCoffee','americano','steamedMilk','appleJuice','espresso'];

    for (let i = 0; i < selections.length; i++) {

        drinkEnables[selections[i]].checked = true;

    }

}

function openSettings() {
    if (outputText.style.display == 'none') {
      outputText.style.display = '';
      drinkButton.style.display = 'inline-block';
      settingsButton.innerHTML = 'Settings';
      sizesDiv.style.display = 'none';
      flavourDiv.style.display = 'none';
      iceDiv.style.display = 'none';
      whipDiv.style.display = 'none';
      milkDiv.style.display = 'none';
      coldDiv.style.display = 'none';
      hotDiv.style.display = 'none';
      espressoDiv.style.display = 'none';
      if (!(sizeCheckboxes[1].checked || sizeCheckboxes[2].checked || sizeCheckboxes[3].checked)) {
        sizeCheckboxes[2].checked = true;
      }
      saveSettings();
  
    } else {
      outputText.style.display = 'none';
      drinkButton.style.display = 'none';
      settingsButton.innerHTML = 'Save Settings';
      sizesDiv.style.display = 'inline';
      flavourDiv.style.display = 'inline';
      iceDiv.style.display = 'inline';
      whipDiv.style.display = 'inline';
      milkDiv.style.display = 'inline';
      coldDiv.style.display = 'inline';
      hotDiv.style.display = 'inline';
      espressoDiv.style.display = 'inline';
    }
  
  }