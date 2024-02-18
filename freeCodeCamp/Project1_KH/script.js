let inventory = [];
let value = 50;
let agility = 100;
let cuteness = 0;
let currentGear;
const button1 = document.querySelector('#button1');
const button2 = document.querySelector('#button2');
const button3 = document.querySelector('#button3');
const valueText = document.querySelector('#valueText');
const cuteText = document.querySelector('#cuteText');
const agilityText = document.querySelector('#agilityText');

let locations = [

    lobby = {
        l_function: [goStore, goPark, Surprise],
        l_button_text: ["Go to Store", "Go to Park", "Surprise"],
        l_text: 'You are in the lobby, where do you want to go?'
    },

    store = {
        l_function: [buyGear, getTrained, backtoLobby],
        l_button_text: ["Buy Gear", "Get Trained", "Back to Lobby"],
        l_text: 'Welcome Welcome, this is where you can get leveled up!'
    },

    park ={
        l_function: [playDate, agilityBattle, backtoLobby],
        l_button_text: ["Play Time", "Battle time", "Back to Lobby"],
        l_text: 'You are in the park meeting your friends, or nemesis?!'
    },

    surp = {
        l_function: [pick2 , pick8, backtoLobby],
        l_button_text: ["Two", "Eight", "Back to Lobby"],
        l_text: 'Try your luck and pick a number!'

    },
    
    beauty_contest = {
        // l_function: [agilityBattle, photoBooth, luckyDraw]
    }];
let gearIndex = 0;
let gear = {
    collar : {
        value: 30,
        agility: 30
    },

    leash : {
        value: 30,
        agility: 30
},

    harness : {
        value: 30,
        agility: 30
}};

function updateScene(location) {
    button1.innerText = location.l_button_text[0];
    button2.innerText = location.l_button_text[1];
    button3.innerText = location.l_button_text[2];
    text.innerText = location.l_text;
    button1.onclick = location.l_function[0];
    button2.onclick = location.l_function[1];
    button3.onclick = location.l_function[2]
}

button1.onclick = goStore;
button2.onclick = goPark;

function backtoLobby() {
    updateScene(locations[0]);
}

function goStore() {
    updateScene(locations[1]);
}

function buyGear() {
    if (inventory.length >= Object.keys(gear).length && value < 30 ) {
        text.innerText = 'You\'ve bought all you need!';
    } else if (value < 30) {
        text.innerText = "Sorry you don't have enough value.";
    } else { 
        value -= 30;
        valueText.innerText = value;
        // accessing the key of the dict, and grab the first one
        currentGear = Object.keys(gear)[gearIndex];
        inventory.push(currentGear);
        gearIndex ++;
        text.innerText = "You've bought a " + currentGear + '. You now have: \n';
        // for (let i = 0; i < 10; i++) {
        //     text.innerText += numbers[i] + "\n";
        inventory.forEach((element) => {
            text.innerText += element + '\n';
        });
    };
}


function getTrained() {
    updateScene(locations[0]);
}

function goPark() {
    updateScene(locations[2]);
    };

function playDate() {
    if (Math.random() < 0.5){
        cuteness += 30;
        cuteText.innerText = cuteness;
        text.innerText = "Someone said you're cute!";
    } else {
        cuteness -= 30;
        cuteText.innerText = cuteness;
        text.innerText = "Opps, you scared someone away!";
        if (cuteness < 0 || agility < 0) {
            beginning() ;
        };
    };
}

function agilityBattle() {
    if (Math.random() < 0.5){
        agility += 30;
        agilityText.innerText = agility;
        text.innerText = "You are the winner!";
        value += 10;
        valueText.innerText = value;
    } else {
        agility -= 50;
        agilityText.innerText = agility;
        text.innerText = "Opps, let's try again!";
        if (cuteness < 0 || agility < 0) {
            beginning() ;
        };
        };
    };


function Surprise() {
    updateScene(locations[3]);
}

function pick(guess){
    const numbers = [];
    while (numbers.length < 10) {
        numbers.push((Math.floor(Math.random() * 10)));
    };
    text.innerText = `Can you spot ${guess} ?\n`
    numbers.forEach((number) => {
        text.innerText += number + "\n";
    });
    if (numbers.includes(guess)) {
        text.innerText += `Yes! You picked ${guess}. You won! + 30 cuteness`
        cuteness += 30;
        cuteText.innerText = cuteness
    } else {
        text.innerText += `No! You picked ${guess}. You lose! - 30 cuteness`
        cuteness -= 30;
        cuteText.innerText = cuteness
    };
    if (cuteness < 0 || agility < 0 || value<0) {
        beginning();
    };
}

function pick2() {
    pick(2);
}

function pick8() {
    pick(8);
}

function beginning() {
    cuteness = 0;
    cuteText.innerText = cuteness;
    text.innerText = "Opps, you don't have enough points. Let's Start from Scratch";
    value = 50;
    valueText.innerText = value;
    agility = 100;
    agilityText.innerText = agility;
}