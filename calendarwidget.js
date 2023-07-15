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

				case 0: // Tornado
					icon ='&#xf056;';
					break;

				case 1: //Tropical Storm
					icon = '&#xf01e;';
					break;

				case 2: //Hurricane
					icon = '&#xf01e;';
					break;

				case 3: //Severe Thunderstorms
					icon = '&#xf01e;';
					break;

				case 4: // Thunderstorms
					icon = '&#xf01d;';
					break;

				case 5: //Mixed rain and snow
					icon = '&#xf01b;';
					break;

				case 6: //Mixed rain and sleet
					icon = '&#xf01b;';
					break;

				case 7: //Mixed snow and sleet
					icon = '&#xf01b;';
					break;

				case 8: //Freezing drizzle
					icon ='';
					break;		
			}
		}
	})
}