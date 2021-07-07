var button = document.querySelector('.button');
var inputValue = document.querySelector('.inputValue');
var cityName = document.querySelector('.cityName');
var temp = document.querySelector('.temp');
var wind = document.querySelector('.wind');
var humidity = document.querySelector('.humidity');
var uv = document.querySelector('.uv');

var historyValue = document.querySelector('.historyValue');

var img = document.getElementById('myImage');
var img2 = document.getElementById('myImage2');
var img3 = document.getElementById('myImage3');
var img4 = document.getElementById('myImage4');
var img5 = document.getElementById('myImage5');
var img6 = document.getElementById('myImage6');

var temp2 = document.querySelector('.temp2');
var temp3 = document.querySelector('.temp3');
var temp4 = document.querySelector('.temp4');
var temp5 = document.querySelector('.temp5');
var temp6 = document.querySelector('.temp6');
var wind2 = document.querySelector('.wind2');
var wind3 = document.querySelector('.wind3');
var wind4 = document.querySelector('.wind4');
var wind5 = document.querySelector('.wind5');
var wind6 = document.querySelector('.wind6');
var humidity2 = document.querySelector('.humidity2');
var humidity3 = document.querySelector('.humidity3');
var humidity4 = document.querySelector('.humidity4');
var humidity5 = document.querySelector('.humidity5');
var humidity6 = document.querySelector('.humidity6');
var date1 = document.querySelector('.date1');
var date2 = document.querySelector('.date2');
var date3 = document.querySelector('.date3');
var date4 = document.querySelector('.date4');
var date5 = document.querySelector('.date5');
var date6 = document.querySelector('.date6');
var mySearchHistory = document.querySelector('.mySearchHistory');
var citySearch = [];

var oldList = function(){
  var x = JSON.parse(localStorage.getItem("history"));
  console.log("I'm x" + x);
  
  if(x){
  
    x.forEach((profileItem) => {
      let liEl = document.createElement('li'); 
      liEl.className = 'historyValue btn btn-secondary';
      liEl.innerHTML = profileItem; 
      mySearchHistory.appendChild(liEl); 
    });  
  } 
};

button.addEventListener('click', function(){
  var today = new Date();
  var dateValue1 = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();  
  date1.innerHTML = dateValue1;

  

  fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputValue.value+'&units=metric&appid=8a41b1e20add06b673b9693edc2d3d9d')
    .then(response => response.json())
    .then(data => {
        console.log(data);
        var cityNameValue = data['name'];
        var tempValue = data['main']['temp'];
        var windValue = data['wind']['speed'];
        var humidityValue = data['main']['humidity'];
        var iconCode = data['weather']['0']['icon'];

        img.src = "http://openweathermap.org/img/wn/"+iconCode+"@2x.png";

        date1.innerHTML = dateValue1;
        cityName.innerHTML = cityNameValue;
        temp.innerHTML = tempValue;
        wind.innerHTML = windValue;
        humidity.innerHTML = humidityValue;
    });
  
  citySearch.push(inputValue.value);
  localStorage.setItem("history", JSON.stringify(citySearch));
  
  oldList();
});

button.addEventListener('click', function(){
  fetch('https://api.openweathermap.org/data/2.5/forecast?q='+inputValue.value+'&units=metric&appid=8a41b1e20add06b673b9693edc2d3d9d')
    .then(response => response.json())
    .then(data => {
      
      console.log(data);
      var tempValue2 = data['list']['2']['main']['temp'];
      var windValue2 = data['list']['2']['wind']['speed'];
      var humidityValue2 = data['list']['2']['main']['humidity'];
      var iconCode2 = data['list']['2']['weather']['0']['icon'];
      img2.src = "http://openweathermap.org/img/wn/"+iconCode2+"@2x.png";

      var tempValue3 = data['list']['10']['main']['temp'];
      var windValue3 = data['list']['10']['wind']['speed'];
      var humidityValue3 = data['list']['10']['main']['humidity'];
      var iconCode3 = data['list']['10']['weather']['0']['icon'];
      img3.src = "http://openweathermap.org/img/wn/"+iconCode3+"@2x.png";

      var tempValue4 = data['list']['18']['main']['temp'];
      var windValue4 = data['list']['18']['wind']['speed'];
      var humidityValue4 = data['list']['18']['main']['humidity'];
      var iconCode4 = data['list']['18']['weather']['0']['icon'];
      img4.src = "http://openweathermap.org/img/wn/"+iconCode4+"@2x.png";

      var tempValue5 = data['list']['26']['main']['temp'];
      var windValue5 = data['list']['26']['wind']['speed'];
      var humidityValue5 = data['list']['26']['main']['humidity'];
      var iconCode5 = data['list']['26']['weather']['0']['icon'];
      img5.src = "http://openweathermap.org/img/wn/"+iconCode5+"@2x.png";

      var tempValue6 = data['list']['34']['main']['temp'];
      var windValue6 = data['list']['34']['wind']['speed'];
      var humidityValue6 = data['list']['34']['main']['humidity'];
      var iconCode6 = data['list']['34']['weather']['0']['icon'];
      img6.src = "http://openweathermap.org/img/wn/"+iconCode6+"@2x.png";
      
      var today = new Date();
      var tomorrow = today.getDate()+1;
      var tomorrow2 = today.getDate()+2;
      var tomorrow3 = today.getDate()+3;
      var tomorrow4 = today.getDate()+4;
      var tomorrow5 = today.getDate()+5;
      var dateValue2 = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+tomorrow;
      var dateValue3 = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+tomorrow2;
      var dateValue4 = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+tomorrow3;
      var dateValue5 = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+tomorrow4;
      var dateValue6 = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+tomorrow5; 

      date2.innerHTML = dateValue2;
      temp2.innerHTML = tempValue2;
      wind2.innerHTML = windValue2;
      humidity2.innerHTML = humidityValue2;

      date3.innerHTML = dateValue3;
      temp3.innerHTML = tempValue3;
      wind3.innerHTML = windValue3;
      humidity3.innerHTML = humidityValue3;

      date4.innerHTML = dateValue4;
      temp4.innerHTML = tempValue4;
      wind4.innerHTML = windValue4;
      humidity4.innerHTML = humidityValue4;

      date5.innerHTML = dateValue5;
      temp5.innerHTML = tempValue5;
      wind5.innerHTML = windValue5;
      humidity5.innerHTML = humidityValue5;

      date6.innerHTML = dateValue6;
      temp6.innerHTML = tempValue6;
      wind6.innerHTML = windValue6;
      humidity6.innerHTML = humidityValue6;
    
    });
 
});
