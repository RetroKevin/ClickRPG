"use strict";

const player = {
  damage: 1,
  health: 100,
  mana: 100,
  armor: 0,
  level: 1,
  exp: 0,
  expLvl: 20,
  gold: 0,
};

const weapons = ["dagger", "sword", "axe", "staff", "mace"];
const armor = ["shield", "helmet", "chestplate", "gloves", "boots"];

const common = ["common", "everyday", "ordinary", "mundane", "normal", "usual"];

const uncommon = [
  "uncommon",
  "abnormal",
  "extraordinary",
  "exceptional",
  "noteworthy",
  "puculiar",
];

const rare = ["rare", "limited", "scarce", "strange", "unusual", "unthinkable"];

const legendary = [
  "fabled",
  "mythical",
  "famed",
  "legendary",
  "mysterious",
  "unreal",
];

const unique = [
  "unique",
  "only",
  "exclusive",
  "one",
  "unheard-of",
  "undiscovered",
];

const lootRarity = [common, uncommon, rare, legendary, unique];

const element = ["windy", "geokinetic", "flame", "wet"];

const suffix = ["sharpness", "force", "power", "doom", "piercing", "the-gods"];

const rngZero = (num) => {
  let rng = Math.floor(Math.random() * num);
  console.log(num, rng);
  return rng;
};

let currentLootRarity = lootRarity[rngZero(lootRarity.length)];

const newWeapon = () =>
  `The ${currentLootRarity[rngZero(currentLootRarity.length)]} ${
    element[rngZero(element.length)]
  } ${weapons[rngZero(weapons.length)]} of ${suffix[rngZero(suffix.length)]}`;

const weak = {
  damage: 3,
  health: 10,
  armor: 0,
  speed: 5,
  exp: 10,
  gold: 10,
};

const normal = {
  damage: 5,
  health: 20,
  armor: 1,
  speed: 4,
  exp: 20,
  gold: 20,
};

const strong = {
  damage: 8,
  health: 30,
  armor: 2,
  speed: 3,
  exp: 30,
  gold: 30,
};

const bossWeak = {
  damage: 8,
  health: 40,
  armor: 3,
  speed: 3,
  exp: 30,
  gold: 40,
};

const bossNormal = {
  damage: 10,
  health: 50,
  armor: 4,
  speed: 3,
  exp: 40,
  gold: 50,
};

const bossStrong = {
  damage: 15,
  health: 60,
  armor: 5,
  speed: 3,
  exp: 50,
  gold: 60,
};

const zoneWeak = {
  damage: 15,
  health: 70,
  armor: 6,
  speed: 3,
  exp: 100,
  gold: 70,
};

const zoneNormal = {
  damage: 20,
  health: 80,
  armor: 7,
  speed: 3,
  exp: 150,
  gold: 80,
};

const zoneStrong = {
  damage: 25,
  health: 90,
  armor: 8,
  speed: 3,
  exp: 200,
  gold: 90,
};

const enemy1 = {
  title: "Mushroom",
  img: "/img/Gnome.png",
  width: 6 + "rem",
  height: 8 + "rem",
  top: 7 + "rem",
  left: 11 + "rem",
  top2: 16 + "rem",
  left2: 10 + "rem",
  width2: 7 + "rem",
};

const enemy2 = {
  title: "Crow",
  img: "/img/Crow.png",
  width: 5 + "rem",
  height: 9 + "rem",
  top: 7 + "rem",
  left: 11 + "rem",
  top2: 16 + "rem",
  left2: 10 + "rem",
  width2: 7 + "rem",
};

const enemy3 = {
  title: "Bee",
  img: "/img/Machinerybee.png",
  width: 5 + "rem",
  height: 9 + "rem",
  top: 7 + "rem",
  left: 11 + "rem",
  top2: 16 + "rem",
  left2: 10 + "rem",
  width2: 6 + "rem",
};

const enemy4 = {
  title: "Pixie",
  img: "/img/Sylph.png",
  width: 6 + "rem",
  height: 8 + "rem",
  top: 7 + "rem",
  left: 11 + "rem",
  top2: 16 + "rem",
  left2: 10 + "rem",
  width2: 7 + "rem",
};

