const cities=[`Симферополь`,`Севастополь`,`Евпатория`,`Ялта`,`Судак`];
const temperatures=[];
// Запрашиваем температуру для каждого города
for (let i=0;i<cities.length;i++){
    let cityTemp= parseFloat(prompt(`Введите температуру для города ${cities[i]}:`))
    while(isNaN(temp)){
        temp=prompt(`Пожалуйста введите число для температуры в городе ${cities[i]}:`);
    }
    temperatures.push({city:cities[i],temp:cityTemp});
}

// Находим максимум и минимум температур
let maxTemp=Math.max(...temperatures.map((d) => d.temp));
let minTemp=Math.min(...temperatures.map((d) => d.temp));
let maxTempCity= temperatures.find((d) => d.temp === maxTemp).city;
let minTempCity=temperatures.find((d) => d.temp === minTemp).city;

const citiesList= document.getElementById("cityList");

temperatures.forEach((enter) => {
    const listItem = document.createElement("li");
    listItem.className = "li";
    listItem.textContent = `${enter.city}: ${enter.temp} °C`;
    citiesContainer.appendChild(listItem);
  });

  // Отображаем максимальную и минимальную температуру
document.getElementById(
    "maxTemp"
  ).textContent = `Максимальная температура: ${maxTemp} °C в городе ${maxTempCity}`;
  document.getElementById(
    "minTemp"
  ).textContent = `Минимальная температура: ${minTemp} °C в городе ${minTempCity}`;



