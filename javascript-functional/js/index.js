'use strict';

/** Functional Programming Demo **/
function sayHello(name) { 
   console.log("Hello, "+name);
}

function sayGoodbye(name) {
  console.log("Goodbye," + name);
}

const sayHowdy = function(name) {
  console.log("Howdy, "+name);
}

const message = "hello";

function callWithWorld(aFunction) {
   aFunction("world");
}

// callWithWorld(sayHello);
// callWithWorld(sayGoodbye);
// callWithWorld(function(name) {
//   console.log("Howdy, "+name);
// });


function doTogether(func1, secondCallback){
    // console.log(firstCallback);
    func1();  //execute the first function
    secondCallback();  //execute the second function
    console.log('at the "same time"!');
}

function patHead() {
    console.log('pat your head');
}

function rubBelly() {
    console.log('rub your belly');
}

// doTogether(patHead, rubBelly());


// const array = ['a','b','c'];

// array.forEach(function(item) {
//    console.log(item);
// });


// const newArray = oldArray.map(function(item) {
//   const transformed = item+"transformed";
//   return transformed;
// })



/** Data **/
const songObjArray = [
  { artist: "Queen", title: "Don't Stop Me Now", youtubeUrl: "https://www.youtube.com/watch?v=HgzGwKwLmgM" },
  { artist: "David Bowie", title: "Starman", youtubeUrl: "https://www.youtube.com/watch?v=rpO1U-nEgRU" },
  { artist: "HUNTR/X", title: "Golden", youtubeUrl: "https://www.youtube.com/watch?v=yebNIHKAC4A" },
  { artist: "Calvin Harris", title: "Outside", youtubeUrl: "https://www.youtube.com/watch?v=J9NQFACZYEU" },
  { artist: "Creed", title: "Last Breath", youtubeUrl: "https://www.youtube.com/watch?v=qnkuBUAwfe0" },
];



/** Render Functions **/

//accepts an object {} as an argument, returns an <li> element
function createSongListItem(aSongObj) {
  const newLinkElem = document.createElement('a');
  newLinkElem.textContent = aSongObj.artist + " -  " + aSongObj.title;
  newLinkElem.href = aSongObj.youtubeUrl;
  const newListItem = document.createElement('li');
  newListItem.appendChild(newLinkElem);
  return newListItem;
}

//accepts an array of objects [{},{}] as an arg, renders to screen
function renderSongList(aSongObjArray) {
  const songListElem = document.querySelector('#songSection ol');
  songListElem.innerHTML = ''; //clear previous list
  for(const songObj of aSongObjArray) {
    const newElem = createSongListItem(songObj);
    songListElem.appendChild(newElem);
  }
}

//call function to render the data!
renderSongList(songObjArray); 

/** Interactivity **/
let isSmallPuppy = true; //state



const puppyButton = document.querySelector('#puppySection button');

puppyButton.addEventListener('click', function(event) {
  console.log("You clicked me!");
  const puppyImg = document.querySelector('#puppySection img');

  //change the state
  isSmallPuppy = !isSmallPuppy;

  //showing content based on the state
  if(isSmallPuppy) {
    puppyImg.src = "img/puppy.jpg";
    puppyImg.alt = "a baby puppy";
  } else { //isBig
    puppyImg.src = "img/husky.jpg";
    puppyImg.alt = "a grown puppy";
  }
}); 

/** Form **/
const form = document.querySelector('form');
form.addEventListener('submit', function(event) {
  event.preventDefault();
  console.log("you submitted me");

  //1. modify the state data
  const artistInput = document.querySelector('#artistInput');
  const typedArtist = artistInput.value;

  songObjArray.push({artist: typedArtist, title: "hard coded", youtubeUrl:"undefined"});

  //2. re-render
  renderSongList(songObjArray); 
});


//[{},{},{}] => [<>, <>, <>]
// const songTitleArray = songObjArray.map(function(songObj) {
//   const transformed = createSongListItem(songObj);
//   return transformed;
// })
const songTitleArray = songObjArray.map(createSongListItem);

console.log(songTitleArray);

const allTitlesStr = songObjArray.reduce(function(acc, curr) {
  const accum = acc + curr.title;
  return accum;
}, "")
console.log(allTitlesStr)