const enemy5 = {
  title: "Tigerchu",
  img: "/img/Tigerbunny.png",
  width: 6 + "rem",
  height: 8 + "rem",
  top: 7 + "rem",
  left: 11 + "rem",
  top2: 16 + "rem",
  left2: 10 + "rem",
  width2: 7 + "rem",
};

const enemy6 = {
  title: "Will-o the Wisp",
  img: "/img/SF_Will-o-the-wisp.png",
  width: 6 + "rem",
  height: 8 + "rem",
  top: 7 + "rem",
  left: 11 + "rem",
  top2: 16 + "rem",
  left2: 10 + "rem",
  width2: 7 + "rem",
};

const enemy7 = {
  title: "Orc",
  img: "/img/SF_Redogre.png",
  width: 6 + "rem",
  height: 8 + "rem",
  top: 7 + "rem",
  left: 9.5 + "rem",
  top2: 16 + "rem",
  left2: 10 + "rem",
  width2: 7 + "rem",
};

const enemy8 = {
  title: "Kappa",
  img: "/img/SF_Kappa.png",
  width: 6 + "rem",
  height: 8 + "rem",
  top: 7 + "rem",
  left: 11 + "rem",
  top2: 16 + "rem",
  left2: 10 + "rem",
  width2: 7 + "rem",
};

const enemy9 = {
  title: "Harpy",
  img: "/img/Harpy.png",
  width: 6 + "rem",
  height: 8 + "rem",
  top: 7 + "rem",
  left: 11 + "rem",
  top2: 16 + "rem",
  left2: 10 + "rem",
  width2: 7 + "rem",
};

const boss1 = {
  title: "Boss",
  img: "/img/SF_Anaconda.png",
  width: 10 + "rem",
  height: 13 + "rem",
  top: 5 + "rem",
  left: 9 + "rem",
  top2: 18 + "rem",
  left2: 7 + "rem",
  width2: 14 + "rem",
};

const boss2 = {
  title: "Boss",
  img: "/img/Matango.png",
  width: 10 + "rem",
  height: 13 + "rem",
  top: 5 + "rem",
  left: 9 + "rem",
  top2: 18 + "rem",
  left2: 7 + "rem",
  width2: 14 + "rem",
};

const boss3 = {
  title: "Boss",
  img: "/img/Goblin.png",
  width: 10 + "rem",
  height: 13 + "rem",
  top: 5 + "rem",
  left: 9 + "rem",
  top2: 18 + "rem",
  left2: 7 + "rem",
  width2: 14 + "rem",
};

const boss4 = {
  title: "Boss",
  img: "/img/SF_Brownbear.png",
  width: 10 + "rem",
  height: 13 + "rem",
  top: 5 + "rem",
  left: 9 + "rem",
  top2: 18 + "rem",
  left2: 7 + "rem",
  width2: 14 + "rem",
};

const boss5 = {
  title: "Boss",
  img: "/img/Birdman.png",
  width: 10 + "rem",
  height: 13 + "rem",
  top: 5 + "rem",
  left: 9 + "rem",
  top2: 18 + "rem",
  left2: 7 + "rem",
  width2: 14 + "rem",
};

const boss6 = {
  title: "Boss",
  img: "/img/SF_Blueogre.png",
  width: 8 + "rem",
  height: 13 + "rem",
  top: 5 + "rem",
  left: 9 + "rem",
  top2: 18 + "rem",
  left2: 7 + "rem",
  width2: 14 + "rem",
};

const zoneBoss1 = {
  title: "Mugger",
  img: "/img/Mercenary.png",
  width: 14 + "rem",
  height: 15 + "rem",
  top: 4 + "rem",
  left: 6.5 + "rem",
  top2: 19 + "rem",
  left2: 3.5 + "rem",
  width2: 20 + "rem",
};

