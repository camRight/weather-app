# weather-app

This provided screenshot is an example of what the working application looks like in use. Notice: I wanted to create something more intuitive or informative than the provided mockup's UI.

![Screenshot of Project](/assets/images/weather-appScreenshot.png?raw=true "Weather App")



## Technologies:

Moment.js

Bootstrap

Server-Side API's: OpenWeatherMap.org/API

## Javascript:

-DOM Manipulation

-Object Literals

-TODO: Local Storage

-Ternary Operators

-Chained Promise Objects

-JQuery was required for BOOTSTRAP, but all other Javascript is Vanilla.

-TODO: Make search bar less wide and greater in height. Center search SVG/Icon after input field.

    ### AJAX vs Fetch: 
        -Fetch was used to access API with default 'GET' method. 
        -Little consideration for IE support, albeit a polyfill can be used to support legacy browsers.
        

    #### Used expressions to manipulate object literals: if UV index above 60% then blue. Below? Green


### several fetches.

https://openweathermap.org/api
-for city search then to UL list DOM traversal
-5 day forecast
-1 day (12hr/24hr?) forecast

## Mock Up

I based this project on a mockup--simulating when a client needs a web page designed with certain specs and functionality--I wanted to get
as close as possible to the intended goal, but also saw room for improvement in the way the information was layed out. Subsequently, ternary
expressions were used to evaluate the data and provide a color-based UI experience based on the information the API provided.

The mockup includes a search option, a list of cities searched, and a five-day forecast and current weather conditions.

![Mockup to fulfill Clients Needs](/assets/images/mockup.png?raw=true "Mockup")

## Links:

Repo: https://github.com/camRight/weather-app

Pages: https://camright.github.io/weather-app/
