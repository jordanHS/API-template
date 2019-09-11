import { WeatherService } from './../js/weather-service.js';

$(document).ready(function() {
    $('#weatherLocation').click(function() {
      const city = $('#location').val();
      $('#location').val("");
// UI Logic end  

//business logic begin
      let promise = // code noved to _weather-service.js_
// business logic end  

//UI logic begin
      promise.then(function(response) {
        let body = JSON.parse(response);
        $('.showHumidity').text(`The humidity in ${city} is ${body.main.humidity}%`);
        $('.showTemp').text(`The temperature in Kelvins is ${body.main.temp} degrees.`);
      }, function(error) {
        $('.showErrors').text(`There was an error processing your request: ${error.message}`);
      });
    });
  });


  /*–"count":10000,"page":"0","result":[{"taxonid":3,"kingdom_name":"ANIMALIA","phylum_name":"MOLLUSCA","class_name":"GASTROPODA","order_name":"STYLOMMATOPHORA","family_name":"ENDODONTIDAE","genus_name":"Aaadonta","scientific_name":"Aaadonta angaurana","infra_rank":null,"infra_name":null,"population":null,"category":"CR"}*/