const zoneBoss2 = {
  title: "Treant",
  img: "/img/Treant.png",
  width: 14 + "rem",
  height: 15 + "rem",
  top: 4 + "rem",
  left: 6.5 + "rem",
  top2: 19 + "rem",
  left2: 3.5 + "rem",
  width2: 20 + "rem",
};

const zoneBoss3 = {
  title: "TimeBomb",
  img: "/img/SF_Timebomb.png",
  width: 14 + "rem",
  height: 15 + "rem",
  top: 4 + "rem",
  left: 6.5 + "rem",
  top2: 19 + "rem",
  left2: 3.5 + "rem",
  width2: 20 + "rem",
};

const gameOver = {
  title: "Game Over",
  img: "/img/StarlitSky.png",
  color: "white",
};

const town = {
  title: "Town",
  img: "/img/Town1.png",
  color: "white",
};

const grassZone = {
  enemies: [enemy1, enemy2, enemy3],
  bosses: [boss1, boss2],
  zoneBoss: zoneBoss1,
  img: "/img/Grassland.png",
  opacity: 100,
};

const forestZone = {
  enemies: [enemy4, enemy5, enemy6],
  bosses: [boss3, boss4],
  zoneBoss: zoneBoss2,
  img: "/img/Jungle.png",
  opacity: 100,
};

const RuinsZone = {
  enemies: [enemy7, enemy8, enemy9],
  bosses: [boss5, boss6],
  zoneBoss: zoneBoss3,
  img: "/img/Ruins.png",
  opacity: 100,
};

const zones = [grassZone, forestZone, RuinsZone];
const difficulty = [weak, normal, strong];
const bossDifficulty = [bossWeak, bossNormal, bossStrong];
const zoneDifficulty = [zoneWeak, zoneNormal, zoneStrong];
let currentDifficulty = difficulty[0];
let currentZone = zones[0];
let zoneNum = 0;
let enemyLvl = 1;
let currentEnemy = currentZone.enemies[0];
let currentEnemyHealth = currentDifficulty.health;
let currentSpeed = 0;
let timer;
let battleTimer;
let battleRefreshTimer;
let battleEndTimer;
let inBattle = true;
let gameIsOver = false;
let currentHealth = player.health;
let currentMana = player.mana;
let skillReady = true;
const skillMax = 450;
let skillAmount = skillMax;
let monsterNumber = 10;
let monsterCount = 1;
let battleCount = 1;
let zoneProgress = true;

const shopButtons = document.createElement("dev");
shopButtons.classList.add("shopButtons");
shopButtons.innerHTML =
  "<button id='itemShop' alt='itemShop' class='itemShop'>Item Shop</button><button id='potionShop' alt='potionShop' class='potionShop'>Potion Shop</button><button id='inn' alt='inn' class='inn'>INN</button><button id='battle' alt='battle' class='battle'>Return to battle</button><button id='newBattle' alt='newBattle' class='newBattle'>Start a new battle</button>";

const itemShopMenu = document.createElement("dev");
itemShopMenu.classList.add("itemShopMenu");
itemShopMenu.innerHTML =
  "<img src='img/People2_5.png' alt='itemShopKeeper' class='itemShopKeeper'/><button id='buyItems' alt='buyItems' class='buyItems'>Buy Items</button><button id='sellItems' alt='sellItems' class='sellItems'>Sell Items</button><button id='leaveItems' alt='leaveItems' class='leaveItems'>Leave Item Shop</button>";

const potionShopMenu = document.createElement("dev");
potionShopMenu.classList.add("potionShopMenu");
potionShopMenu.innerHTML =
  "<img src='img/People4_5.png' alt='potionShopKeeper' class='potionShopKeeper'/><button id='buyHP' alt='buyHP' class='buyHP'>Buy Health Potion</button><button id='buyMana' alt='buyMana' class='buyMana'>Buy Mana Potion</button><button id='leavePotion' alt='leavePotion' class='leavePotion'>Leave Potion Shop</button>";

const innMenu = document.createElement("dev");
innMenu.classList.add("innMenu");
innMenu.innerHTML =
  "<img src='img/People1_5.png' alt='innKeeper' class='innKeeper'/><button id='rest' alt='rest' class='rest'>Rest</button><button id='leaveInn' alt='leaveInn' class='leaveInn'>Leave Inn</button>";

