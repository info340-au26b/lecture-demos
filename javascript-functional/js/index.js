'use strict';

/** Functional Programming Demo **/






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
