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

				case 9: //Drizzle
					icon = '&#xf017;';
					break;

				case 10: //Freezing rain
					icon = '&#xf019;';
					break;

				case 11: // Showers
					icon = '&#xf01a;';
					break;

				case 12: // Snow flurries
					icon = '&#xf01b;';
					break;

				case 13: // Light snow showers
					icon = '&#xf01b;';
					break;

				case 14: // Blowing snow
					icon = '&#xf01b;';
					break;

				case 15: // Snow
					icon = '&#xf01b;';
					break;

				case 16: // Hail
					icon = '&#xf015;';
					break;

				case 17: // Sleet
					icon = '&#xf01b;';
					break;

				case 18: // Dust
					icon = '&#xf014;';
					break;

				case 19: // Foggy
					icon = '&#xf014;';
					break;

				case 20: // Haze
					icon = '&#xf021;';
					break;

				case 21: //Smoky
					icon = '&#xf021;';
					break;

				case 22: // Blustery
					icon = '&#xf01d;';
					break;

				case 23: // Windy
					icon = '&#xf01b;';
					break;

				case 24: // Cold
					icon = '&#xf00d;';
					break;

				case 25: // Cloudy
					icon = '&#xf013;';
					break; 

				case 26: // mostly cloudy (night)
					icon = '&#xf031;';
					break;

				case 27: // mostly cloudy (day)
					icon = '&#xf002;';
					break;

				case 28: // partly cloudy (night)
					icon = '&#xf031;';
					break;

				case 29: // partly cludy (day)
					icon = '&#xf002;';
					break;

				case 30: // Clear (night)
					icon = '&#xf02e;';
					break;

				case 31: // sunny
					icon = '&#xf00d;';
					break;

				case 32: // fair (night)
					icon = '&#xf02e;';
					break;

				case 33: // Fair (day)
					icon = '&#xf00d;';
					break;

				case 34: // Mixed rain and hail
      		icon = '&#xf015;';
      		break;

      	case 35: // Hot
      		icon = '&#xf00d;';
      		break;

      	case 36: // Isolated Thunderstorms
      		icon = '&#xf01e;';
      		break;

      	case 37: // Scattered Thunderstorms
      		icon = '&#xf01e;';
      		break;

      	case 38: // Scattered Showers
      		icon = '&#xf01a;';
      		break;

      	case 39: // Heavy snow
      		icon = '&#xf01b;';
      		break;

      	case 40: // Scattered snow showers
      		icon = '&#xf01b;';
      		break;

      	case 41: // Heavy snow
      		icon = '&#xf01b;';
      		break;

      	case 42: // Partly cloudy
      		icon = '&#xf013;';
      		break; 

      	case 43: // Thundershowers
      		icon = '&#xf01e;';
      		break;  

      	case 44: // Snow showers
      		icon = '&#xf01b;';
      		break;

      	case 45: // Isolated Thundershowers
      		icon = '&#xf01e;';
      		break;

      	case 3200: // Not available
      		icon = '?';
      		break;   
			}
		}
	})
}