let gold = document.querySelector(".gold");
let lvl = document.querySelector(".lvl");
const enemyBlock = document.querySelector(".enemyBlock");
let enemy = document.querySelector(".enemy");
let healthBar = document.querySelector(".healthBar");
let healthBB = document.querySelector(".healthBarBackground");
let UI = document.querySelector(".UI");
UI.append(shopButtons);
UI.append(itemShopMenu);
UI.append(potionShopMenu);
UI.append(innMenu);
let background = document.getElementById("background");
let battleNumber = document.querySelector(".battleNumber");
let battleMonster = document.querySelector(".battleMonster");
let expBar = document.querySelector(".expBar");
let atkBar = document.querySelector(".atkBar");
let pHealthBar = document.querySelector(".playerHealthBar");
let manaBar = document.querySelector(".manaBar");
let healthPotion = document.querySelector(".healthPotion");
let manaPotion = document.querySelector(".manaPotion");
let skillBlock = document.querySelector(".skillBlock");
let skillProgress = document.querySelector(".skillProgress");
let skillBar = document.querySelector(".skillBar");
let skill = document.querySelector(".skill");
let teleport = document.querySelector(".teleport");
const townMenu = document.querySelector(".shopButtons");
const itemShop = document.querySelector(".itemShop");
const leaveItems = document.querySelector(".leaveItems");
const potionShop = document.querySelector(".potionShop");
const leavePotion = document.querySelector(".leavePotion");
const inn = document.querySelector(".inn");
const battleReturn = document.querySelector(".battle");
const newBattle = document.querySelector(".newBattle");
const body = document.querySelector(".body");
const itemShopKeeper = document.querySelector(".itemShopKeeper");
const potionShopKeeper = document.querySelector(".potionShopKeeper");
const innKeeper = document.querySelector(".innKeeper");
let hpPotionCounter = document.querySelector(".hpPotionCounter");
let manaPotionCounter = document.querySelector(".manaPotionCounter");
const buyHP = document.querySelector(".buyHP");
const buyMana = document.querySelector(".buyMana");
const rest = document.querySelector(".rest");
const leaveInn = document.querySelector(".leaveInn");

skillProgress.style.opacity = 0 + "%";
hpPotionCounter.textContent = 0;
manaPotionCounter.textContent = 0;
battleNumber.textContent = `Stage: ${battleCount}`;
battleMonster.textContent = `Battle: ${monsterCount}/${monsterNumber}`;
gold.textContent = `Gold: ${player.gold}`;

townMenu.style.position = "absolute";
townMenu.style.top = "4.5rem";
townMenu.style.textAlign = "center";
townMenu.style.left = "8rem";
townMenu.style.width = "5rem";
townMenu.style.border = "10px ridge blue";
townMenu.style.padding = "10px";
townMenu.style.background =
  "linear-gradient(to bottom right, lightblue, darkblue )";
townMenu.style.visibility = "hidden";
battleReturn.style.cursor = "pointer";
newBattle.style.cursor = "pointer";
itemShop.style.cursor = "pointer";
potionShop.style.cursor = "pointer";
leaveItems.style.cursor = "pointer";
leavePotion.style.cursor = "pointer";
inn.style.cursor = "pointer";
leaveInn.style.cursor = "pointer";

itemShopKeeper.style.width = "5rem";
itemShopMenu.style.border = "10px ridge blue";
itemShopMenu.style.padding = "10px";
itemShopMenu.style.background =
  "linear-gradient(to bottom right, lightblue, darkblue )";
itemShopMenu.style.position = "absolute";
itemShopMenu.style.textAlign = "center";
itemShopMenu.style.width = "5rem";
itemShopMenu.style.top = "4rem";
itemShopMenu.style.left = "8rem";
itemShopMenu.style.visibility = "hidden";

potionShopKeeper.style.width = "5rem";
potionShopMenu.style.border = "10px ridge blue";
potionShopMenu.style.padding = "10px";
potionShopMenu.style.background =
  "linear-gradient(to bottom right, lightblue, darkblue )";
