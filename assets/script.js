document.addEventListener("DOMContentLoaded", function () {
  // code...
  let existingEntries = JSON.parse(localStorage.getItem("allEntries")) || [];
 
  let searchCityCalls = 0;

  function searchCity() {
    // function addEntry() {

    //   let entry = {



    // TODO: Splice input string then Capitalize first of each letter
    const input = document.getElementById('city-search').value;

    existingEntries.push(input)

    localStorage.setItem("entry", JSON.stringify(existingEntries));

    let listVariation = searchCityCalls % 2 == 0 ? "list-color" : "bg-light"
    document.getElementById("search_history").insertAdjacentHTML('afterbegin',
      `
      <li class="list-group-item ${listVariation}">${input}</li>
    `
    )



    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input}&units=imperial&appid=e6c064d18459b94b71b91664234d49f9`)
      .then(response => response.json())
      .then(data => {
        console.log(data)
        fetch(`https://api.openweathermap.org/data/2.5/uvi?lat=${data.coord.lat}&lon=${data.coord.lon}&appid=e6c064d18459b94b71b91664234d49f9`)
          .then(response => response.json())
          .then(uvdata => {


            let uvIndex = uvdata.value;
            let currentDate = moment(data.dt, "X").format("(MM/DD/YYYY)");
            let iconcode = data.weather[0].icon;
            let iconurl = "https://openweathermap.org/img/w/" + iconcode + ".png";
            document.getElementById("dashboard").innerHTML = ` 
      
            <h3 id="city-title"> ${data.name} ${currentDate} <img src="${iconurl}"/>  </h3>
            <p id="el-temp">Temperature: ${data.main.temp} °F</p>
            <p id="el-humidity">Humidity: ${data.main.humidity} %</p>
            <p id="el-wind">Wind Speed: ${data.wind.speed} mph</p>
            <p id="uv-index">UV Index: <span class="bg-danger text-white">${uvIndex}</span></p>`


            console.log(uvdata)
          })
      });


    fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${input}&units=imperial&appid=e6c064d18459b94b71b91664234d49f9`)
      .then(response => response.json())
      .then(fiveDay => {
        console.log(fiveDay)

        let fiveNode = document.getElementById("five-day");
        // destroy the child
        while (fiveNode.firstChild) {
          fiveNode.removeChild(fiveNode.lastChild);
        }

        for (let i = 0; i < fiveDay.list.length; i++) {
          if (fiveDay.list[i].dt_txt.includes("15:00:00")) {

            let iconcode = fiveDay.list[i].weather[0].icon;
            let iconurl = "https://openweathermap.org/img/w/" + iconcode + ".png";
            let fiveTemp = fiveDay.list[i].main.temp;
            let nextDay = moment(fiveDay.list[i].dt, "X").format("dddd");
            let fiveHum = fiveDay.list[i].main.humidity;

            // Ternary Expression for object literal color
            const humColorCheck = (fiveHum >= 60) ? 'bg-success' : 'bg-danger';

            // repeated because DOM needs element creation
            document.getElementById("five-day").innerHTML = document.getElementById("five-day").innerHTML + `
            <div class="card bg-primary text-white">
            <div class="card-body">
            <h4 class="card-title weighted-title">${nextDay}</h4>
            <img class="card-img-top" src="${iconurl}" alt="Card image cap">

              <p class="card-text">Temp: ${fiveTemp}°F</p>
              <p class="card-text">Humidity: <span class="${humColorCheck}">${fiveHum}% </span></p>
              </div>
          </div>
            `
          }
        }
      });
    searchCityCalls++;
  }
  document.getElementById("city-click-btn").addEventListener("click", searchCity);
  // all code before this
});