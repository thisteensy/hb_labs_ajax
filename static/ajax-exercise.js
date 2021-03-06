"use strict";


// PART 1: SHOW A FORTUNE

function showFortune(evt) {

$.get('/fortune', (response) => {
  $('#fortune-text').html(response);
    
});

}

$('#get-fortune-button').on('click', showFortune); 
  




// PART 2: SHOW WEATHER

function showWeather(evt) {
    evt.preventDefault();

    let url = "/weather.json";
    let formData = {"zipcode": $("#zipcode-field").val()};

    $.get(url, formData, (response) => {
        $('#weather-info').html(response.forecast)
    });
}
$("#weather-form").on('submit', showWeather);




// PART 3: ORDER MELONS

function respondMelons(response) {
  if (response.code === "OK") {
    $('#order-status').html('<p>' + response.msg + '</p>');
  }
  else {
    $('#order-status').addClass("order-error");
    $('#order-status').html('<p><b>' + response.msg + '</b></p>');
  }
}

function orderMelons(evt) {
    evt.preventDefault();

  let melonsData = {
    "melon-type": $('#melon-type-field').val(),
    "qty": $('#qty-field').val()
    }; 
    
  $.post('/order-melons.json', melonsData, respondMelons);
    //   alert(response['code'], response['msg'])
      
  } 
    // TODO: show the result message after your form
    // TODO: if the result code is ERROR, make it show up in red (see our CSS!)

  
$("#order-form").on('submit', orderMelons);


