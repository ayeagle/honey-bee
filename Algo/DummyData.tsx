"use strict";

import * as ds from "./Datastructures";


const test: ds.Wallet = []

const randNames = [
    "Chair",
    "Table",
    "Lamp",
    "Bookshelf",
    "Vase",
    "Clock",
    "Mirror",
    "Candle",
    "Painting",
    "Rug",
    "Plant",
    "Basket",
    "Cup",
    "Plate",
    "Cutlery",
    "Pillow",
    "Blanket",
    "Bowl",
    "Statue",
    "Box",
    "Drawer",
    "Cabinet",
    "Curtain",
    "Shelf",
    "Picture Frame",
    'lkjlkfjsjk',
    'sdfksdfkjfdskjfskj'
  ];

function rand(baseline: number){
    return Math.random() * baseline + 1
}

for (let i = 0; i < 10; i++){
    console.log(i)
    const newMiles : ds.milesBenefits = {
        multiplier: 1 + rand(3),
        signup_threshold: 3000,
        signup_met: false
    }
    console.log(newMiles)

    const newPoints : ds.pointsBenefits = {
        multiplier: 1 + rand(3),
        signup_threshold: 3000,
        signup_met: false
    }
    const newCash : ds.cashBackBenefits = {
        multiplier: 1 + rand(3),
        signup_threshold: 3000,
        signup_met: false
    }

    const newnew : ds.Card = {
        name: randNames[Math.floor(rand(randNames.length+1))],
        issuer: ds.Bank.WF,
        miles : newMiles,
        cash : newCash,
        points: newPoints,
        limit: rand(20000),
        balance : rand(10000)
    }
    test.push(newnew)
    console.log(test)
}
console.log(test)