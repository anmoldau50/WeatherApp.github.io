


const options ={
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': config.MY_API_KEY,
        'X-RapidAPI-Host': config.API_HOST
    }
};


function formattimestamp(date) {
    var timeStamp= date
    const dataa= new Date(timeStamp);
    if(dataa.getHours()>12)
    {
        dateFormat = dataa.getHours()-12 + ":" + dataa.getMinutes() + " PM";
    }
    else
    {
        dateFormat = dataa.getHours() + ":" + dataa.getMinutes() + " AM";
    }
//    dateFormat = dataa.getHours() + ":" + dataa.getMinutes() + ", ";
    return dateFormat;
}

const getWeather = (city) => {

    cityName.innerHTML = city




    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
        .then(response => response.json())
        .then((response) => {
            console.log(response)
            cloud_pct.innerHTML = response.cloud_pct
            temp.innerHTML = response.temp
            temp2.innerHTML = response.temp
            feels_like.innerHTML = response.feels_like
            humidity.innerHTML = response.humidity
            humidity2.innerHTML = response.humidity
            //    min_temp.innerHTML = response.min_temp
            max_temp.innerHTML = response.max_temp
            wind_degrees.innerHTML = response.wind_degrees
            wind_speed.innerHTML = response.wind_speed
            wind_speed2.innerHTML = response.wind_speed

            

            sunrise.innerHTML = formattimestamp(response.sunrise*1000)
            sunset.innerHTML = formattimestamp(response.sunset*1000)


//                sunrise.innerHTML = response.sunrise
//                sunset.innerHTML = response.sunset
        })
        .catch(err => console.error(err));
}

submit.addEventListener("click", (e) => {
    e.preventDefault()
    getWeather(city.value)
})



getWeather("Delhi")










/////////////////////JHANSI  WEATHER FETCH//////////////////////////////////////////////////////////////////////////////
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Jhansi', options)
    .then(response => response.json())
    .then((response) => {
        console.log(response)
        cloud_jhansi_pct.innerHTML = response.cloud_pct
        temp_jhansi.innerHTML = response.temp
        feels_jhansi_like.innerHTML = response.feels_like
        humidity_jhansi.innerHTML = response.humidity
        //    min_jhansi_temp.innerHTML = response.min_temp
        //    max_jhansi_temp.innerHTML = response.max_temp
        wind_jhansi_degrees.innerHTML = response.wind_degrees
        wind_jhansi_speed.innerHTML = response.wind_speed
        sunrise_jhansi.innerHTML = formattimestamp(response.sunrise*1000)
        sunset_jhansi.innerHTML = formattimestamp(response.sunset*1000)
    })
    .catch(err => console.error(err));



/////////////////////GHAZIABAD  WEATHER FETCH//////////////////////////////////////////////////////////////////////////////


fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Ghaziabad', options)
    .then(response => response.json())
    .then((response) => {
        console.log(response)
        cloud_ghaziabad_pct.innerHTML = response.cloud_pct
        temp_ghaziabad.innerHTML = response.temp
        feels_ghaziabad_like.innerHTML = response.feels_like
        humidity_ghaziabad.innerHTML = response.humidity
        //    min_ghaziabad_temp.innerHTML = response.min_temp
        //    max_ghaziabad_temp.innerHTML = response.max_temp
        wind_ghaziabad_degrees.innerHTML = response.wind_degrees
        wind_ghaziabad_speed.innerHTML = response.wind_speed
        sunrise_ghaziabad.innerHTML = formattimestamp(response.sunrise*1000)
        sunset_ghaziabad.innerHTML = formattimestamp(response.sunset*1000)
    })
    .catch(err => console.error(err));


/////////////////////LUCKNOW  WEATHER FETCH//////////////////////////////////////////////////////////////////////////////


fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Lucknow', options)
    .then(response => response.json())
    .then((response) => {
        console.log(response)
        cloud_lucknow_pct.innerHTML = response.cloud_pct
        temp_lucknow.innerHTML = response.temp
        feels_lucknow_like.innerHTML = response.feels_like
        humidity_lucknow.innerHTML = response.humidity
        //    min_lucknow_temp.innerHTML = response.min_temp
        //    max_lucknow_temp.innerHTML = response.max_temp
        wind_lucknow_degrees.innerHTML = response.wind_degrees
        wind_lucknow_speed.innerHTML = response.wind_speed
        sunrise_lucknow.innerHTML = formattimestamp(response.sunrise*1000)
        sunset_lucknow.innerHTML = formattimestamp(response.sunset*1000)
    })
    .catch(err => console.error(err));


/////////////////////KOLKATA  WEATHER FETCH//////////////////////////////////////////////////////////////////////////////


fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Kolkata', options)
    .then(response => response.json())
    .then((response) => {
        console.log(response)
        cloud_kolkata_pct.innerHTML = response.cloud_pct
        temp_kolkata.innerHTML = response.temp
        feels_kolkata_like.innerHTML = response.feels_like
        humidity_kolkata.innerHTML = response.humidity
        //    min_kolkata_temp.innerHTML = response.min_temp
        //    max_kolkata_temp.innerHTML = response.max_temp
        wind_kolkata_degrees.innerHTML = response.wind_degrees
        wind_kolkata_speed.innerHTML = response.wind_speed
        sunrise_kolkata.innerHTML = formattimestamp(response.sunrise*1000)
        sunset_kolkata.innerHTML = formattimestamp(response.sunset*1000)
    })
    .catch(err => console.error(err));


/////////////////////BANGLORE  WEATHER FETCH//////////////////////////////////////////////////////////////////////////////


fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Hyderabad', options)
    .then(response => response.json())
    .then((response) => {
        console.log(response)
        cloud_hyderabad_pct.innerHTML = response.cloud_pct
        temp_hyderabad.innerHTML = response.temp
        feels_hyderabad_like.innerHTML = response.feels_like
        humidity_hyderabad.innerHTML = response.humidity
        //    min_banglore_temp.innerHTML = response.min_temp
        //    max_banglore_temp.innerHTML = response.max_temp
        wind_hyderabad_degrees.innerHTML = response.wind_degrees
        wind_hyderabad_speed.innerHTML = response.wind_speed
        sunrise_hyderabad.innerHTML = formattimestamp(response.sunrise*1000)
        sunset_hyderabad.innerHTML = formattimestamp(response.sunset*1000)
    })
    .catch(err => console.error(err));


/////////////////////MUMBAI  WEATHER FETCH//////////////////////////////////////////////////////////////////////////////


fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Mumbai', options)
    .then(response => response.json())
    .then((response) => {
        console.log(response)
        cloud_mumbai_pct.innerHTML = response.cloud_pct
        temp_mumbai.innerHTML = response.temp
        feels_mumbai_like.innerHTML = response.feels_like
        humidity_mumbai.innerHTML = response.humidity
        //    min_mumbai_temp.innerHTML = response.min_temp
        //    max_mumbai_temp.innerHTML = response.max_temp
        wind_mumbai_degrees.innerHTML = response.wind_degrees
        wind_mumbai_speed.innerHTML = response.wind_speed
        sunrise_mumbai.innerHTML = formattimestamp(response.sunrise*1000)
        sunset_mumbai.innerHTML = formattimestamp(response.sunset*1000)
    })
    .catch(err => console.error(err));




var a;
var time;
const weekday = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'
];

const month = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
];
setInterval(() => {
    a = new Date();
    time = weekday[a.getDay()] + '  ' + a.getDate() + '  ' + month[a.getMonth()] + ' ' + a.getFullYear() + ' ' + '  "Clock: ' + a.getHours() + ':' + a.getMinutes() + ':' + a.getSeconds() + '"';
    document.getElementById('date-time').innerHTML = time;
}, 1000);