potionShopMenu.style.position = "absolute";
potionShopMenu.style.textAlign = "center";
potionShopMenu.style.width = "5rem";
potionShopMenu.style.top = "4rem";
potionShopMenu.style.left = "8rem";
potionShopMenu.style.visibility = "hidden";

innKeeper.style.width = "5rem";
innMenu.style.border = "10px ridge blue";
innMenu.style.padding = "10px";
innMenu.style.background =
  "linear-gradient(to bottom right, lightblue, darkblue )";
innMenu.style.position = "absolute";
innMenu.style.textAlign = "center";
innMenu.style.width = "5rem";
innMenu.style.top = "4rem";
innMenu.style.left = "8rem";
innMenu.style.visibility = "hidden";

const removeShake = () => (enemy.style.animation = "");

const removeScreenShake = () => {
  background.style.animation = "";
};

// const rngZero = (num) => Math.floor(Math.random() * num);

const rngMinMax = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);

const goldMin = (gold) => gold * 0.75;

const earnEXP = (exp) => (player.exp += exp);

const earnGold = (gold) => (player.gold += rngMinMax(goldMin(gold), gold));

const attack = (damage, armor, health) => health - (damage - armor);

const goldDisplay = () => (gold.textContent = `Gold: ${player.gold}`);

const enemyShake = () => {
  enemy.style.animation = "shake .1s infinite";
  setTimeout(removeShake, 150);
};

const screenShake = () => {
  background.style.animation = "shake .1s infinite";
  setTimeout(removeScreenShake, 150);
};

const setTimer = () => {
  if (timer) clearInterval(timer);
  timer = setInterval(enemyAtkProgress, 1000, currentSpeed);
  return timer;
};

const setBattleTimer = () => {
  if (skillAmount > 0) {
    if (battleTimer) clearInterval(battleTimer);
    battleTimer = setInterval(skillAttack, 100);
    return battleTimer;
  }
};

const setBattleRefreshTimer = () => {
  if (skillAmount < skillMax) {
    if (battleRefreshTimer) clearInterval(battleRefreshTimer);
    battleRefreshTimer = setInterval(skillRecharge, 50);
    return battleRefreshTimer;
  }
};

const setBattleEndTimer = () => {
  if (battleEndTimer) clearInterval(battleEndTimer);
  battleEndTimer = setInterval(battleEnd, 500);
  return battleEndTimer;
};

const clearTimers = () => {
  if (timer) clearInterval(timer);
  if (battleRefreshTimer) clearInterval(battleRefreshTimer);
  if (battleTimer) clearInterval(battleTimer);
  if (battleEndTimer) clearInterval(battleEndTimer);
};

const monsterPicker = () => {
  currentEnemy = currentZone.enemies[rngZero(currentZone.enemies.length)];
  currentDifficulty = difficulty[rngZero(difficulty.length)];
};

const bossPicker = () => {
  currentEnemy = currentZone.bosses[rngZero(currentZone.bosses.length)];
  currentDifficulty = bossDifficulty[rngZero(bossDifficulty.length)];
};

const zoneBossPicker = () => {
  currentEnemy = currentZone.zoneBoss;
  currentDifficulty = zoneDifficulty[rngZero(zoneDifficulty.length)];
};

const zonePicker = () => {
  currentZone = zones[zoneNum];
  background.src = currentZone.img;
};

const monsterSetup = () => {
  currentEnemyHealth = currentDifficulty.health * enemyLvl;
  enemy.src = currentEnemy.img;
  enemy.style.width = currentEnemy.width;
  enemy.style.height = currentEnemy.height;
  enemy.style.top = currentEnemy.top;
  enemy.style.left = currentEnemy.left;
  healthBB.style.width = currentEnemy.width2;
  healthBB.style.top = currentEnemy.top2;
  healthBB.style.left = currentEnemy.left2;
  healthBarProgress(
    currentDifficulty.health * enemyLvl,
    currentDifficulty.health * enemyLvl
  );
  currentSpeed = 0;
  atkBarProgress(currentDifficulty.speed, currentSpeed);
  enemy.style.opacity = 100;
  inBattle = true;
  setTimer();
};

