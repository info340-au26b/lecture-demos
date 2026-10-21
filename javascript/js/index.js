'use strict';

console.log("Hello world");
console.log("It's a nice day out!");

const x = 42;
// console.log(x);

const headerElem = document.querySelector('header')
// console.log(headerElem);

const puppyElem = document.querySelector('#puppySection img');
// console.log(puppyElem);

const h1Elem = document.querySelector('h1');
h1Elem.textContent = "I have been changed!";

puppyElem.src = "img/husky.jpg";
puppyElem.alt = "a grown husky";

headerElem.classList.add('bg-warning');

// let hoursSlept;
// console.log(hoursSlept);

// console.log('forty' - 4)

// const num = 0;
// const str = '';
// console.log("are the same: ", num == str)


// //if variable exists
// if(dogName) {

// } 

const songListElem = document.querySelector('#songSection ol');
songListElem.innerHTML = '';

//"https://www.youtube.com/watch?v=J9NQFACZYEU"

//takes in 3 strings, returns <li>
function createSongListItem(artist, title, url) {
  const newLinkElem = document.createElement('a');
  newLinkElem.textContent = artist + " -  " + title;
  newLinkElem.href = url;
  const newListItem = document.createElement('li');
  newListItem.appendChild(newLinkElem);
  return newListItem;
}

// const calvinElem = createSongListItem("Calvin Harris", "Outside", "https://www.youtube.com/watch?v=J9NQFACZYEU");
// songListElem.appendChild(calvinElem);

// songListElem.appendChild(
//   createSongListItem("Creed", "One Last Breath", "https://www.youtube.com/watch?v=qnkuBUAwfe0")
// )


const lettersArray = ['a', 'b', 'c']; //literal syntax
lettersArray[1] = "B";
lettersArray[5] = "f";
console.log(lettersArray);

const songArray = ["Calvin Harris - Outside", "Creed - One Last Breath", "Travis Scott - Fein", "Cranberries - Linger", "Sophie - Immaterial", "Beatles - Hard Days Night"];


const agesObj = {sarah:42, amit:35, zhang:13};
console.log(agesObj);

const numWords = {1:'one', 2:'two', 3:'three'}
const numWordsKeys = Object.keys(numWords);
console.log(numWordsKeys);

const songObj = {
  artist: "Calvin Harris",
  title: "Outside",
  url: "https://www.youtube.com/watch?v=J9NQFACZYEU",
}

const songObjArray = [
  {
    artist: "Calvin Harris",
    title: "Outside",
    url: "https://www.youtube.com/watch?v=J9NQFACZYEU",
  },
  {
    artist: "Creed",
    title: "Last Breath",
    url: "https://www.youtube.com/watch?v=qnkuBUAwfe0"
  },
  {
    artist: "Travis Scott", title: "Fein"
  }
]


for(const songObj of songObjArray) {
  const newElem = createSongListItem(songObj.artist, songObj.title, songObj.url);
  songListElem.appendChild(newElem);
}
