async function getApiData() {
  try {
    let response = await fetch("https://restcountries.com/v3.1/name/bharat");
    let [data] = await response.json();
    document.getElementById("name").innerHTML = data.name.common;
    document.getElementById("capital").innerHTML = data.capital[0];
    document.getElementById("region").innerHTML = data.region;
    document.getElementById("borders").innerHTML = data.borders;
    document.getElementById("area").innerHTML = data.area;
    document.getElementById("flags").src = data.flags.svg;
    document.getElementById("timezones").innerHTML = data.timezones;
    document.getElementById("startOfWeek").innerHTML = data.startOfWeek;
    document.getElementById("maps").href = data.maps.googleMaps;
    document.getElementById("population").innerHTML = data.population;
    document.getElementById("coatOfArms").src = data.coatOfArms.svg;
  } catch (error) {
    alert(error);
  }
}

async function selectCountry() {
  try {
    let name = document.getElementById("search").value;
    let response = await fetch("https://restcountries.com/v3.1/name/" + name);
    let [data] = await response.json();

    document.getElementById("name").innerHTML = data.name.common;
    document.getElementById("capital").innerHTML = data.capital[0];
    document.getElementById("region").innerHTML = data.region;
    document.getElementById("borders").innerHTML = data.borders;
    document.getElementById("area").innerHTML = data.area;
    document.getElementById("flags").src = data.flags.svg;
    document.getElementById("timezones").innerHTML = data.timezones;
    document.getElementById("startOfWeek").innerHTML = data.startOfWeek;
    document.getElementById("maps").href = data.maps.googleMaps;
    document.getElementById("population").innerHTML = data.population;
    document.getElementById("coatOfArms").src = data.coatOfArms.svg;
  } catch (error) {
    alert(error);
  }
}
getApiData();
