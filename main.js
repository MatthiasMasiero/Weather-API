const apiKey = 'fb108c46f25fcffe6b49e6c07c8ee38f';
const city = 'Basking Ridge';

let temperature;

fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
  .then(response => response.json())
  .then(data => {
    temperature = data.main.temp;
    console.log(`The temperature in ${city} is ${temperature}°C`);
    var temp = 0
    // set variable
  if (temperature > 32) {
    temp = 1;
  } else if (temperature > 27) {
    temp = 2;
  } else if (temperature > 18) {
    temp = 3;
  } else if (temperature > 13) {
    temp = 4;
  } else if (temperature < 13) {
    temp = 5;
  }
  document.getElementById("temp1").value = temp;
  })
  .catch(error => console.log(error));