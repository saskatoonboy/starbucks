

function saveSettings() {

    let seed = "01";
    let val = 0;
    let increments = [1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024, 2048, 4096, 8192];
    for (let i = 0; i < sizeCheckboxes.length; i++) {
  
      if (sizeCheckboxes[i].checked) {
  
        val = val + increments[i];
  
      }
  
    }
  
    if (val < 10) {
  
      seed = seed + '0';
  
    }
    seed = seed + val;
    val = parseInt(maxFlavours.value);
    if (val < 10) {
      seed = seed + '0';
    }
    seed = seed + val;
    val = Math.floor(parseFloat(minSweetness.value)*2);
    if (val < 10) {
      seed = seed + '0';
    }
    seed = seed + val;
    val = Math.floor(parseFloat(maxSweetness.value)*2);
    if (val < 10) {
      seed = seed + '0';
    }
    seed = seed + val;
    val = parseInt(newWhipChance.value);
    if (val < 10) {
      seed = seed + '0';
    }
    seed = seed + val;
    for (let i = 0; i < iceValues.length; i++) {
  
      val = parseInt(iceValues[i].value);
      if (val < 10) {
        seed = seed + '0';
      }
      seed = seed + val;
  
    }
    for (let i = 0; i < whipValues.length; i++) {
  
      val = parseInt(whipValues[i].value);
      if (val < 10) {
        seed = seed + '0';
      }
      seed = seed + val;
  
    }
    val = parseInt(newMilkChance.value);
    if (val < 10) {
      seed = seed + '0';
    }
    seed = seed + val;
    for (let i = 0; i < milkValues.length; i++) {
  
      val = parseInt(milkValues[i].value);
      if (val < 10) {
        seed = seed + '0';
      }
      seed = seed + val;
  
    }
    let keys = Object.keys(drinkEnables);
    for (let i = 0; i < keys.length; i++) {
  
      if (drinkEnables[keys[i]].checked) {
  
        val = val + increments[i];
  
      }
  
    }
  
    if (val < 10) {
  
      seed = seed + '0';
  
    }
    if (val < 100) {
  
      seed = seed + '0';
  
    }
    if (val < 1000) {
  
      seed = seed + '0';
  
    }
    if (val < 10000) {
  
      seed = seed + '0';
  
    }
    seed = seed + val;
  
  
    setCookie('settings', seed, 7);
    return seed;
  
  }
  
  function loadSettings() {
  
    let seed = getCookie('settings');
  
    if (seed == '') return false;
  
    if (seed.substring(0, 2) == '00') {
  
      return versionZeroSettings(seed.substring(2));
  
    } else if (seed.substring(0, 2) == '01') {

      return versionOneSettings(seed.substring(2));

    } else {
  
      return false;
  
    }
  
  }

  function versionOneSettings(seed) {

    if (seed.length != 55) return false;

    if (versionZeroSettings(seed.substring(0, 2) + seed.substring(10))) {

      seed = seed.substring(2, 10);
      maxFlavours.value = parseInt(seed.substring(0, 2));
      seed = seed.substring(2);
      minSweetness.value = parseInt(seed.substring(0, 2))/2;
      seed = seed.substring(2);
      maxSweetness.value = parseInt(seed.substring(0, 2))/2;
      seed = seed.substring(2);
      newWhipChance.value = parseInt(seed.substring(0, 2));
      seed = seed.substring(2);

      return true;

    }

    return false;

  }
  
  function versionZeroSettings(seed) {
  
    if (seed.length != 47) return false;
  
    let sizeValues = getBinValues(parseInt(seed.substring(0, 2)), sizeCheckboxes.length);
  
    for (let i = 0; i < sizeCheckboxes.length; i++) {
  
      sizeCheckboxes[i].checked = sizeValues[i];
  
    }
  
    seed = seed.substring(2);
  
    for (let i = 0; i < iceValues.length; i++) {
  
      iceValues[i].value = parseInt(seed.substring(0, 2));
      seed = seed.substring(2);
  
    }
  
    for (let i = 0; i < whipValues.length; i++) {
  
      whipValues[i].value = parseInt(seed.substring(0, 2));
      seed = seed.substring(2);
  
    }
  
    newMilkChance.value = parseInt(seed.substring(0, 2));
    seed = seed.substring(2);
  
  
    for (let i = 0; i < milkValues.length; i++) {
  
      milkValues[i].value = parseInt(seed.substring(0, 2));
      seed = seed.substring(2);
  
    }
  
    let keys = Object.keys(drinkEnables);
    let enableValues = getBinValues(parseInt(seed), keys.length);
  
    for (let i = 0; i < keys.length; i++) {
  
      drinkEnables[keys[i]].checked = enableValues[i];
  
    }
    return true;
  
  }
  
  function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    let expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  }
  
  function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }
  
  function getBinValues(val, count) {
    let increments = [1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024, 2048, 4096, 8192];
    let values = [];
  
    for (let i = count - 1; i >= 0; i--) {
  
      if (val >= increments[i]) {
  
        val = val - increments[i];
        values.push(true);
  
      } else {
  
        values.push(false);
  
      }
  
    }
  
    return values.reverse();
  
  }