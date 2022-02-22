const showLyrics = (lyrics) => {
  const lyricsContainer = document.createElement('div');
  lyricsContainer.innerText = lyrics;
  document.body.appendChild(lyricsContainer);
}

const getLyrics = () => {

  const artist = document.querySelector('#artist').value.split(" ").join("%20");
  const title = document.querySelector('#title').value.split(" ").join("%20");


 // Make a request for all the items
  axios
    .get(`https://api.lyrics.ovh/v1/${artist}/${title}`)
    .then((response) => {
      // handle success
      const lyricsContent = response.data.lyrics;
      showLyrics(lyricsContent);

    })
    .catch((error) => {
      // handle error
      console.log(error);
    });
}

const button = document.createElement('button');
button.innerText = 'Request Lyrics';

const artistInput = document.createElement('input');
artistInput.placeholder = 'Artist Name';
artistInput.id = 'artist'
const titleInput = document.createElement('input');
titleInput.placeholder = 'Song Title';
titleInput.id = 'title'

document.body.appendChild(artistInput);
document.body.appendChild(titleInput);
document.body.appendChild(button);
button.addEventListener('click', getLyrics)

var options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0
};

function success(pos) {
  var crd = pos.coords;

  console.log('Your current position is:');
  console.log(`Latitude : ${crd.latitude}`);
  console.log(`Longitude: ${crd.longitude}`);
  console.log(`More or less ${crd.accuracy} meters.`);
}

function error(err) {
  console.warn(`ERROR(${err.code}): ${err.message}`);
}

navigator.geolocation.getCurrentPosition(success, error, options);