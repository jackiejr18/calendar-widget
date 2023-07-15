//Sets weather and date values 
$(document).ready(function) {
	var ampm = true; // true or false
	$.simpleWeather({
		zipcode:'',
		woeid: '2424766', // Houston, Texas
		location: '',
		unit: 'c',
		success: function(weather) {

			$('#country').text(weather.city + ',' + weather.country); //set text content of element with country id to combo of weather.city and weather.country
			$('#temp').text(weather.temp+'°');
			$('#desc').text(weather.currently);
			$('#humidity').text(weather.humidity+'%');

			// a switch statement that switches parsed integer value of weather.code and assigns it to icon variable 
			var icon;
			switch (parseInt(weather.code)){

			}
		}
	})
}