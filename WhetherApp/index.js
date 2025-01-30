const cityInput = document.querySelector(".cityInput");
const getButton = document.querySelector(".getButton");
const card = document.querySelector(".card");
const apiKey = "1d56f755f23c98e88cfe77b31bb72411";
const weatherForm = document.querySelector(".weatherForm");
weatherForm.addEventListener("submit",async event=>{
       event.preventDefault();
       const city = cityInput.value;
       if(city)
       {
          try{
              const data = await getWeatherData(city);
              displayWeatherInfo(data);
          }
          catch(error)
          {
            console.log(error);
            displayError(error);
          }
       }
       else{
            displayError("ENTER SOME CITY NAME");
       }
});
async function getWeatherData(city){
       let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
       const response = await fetch(apiUrl);
       if(!response.ok)
       {
          throw("COULD NOT FETCH DATA 💢");  
       }
       else{
           return response.json();
       }
}
function displayWeatherInfo(data){
     console.log(data);
     card.textContent="";
     card.style.display = "flex";
     const {name:city,main:{humidity,temp},weather:[{id,description}]}=data;
     const cityDisplay = document.createElement("h1");
     cityDisplay.textContent = city;
     cityDisplay.classList.add("cityDisplay");
     card.appendChild(cityDisplay);
     const tempDisplay = document.createElement("h1");
     tempDisplay.textContent = `${(temp-273.15).toFixed(1)}°C`;
     tempDisplay.classList.add("tempDisplay");
     card.appendChild(tempDisplay);
     const humidityDisplay = document.createElement("p");
     humidityDisplay.textContent = `Humidity:${humidity}%`;
     humidityDisplay.classList.add("humidityDisplay");
     card.appendChild(humidityDisplay);
     const descDisplay = document.createElement("p");
     descDisplay.textContent=description;
     descDisplay.classList.add("weatherDisplay");
     card.appendChild(descDisplay);
     const weatherEmoji = document.createElement("p");
     weatherEmoji.textContent=getEmoji(id);
     weatherEmoji.classList.add("weatherEmoji");
     card.appendChild(weatherEmoji);
     
         

}
function getEmoji(Id)
{
  switch(true)
  {
   case Id>=200 && Id<=299:
     return "⛈️";
   case Id>=300 && Id<=399:
     return "🌧️";
   case Id>=500 && Id<=599:
     return "☔";
   case Id>=600 && Id<=699:
     return "❄️";
   case Id>=700 && Id<=799:
     return "🍃";
   case Id===800:
     return "🌥️";
   case Id>800 && Id<810:
     return "☀️";
   default:
     return "🤔❓";
  }
}
function displayError(message){
  const error = document.createElement("p");
  error.textContent=message;
  error.classList.add("errorDisplay");
  card.textContent="";
  card.appendChild(error);
}
