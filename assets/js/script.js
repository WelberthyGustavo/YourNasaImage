import { NasaApi } from './NasaApi.js';

const title = document.getElementById("titleNasa");
const text = document.getElementById("textNasa");
const url = document.getElementById("imageNasa");

/* Get Actual Date */
const date = new Date();
const year = date.getFullYear();
const month = date.getMonth() + 1;
const day = date.getDate();
const newDate = `${year}-${month}-${day}`;

const apiKey = 'z6TA8JtV891JLSnqwlHSLwjhHwKmP7GVdvkfSuv7';

/* Search Nasa Image */
function nasaSearch(input){
  const nasaImageFetcher = new NasaApi(apiKey, input); 
    nasaImageFetcher.getImageOfTheDay()
      .then(data => {
        title.innerHTML = data.title;
        text.innerHTML = data.explanation;
        url.setAttribute("src", data.hdurl);
      })
      .catch(error => {
        console.error('Ocorreu um erro:', error);
      });
}

/* Get the date from input */
function verifyDate() {
  const inputDateValue = document.getElementById("dateNasa").value;

  if (inputDateValue) {
      nasaSearch(inputDateValue);
  } 

};

/* Get image of the actual day */
function nasaOfTheDay(){
  document.getElementById("dateNasa").value = newDate;;
  if (nasaSearch(newDate)){
    nasaSearch(newDate);
  }else {
    url.setAttribute("src", "/assets/img/nasa-rocket.jpg");
  }
}

/* When the page is loaded this code line is executed */
document.addEventListener('DOMContentLoaded', nasaOfTheDay);

/* When the date is changed the function is executed */
var inputDate = document.getElementById("dateNasa");
inputDate.addEventListener("change", verifyDate);


