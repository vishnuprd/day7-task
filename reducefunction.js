//step1 : create a new XMLHTTPRequest

var request = new XMLHttpRequest();

//Step2: Fetch API URL

request.open("GET","https://restcountries.com/v3.1/all");

//step3: establishing the bridge 

request.send();

//step4: once the data is succesfully received from the server 
      // onload is an Event
       //200 -299 is sthe success ststus code
request.onload = function(){

var data = JSON.parse(request.response);

var result = data.reduce((acc,element) => acc + element, 0);
console.log(result);
}