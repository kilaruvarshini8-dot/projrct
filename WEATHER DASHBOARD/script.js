const apikey='491efb432469facfc969ff9296b79cd2';

async function getWeather()
{
    const city=document.getElementById("city").value;

   const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=metric`;

   const response=await fetch(url);

   console.log(response);

   const data=await response.json();

   console.log(data);


    document.getElementById("result").innerHTML=`
    
    <h2>${data.name}</h2>
    <p>Temperature: ${data.main.temp}</p>
    <p> Weather Description:  ${data.weather[0].description}</p>
    <p>Humidity: ${data.main.humidity}</p>
    <p>Wind Speed: ${data.wind.speed}</p>
    
    `;


}