const battleEnd = () => {
  if (timer) clearInterval(timer);
  if (battleEndTimer) clearInterval(battleEndTimer);
  earnEXP(currentDifficulty.exp * enemyLvl);
  if (player.exp >= player.expLvl) lvlUp();
  expBarProgress(player.expLvl, player.exp);
  earnGold(currentDifficulty.gold * enemyLvl);
  goldDisplay();
  monsterCount++;
  battleMonster.textContent = `Battle: ${monsterCount}/${monsterNumber}`;
  if (monsterCount < monsterNumber) {
    monsterPicker();
  } else if (monsterCount === monsterNumber) {
    if (battleCount % 5 == 0) {
      enemyLvl++;
      zoneBossPicker();
    } else bossPicker();
  } else if (monsterCount > monsterNumber) {
    if (zoneNum === 0) {
      zoneProgress = true;
      zoneNum++;
      zonePicker();
    } else if (zoneNum === zones.length - 1) {
      zoneProgress = false;
      zoneNum--;
      zonePicker();
    } else if (zoneNum < zones.length - 1) {
      zoneProgress === true ? zoneNum++ : zoneNum--;
      zonePicker();
    }
    monsterPicker();
    monsterCount = 1;
    battleCount++;
    battleMonster.textContent = `Battle: ${monsterCount}/${monsterNumber}`;
    battleNumber.textContent = `Stage: ${battleCount}`;
  }
  monsterSetup();
};

const healthBarProgress = (max, cur) => {
  let percent = (cur / max) * 100;
  healthBar.style.width = percent + "%";
};

const expBarProgress = (max, cur) => {
  let percent = (cur / max) * 100;
  expBar.style.width = percent + "%";
};

const atkBarProgress = (max, cur) => {
  let percent = (cur / max) * 100;
  atkBar.style.height = percent + "%";
};

const playerHealthBarProgress = (max, cur) => {
  let percent = (cur / max) * 100;
  pHealthBar.style.height = percent + "%";
};

const manaBarProgress = (max, cur) => {
  let percent = (cur / max) * 100;
  manaBar.style.height = percent + "%";
};

const skillBarProgress = (max, cur) => {
  let percent = (cur / max) * 100;
  skillBar.style.height = percent + "%";
};

const gameOverScreen = () => {
  inBattle = false;
  gameIsOver = true;
  if (timer) clearInterval(timer);
  background.src = gameOver.img;
  background.style.opacity = 100 + "%";
  UI.style.opacity = 0 + "%";
  enemy.style.cursor = "default";
  healthPotion.style.cursor = "default";
  manaPotion.style.cursor = "default";
  battleNumber.style.top = 9 + "rem";
  battleNumber.style.left = 7 + "rem";
  battleNumber.style.color = gameOver.color;
  battleNumber.textContent = gameOver.title;
};

const enemyAtkProgress = (speed) => {
  if (timer) clearInterval(timer);
  currentSpeed++;
  atkBarProgress(currentDifficulty.speed, currentSpeed);
  if (currentSpeed > currentDifficulty.speed) {
    let eDmg = attack(
      currentDifficulty.damage * enemyLvl,
      player.armor,
      currentHealth
    );
    if (eDmg > currentHealth) eDmg = currentHealth;
    currentHealth = eDmg;
    playerHealthBarProgress(player.health, currentHealth);
    screenShake();
    if (currentHealth <= 0) gameOverScreen();
    currentSpeed = 0;
    atkBarProgress(currentDifficulty.speed, currentSpeed);
    setTimer();
  }
  if (inBattle === true) {
    setTimer();
  }
};

if (inBattle) enemyAtkProgress();

const lvlUp = () => {
  player.level++;
  player.mana += 10;
  manaBarProgress(player.mana, currentMana);
  lvl.textContent = `Lvl: ${player.level}`;
  player.damage++;
  player.health += 10;
  playerHealthBarProgress(player.health, currentHealth);
  player.armor++;
  player.expLvl += Math.trunc(player.level * 50);
  player.exp = 0;
};

