async function getWeather(){

    let city =
    document.getElementById("city").value;

    let apiKey =
    "abf6ca2d5fa84eefa5535833262105";

    let url =
    `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`;

    try{

        let response = await fetch(url);

        let data = await response.json();

        document.getElementById("result")
        .innerHTML = `
            <h2>${data.location.name}</h2>
            <p>Temperature: ${data.current.temp_c} °C</p>
            <p>Condition: ${data.current.condition.text}</p>
            <p>Humidity: ${data.current.humidity}%</p>
        `;
    }

    catch(error){

        document.getElementById("result")
        .innerHTML = "Error fetching weather";
    }
}