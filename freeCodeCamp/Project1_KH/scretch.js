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

currentGear = Object.keys(gear)[0];
console.log(currentGear)
currentGear = Object.values(gear)[0];
console.log(currentGear);
console.log(Object.keys(gear).length);

for (const [key, value] of Object.entries(gear)) {
    console.log(`${key}: ${value}`);
};

console.log(Math.random());
console.log(Math.floor(Math.random() * 10));
console.log(Math.floor(Math.random() * 10));