const attackEnemy = () => {
  const dmg = attack(
    player.damage,
    currentDifficulty.armor * enemyLvl,
    currentEnemyHealth
  );
  enemyShake();
  if (dmg >= currentEnemyHealth) {
    currentEnemyHealth--;
    healthBarProgress(currentDifficulty.health * enemyLvl, currentEnemyHealth);
  } else {
    currentEnemyHealth = dmg;
    healthBarProgress(currentDifficulty.health * enemyLvl, currentEnemyHealth);
  }
};

const deadEnemy = () => {
  inBattle = false;
  enemy.style.opacity = 0;
  healthBarProgress(currentDifficulty.health * enemyLvl, 0);
  setBattleEndTimer();
};

const clearSmallUI = () => {
  teleport.style.visibility = "hidden";
  enemyBlock.style.visibility = "hidden";
  skillBlock.style.visibility = "hidden";
};

const battleCheck = () => {
  if (inBattle === true) {
    attackEnemy();
    if (currentEnemyHealth <= 0) {
      deadEnemy();
    }
  }
};

const skillRecharge = () => {
  skillAmount++;
  skillBarProgress(skillMax, skillAmount);
  if (skillAmount < skillMax) {
    setBattleRefreshTimer();
  } else {
    clearInterval(battleRefreshTimer);
    skillReady = true;
    skillProgress.style.opacity = 0 + "%";
  }
};

const skillAttack = () => {
  skillAmount--;
  skillBarProgress(skillMax, skillAmount);
  if (skillAmount > 0) {
    battleCheck();
    setBattleTimer();
  } else {
    clearInterval(battleTimer);
    skillRecharge();
  }
};

enemy.addEventListener("mousedown", function (e) {
  e.preventDefault();
  battleCheck();
});

skillProgress.addEventListener("mouseover", function (e) {
  e.preventDefault();
  if (skillReady === true && currentMana >= 50) {
    skillProgress.style.cursor = "pointer";
  } else skillProgress.style.cursor = "not-allowed";
});

skillProgress.addEventListener("click", function (e) {
  e.preventDefault();
  if (skillReady === true && currentMana >= 50) {
    skillProgress.style.opacity = 100 + "%";
    skillReady = false;
    currentMana -= 50;
    manaBarProgress(player.mana, currentMana);
    skillAttack();
  }
});

healthPotion.addEventListener("click", function (e) {
  e.preventDefault();
  if (currentHealth < player.health && hpPotionCounter.textContent > 0) {
    hpPotionCounter.textContent--;
    currentHealth += player.health * 0.25;
    if (currentHealth > player.health) currentHealth = player.health;
    playerHealthBarProgress(player.health, currentHealth);
  }
});

healthPotion.addEventListener("mouseover", function (e) {
  e.preventDefault();
  if (currentHealth < player.health && hpPotionCounter.textContent > 0) {
    healthPotion.style.cursor = "cell";
  } else healthPotion.style.cursor = "not-allowed";
});

manaPotion.addEventListener("mouseover", function (e) {
  e.preventDefault();
  if (currentMana < player.mana && manaPotionCounter.textContent > 0) {
    manaPotion.style.cursor = "cell";
  } else manaPotion.style.cursor = "not-allowed";
});

manaPotion.addEventListener("click", function (e) {
  e.preventDefault();
  if (currentMana < player.mana && manaPotionCounter.textContent > 0) {
    manaPotionCounter.textContent--;
    currentMana += player.mana * 0.25;
    if (currentMana > player.mana) currentMana = player.mana;
    manaBarProgress(player.mana, currentMana);
  }
});

teleport.addEventListener("click", function (e) {
  e.preventDefault();
  clearTimers();
  inBattle = false;
  clearSmallUI();
  townMenu.style.visibility = "visible";
  background.src = town.img;
  battleNumber.textContent = town.title;
});

