'use strict';

const bluebird = require('bluebird');
const fs = require('fs');
const race = PromiseRace();
race.start();

function PromiseRace() {

  return {
    start: () => {

      // const score = {};

      const teams = JSON.parse(fs.readFileSync('./wacky_cars.json'));
      console.log('teams', teams);

      const cars = [];


      for (let i = 0; i < teams.length; i++) {
        cars.push(new Promise(function(resolve, reject) {
          setTimeout(resolve, Math.round(Math.random()*10) + 1, teams[i]);
        }));

        console.log('cars', cars);
      }

      for (let i = 0; i < 100; i++) {
        const winner = Promise.race(cars)
        .then((winner) => { console.log("Race finished the winner was " + winner.team + " driving " + winner.car + "!") });
      }
    }
  }
}