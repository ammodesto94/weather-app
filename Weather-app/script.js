let button=document.querySelector('#submitBtn');
let inputValue=document.querySelector('#inputLocation');
let cityName=document.querySelector('#cityName');
let temparature=document.querySelector('#temperature');
let description=document.querySelector('#description');



button.addEventListener('click',function(){
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputValue.value+'&appid=9471d0af425200b5779cd7bed2c7483a')
    .then(res=>res.json())
    .then(data=>{
    var nameValue=data['name'];
    var tempValue=data['main']['temp'];
    var descValue=data['weather'][0]['description'];

    cityName.innerText=nameValue;
    temparature.innerText=tempValue;
    description.innerText=descValue;



        console.log(data)

    })

.catch(err=>alert("Wrong name"))

})