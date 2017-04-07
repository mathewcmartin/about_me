'use strict';


function middleName() {
  var middleName = prompt('Is my middle name is Charles? \(Yes or No\)');
  middleName.toLowerCase();
  if (middleName === 'no') {
    alert('You\'re right, my middle name is not Charles. It\'s actually Clifford.');
    console.log(middleName);
  } else {
    alert('My middle name is actually Clifford.');
    console.log(middleName);
  }
} middleName();

function interests() {
  var interests = prompt('Can you guess if I\'m interested in coding?');
  if (interests.toLowerCase() === 'yes') {
    alert('Nice, you guessed right, my primary interest is coding.');
    console.log(interests);
  } else {
    alert('Actually, my primary interest is coding.');
    console.log(interests);
  }
} interests();

function miltaryBrat() {
  var interestingFact = prompt('Do you think I attended more than 5 public schools thru High School?');
  if (interestingFact.toLowerCase() === 'yes') {
    alert('You are good! I did attend more than 5 schools. I actually attended 6 schools as a \'military brat\' growing up.');
    console.log(interestingFact);
  } else {
    alert('Nope, it was 6 public schools. I was a military brat and moved quite a lot growing up.');
    console.log(interestingFact);
  }
} miltaryBrat();

function careerGoals() {
  var careerGoals = prompt('Do you think my ideal job is that as a Cartographer?');
  if (careerGoals.toLowerCase() === 'yes') {
    alert('You must have a crystal ball! Yep, being a Cartographer is in fact my career goal');
    console.log(careerGoals);
  } else {
    alert('Well almost... my career goal is in fact to be a Cartographer.');
    console.log(careerGoals);
  }
} careerGoals();

function focus(){
  var focus = prompt('Is Python the computer language you think I\'m focusing my studies?');
  if (focus.toLowerCase() === 'yes') {
    alert('Impressive, you are on the money!');
    console.log(focus);
  } else {
    alert('Actually, I\'m focusing my study on Python, as it is apparently the current standard in the GIS industry');
    console.log(focus);
  }
} focus();

function guessTheNumber() {
  for (var x = 1; x < 4; x++) {
    var numberOfKids = prompt('Can you guess how many kids I have? Hint: It\'s less than a dozen and more than zero.');
    var parseAnswer = parseInt(numberOfKids);
    if (parseAnswer === 2) {
      alert('Great guess! I do in fact have two awesome kids');
    } else if (parseAnswer < 2) {
      alert('Really close!');
    } else if (parseAnswer > 2) {
      alert('You\'re too high. A little lower');
    } else {
      alert('Your answer needs to be a number between 1 and 11.');
      console.log('Bogus entry');
    }
  }
} guessTheNumber();

function userGuess() {
  var userAnswers = [];
  var userGuess = prompt('Can you guess the state where I was born?');
  userAnswers.push(userGuess);
  for (var i = 1; i < 50; i++) {
    console.log(i);
    if (userGuess.toLowerCase() === 'california') {
      alert('You are good! I was in fact born in California.');
      console.log(userGuess);
      break;
    } else if (userGuess.toLowerCase() !== 'california') {
      alert('Sorry, try again!');
      console.log(userGuess);
      var userGuess = prompt('Guess another state please.');
      continue;
    }
  }
} userGuess();
