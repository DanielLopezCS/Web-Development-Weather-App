var Farenheit = true;
var currentTemp= 0;
  
$(document).ready(function(){


var long, lat, city, ip, zip;
var weatherKey = "e6046d8f774e6a27a7ca985fa2387c36/";
var weatherURL = "https://api.darksky.net/forecast/"; 


  $.getJSON("https://ipapi.co/json/", function(data){
  var div = document.getElementById("city");
  lat = data.latitude;
  long = data.longitude;
  div.innerHTML =  div.innerHTML + data.city;
  getWeatherForecast(long,lat);
})
  
function getWeatherForecast(long, lat){  
  var weatherAPIString = weatherURL + weatherKey + lat+ "," +long + "?extend=hourly&callback=?";

$.getJSON(weatherAPIString, function(data)
{
  var currentWeather =  document.getElementById("currentWeather");
  currentTemp = data.currently.temperature;
  currentWeather.innerHTML += currentTemp + "F";
 
  assessTemperature(currentTemp);      
})
  
}


  function changeElement(weatherNumber)
{
  var currentWeather =  document.getElementById("weatherImage");
  currentWeather.src = weatherCondition[weatherNumber].image;
}
  function assessTemperature(temperature)
{
  if(temperature >= 85){changeElement(0);}
  else if(temperature >= 75){changeElement(1);}
  else if (temperature >= 65){ changeElement(2);}
  else if (temperature >= 55){ changeElement(3);}
  else { changeElement(4);}
}

 var weatherCondition = [
    {
      type:"Hot",
      image:"http://pics.clipartpng.com/midle/Hot_Weather_Icon_PNG_Clip_Art-1527.png"
    },
    {
    type:"Sunny",
    image: "http://icons.iconarchive.com/icons/icons-land/weather/256/Sunny-icon.png" 
    },
     {
    type:"Warm",
    image: "http://extras.mnginteractive.com/live/media/site20/2012/0514/20120514_044743_partly%20sunny%20weather%20icon2_300.png" 
    },
     {
    type:"Cold",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Emoji_hot_and_cold.svg/2000px-Emoji_hot_and_cold.svg.png" 
    },
     {
    type:"Freezing",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Emoji_u2744.svg/2000px-Emoji_u2744.svg.png" 
    }
    
  ];

});
  function FtoC(temperature)
{
  return (temperature-32)*5/9;
}
  function CtoF(temperature)
{
  return (temperature*(9/5)+32)
}

function goFClick(){
  if(!Farenheit){
   document.getElementById("FButton").src = "http://i.imgur.com/OqTZhia.png"; 
 document.getElementById("CButton").src = "http://i.imgur.com/RkLJ0jQ.png";
 document.getElementById("currentWeather").innerHTML = "Current Weather: " + currentTemp + "F";
    Farenheit = true;
  }
}
function goCClick(){
  if(Farenheit){
 document.getElementById("FButton").src = "http://i.imgur.com/w8DjVsO.png"; 
 document.getElementById("CButton").src = "http://i.imgur.com/Gm6xrLG.png";
 document.getElementById("currentWeather").innerHTML = "Current Weather: " + Math.floor((FtoC(currentTemp))) + "C";
    
    Farenheit = false;
  }
}