battleReturn.addEventListener("click", function (e) {
  e.preventDefault();
  townMenu.style.visibility = "hidden";
  teleport.style.visibility = "visible";
  enemyBlock.style.visibility = "visible";
  skillBlock.style.visibility = "visible";
  inBattle = true;
  zonePicker();
  battleNumber.textContent = `Stage: ${battleCount}`;
  enemyAtkProgress();
  if (skillReady === false) skillRecharge();
});

newBattle.addEventListener("click", function (e) {
  e.preventDefault();
  skillAmount = skillMax;
  monsterNumber = 10;
  monsterCount = 1;
  battleCount = 1;
  zoneNum = 0;
  enemyLvl = 1;
  skillReady = true;
  currentZone = zones[0];
  currentEnemy = currentZone.enemies[0];
  currentDifficulty = difficulty[0];
  background.src = currentZone.img;
  monsterSetup();
  townMenu.style.visibility = "hidden";
  teleport.style.visibility = "visible";
  enemyBlock.style.visibility = "visible";
  skillBlock.style.visibility = "visible";
  battleMonster.textContent = `Battle: ${monsterCount}/${monsterNumber}`;
  battleNumber.textContent = `Stage: ${battleCount}`;
  inBattle = true;
  skillBarProgress(skillMax, skillAmount);
  skillProgress.style.opacity = 0 + "%";
  enemyAtkProgress();
});

itemShop.addEventListener("click", function (e) {
  e.preventDefault();
  townMenu.style.visibility = "hidden";
  itemShopMenu.style.visibility = "visible";
});

leaveItems.addEventListener("click", function (e) {
  e.preventDefault();
  townMenu.style.visibility = "visible";
  itemShopMenu.style.visibility = "hidden";
});

potionShop.addEventListener("click", function (e) {
  e.preventDefault();
  townMenu.style.visibility = "hidden";
  potionShopMenu.style.visibility = "visible";
});

leavePotion.addEventListener("click", function (e) {
  e.preventDefault();
  townMenu.style.visibility = "visible";
  potionShopMenu.style.visibility = "hidden";
});

inn.addEventListener("click", function (e) {
  e.preventDefault();
  townMenu.style.visibility = "hidden";
  innMenu.style.visibility = "visible";
});

leaveInn.addEventListener("click", function (e) {
  e.preventDefault();
  innMenu.style.visibility = "hidden";
  townMenu.style.visibility = "visible";
});

buyHP.addEventListener("mouseover", function (e) {
  e.preventDefault();
  player.gold < 250
    ? (buyHP.style.cursor = "not-allowed")
    : (buyHP.style.cursor = "pointer");
});

buyHP.addEventListener("click", function (e) {
  e.preventDefault();
  if (player.gold >= 250 && hpPotionCounter.textContent < 9) {
    player.gold -= 250;
    goldDisplay();
    hpPotionCounter.textContent++;
  } else buyHP.style.cursor = "not-allowed";
});

buyMana.addEventListener("mouseover", function (e) {
  e.preventDefault();
  player.gold < 250
    ? (buyMana.style.cursor = "not-allowed")
    : (buyMana.style.cursor = "pointer");
});

buyMana.addEventListener("click", function (e) {
  e.preventDefault();
  if (player.gold >= 250 && manaPotionCounter.textContent < 9) {
    player.gold -= 250;
    goldDisplay();
    manaPotionCounter.textContent++;
  } else buyMana.style.cursor = "not-allowed";
});

rest.addEventListener("mouseover", function (e) {
  e.preventDefault();
  player.gold < 500
    ? (rest.style.cursor = "not-allowed")
    : (rest.style.cursor = "cell");
});

rest.addEventListener("click", function (e) {
  e.preventDefault();
  if (
    (player.gold >= 500 && currentHealth < player.health) ||
    (player.gold >= 500 && currentMana < player.mana)
  ) {
    currentHealth = player.health;
    currentMana = player.mana;
    player.gold -= 500;
    manaBarProgress(currentMana, player.mana);
    playerHealthBarProgress(currentHealth, player.health);
    goldDisplay();
  } else rest.style.cursor = "not-allowed";
});
