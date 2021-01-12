document.addEventListener("DOMContentLoaded", function () {
  // code...


  function searchCity() {
    let input = document.getElementById('city-search').value;
    input = input.toLowerCase();
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input}&units=imperial&appid=e6c064d18459b94b71b91664234d49f9`)
      .then(response => response.json())
      .then(data => {
        console.log(data)
        fetch(`http://api.openweathermap.org/data/2.5/uvi?lat=${data.coord.lat}&lon=${data.coord.lon}&appid=e6c064d18459b94b71b91664234d49f9`)
          .then(response => response.json())
          .then(uvdata => {

            let currentDate = moment(data.dt, "X").format("(MM/DD/YYYY)")
            let iconcode = data.weather[0].icon
            let iconurl = "http://openweathermap.org/img/w/" + iconcode + ".png";
            document.getElementById("dashboard").innerHTML = ` 
      
            <h3 id="city-title"> ${data.name} ${currentDate} <img src="${iconurl}"/>  </h3>
            <p id="el-temp">Temperature: ${data.main.temp} °F</p>
            <p id="el-humidity">Humidity: ${data.main.humidity} %</p>
            <p id="el-wind">Wind Speed: ${data.wind.speed} mph</p>
            <p id="uv-index">UV Index: ${uvdata.value}</p>`

          
            console.log(uvdata)
          })
      });


    fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${input}&units=imperial&appid=e6c064d18459b94b71b91664234d49f9`)
      .then(response => response.json())
      .then(fiveDay => {
        console.log(fiveDay)


        for (let i = 0; i < fiveDay.list.length; i++) {
          if (fiveDay.list[i].dt_txt.includes("15:00:00")) {

            let iconcode = fiveDay.list[i].weather[0].icon
            let iconurl = "http://openweathermap.org/img/w/" + iconcode + ".png";

            let currentDay = moment(fiveDay.date).format("dddd")
            document.getElementById("five-day").innerHTML = document.getElementById("five-day").innerHTML+ `
              <div class="card">
            <img class="card-img-top" src="${iconurl}" alt="Card image cap">
            <div class="card-body">
              <h5 class="card-title">${currentDay}</h5>
              <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional
                content.
                This content is a little bit longer.</p>
              <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
            </div>
          </div>
            `
          }
          
        }
      });
  }
  document.getElementById("city-click-btn").addEventListener("click", searchCity);


});