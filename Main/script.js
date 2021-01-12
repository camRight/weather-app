document.addEventListener("DOMContentLoaded", function () {
  // code...

  function searchCity() {
    let input = document.getElementById('city-search').value;
    input = input.toLowerCase();
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=e6c064d18459b94b71b91664234d49f9`)
      .then(response => response.json())
      .then(data => console.log(data));

  }
  document.getElementById("city-click-btn").addEventListener("click", searchCcity); 
});