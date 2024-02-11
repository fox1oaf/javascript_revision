let xp = 0;
let health = 100;
let gold = 50;
let currentWeapon = 0;
let fighting;    
let monsterHealth;
let inventory = ['stick', 'dagger', 'sword'];
const button1 = document.querySelector("#button1");
const button2 = document.querySelector("#button2");
const button3 = document.querySelector("#button3");
const text = document.querySelector("#text");
const xpText = document.querySelector("#xpText");
const healthText = document.querySelector("#healthText");
const goldText = document.querySelector("#goldText");
const monsterStats = document.querySelector("#monsterStats");
const monsterName = document.querySelector("#monsterName");
const monsterHealthText = document.querySelector("#monsterHealth");

//initialize buttons.
button1.onclick = goStore;
button2.onclick = goCave;
button3.onclick = fightDragon;

//creating objects here
const locations = [
    {
      name: "town square",
      "button text": ["Go to store", "Go to cave", "Fight dragon"],
      "button functions": [goStore, goCave, fightDragon],
      text: "You are in the town square. You see a sign that says \"Store\"."
    },
    {
      name: "store",
      "button text": ["Buy 10 health (10 gold)", "Buy weapon (30 gold)", "Go to town square"],
      "button functions": [buyHealth, buyWeapon, goTown],
      text: "You enter the store."
    }
  ];

// very interesting here. Do you are not adding new button when you click 'Go to store'
// instead the 3 buttons remains its position, but the text changes 
// Go to store, then button 1, 2, 3 change the text to store-related; then update the button's function
// *** innerText is first linked to the defined html element, then change the name of the buttons
function goTown() {
    button1.innerText = "Go to store";
    button2.innerText = "Go to cave";
    button3.innerText = "Fight dragon";
    button1.onclick = goStore;
    button2.onclick = goCave;
    button3.onclick = fightDragon;
    text.innerText = "You are in the town square. You see a sign that says \"Store\".";
  }
  
function goStore() {
    button1.innerText = "Buy 10 health (10 gold)";
    button2.innerText = "Buy weapon (30 gold)";
    button3.innerText = "Go to town square";
    button1.onclick = buyHealth;
    button2.onclick = buyWeapon;
    button3.onclick = goTown;
    text.innerText = "You enter the store.";
}
  
function goCave() {
    console.log("Going to cave.");
}
  
function fightDragon() {
    console.log("Fighting dragon.");
}

function goCave() {
    console.log("Going to cave.");
  }
  
function fightDragon() {
    console.log("Fighting dragon.");
}
  
function buyHealth() { 
}
  
function buyWeapon() {
  
}