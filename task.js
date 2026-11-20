// 1
function createPlayerSettings() 
{
  const settings = {};

  return {
    setSetting(key, value) {
      settings[key] = value;
    },
    getSetting(key) {
      return settings[key];
    },
  };
}

const playerSettings = createPlayerSettings();
playerSettings.setSetting("sound", false);
console.log("Sound enabled:", playerSettings.getSetting("sound"));

// 2
(function () {
  const startMessage = "Game started";
  console.log(startMessage);
})();

// 3
const getGold = (function () {
  const gold = 100;
  return function () {
    return gold;
  };
})();

console.log("Gold:", getGold());

// 4
const playerModule = (function () {
  let name = "Hero";
  const level = 1;

  return {
    getName() 
    {
      return name;
    },
    setName(newName) 
    {
      name = newName;
    },
    getLevel() 
    {
      return level;
    },
  };
})();

playerModule.setName("Traveler");
console.log("Player:", playerModule.getName(), "Level:", playerModule.getLevel());

// 5
const inventoryModule = (function () {
  let itemCount = 0;

  return {
    addItem() 
    {
      itemCount += 1;
    },
    removeItem() 
    {
      if (itemCount > 0) itemCount -= 1;
    },
    getItemCount() 
    {
      return itemCount;
    },
  };
})();

inventoryModule.addItem();
inventoryModule.addItem();
inventoryModule.removeItem();
console.log("Items:", inventoryModule.getItemCount());

// 6
const characterModule = (function () {
  let level = 1;

  return {
    levelUp()
    {
      level += 1;
    },
    getLevel()
    {
      return level;
    },
    resetLevel() 
    {
      level = 1;
    },
  };
})();

characterModule.levelUp();
console.log("Character level:", characterModule.getLevel());
characterModule.resetLevel();
console.log("Level after reset:", characterModule.getLevel());

// 7
function countDown(number) 
{
  console.log(number);
  if (number === 0) return;
  countDown(number - 1);
}

countDown(5);
