/* Global Variables */

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = 1 + d.getMonth() + '.' + d.getDate() + '.' + d.getFullYear();

// Personal API Key for OpenWeatherMap API
let baseURL = 'http://api.openweathermap.org/data/2.5/weather?zip=';
let apiKey = '&appid=20c71d466c2f7b18680bbe16432a2d45';

// Event listener to add function to existing HTML DOM element
document.getElementById('generate').addEventListener('click', performAction);
/* Function called by event listener */
function performAction() {
    const newZip = document.getElementById('zip').value;
    const newFeeling = document.getElementById('feelings').value;
    let url = baseURL + newZip + apiKey;
    getWeather(url)
        .then(function (data) {
            // console.log(data);
            postData('/add', { date: newDate, temp: data.main.temp, newFeeling});
            updateUI();
        });
}
/* Function to GET Web API Data*/
const getWeather = async (url) => {
    const res = await fetch(url)
    try {
        return await res.json();
    } catch (error) {
        console.log('error', error);
    }
};
/* Function to POST data */
const postData = async (url = '', data = {}) => {
    const response = await fetch(url, {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });
    try {
        return await response.json()
    } catch (error) {
        console.log('error', error);
    }
};

/* Function to GET Project Data */
const updateUI = async () => {
    const request = await fetch('/all');
    try {
        const allData = await request.json();
        console.log(allData);
        document.getElementById('date').innerHTML = allData.date;
        document.getElementById('temp').innerHTML = allData.temperature;
        document.getElementById('content').innerHTML = allData.feeling;
    } catch (error) {
        console.log('error', error);
    }
};
