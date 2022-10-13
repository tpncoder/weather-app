import * as essentials from './modules/essentials.js';
import * as variables from './modules/variables.js'
import * as highlights from './modules/highlights.js';

async function weatherIcon(object, img) {	
	let icon = object.icon;	
	let img_name = `./images/4th Set - Color/${icon}.svg`;
	img.setAttribute('src', img_name);
}

var daylist = ["Sunday","Monday","Tuesday","Wednesday ","Thursday","Friday","Saturday"];
var today = new Date();		
var day = today.getDay();
var day_name = daylist[day];
variables.childrenLeft[2].textContent = day_name;	


async function setGrid(object) {
	let children = variables.grid.children;
	let child;
	let day_temp;	


	for(var index = 0; index <=5; index++){
		child = children[index].children;
		day_temp = object.days[index];

		child[0].textContent = day_name;
		child[0].style.paddingBottom = "2vh";
		child[0].style.paddingTop = "2vh";
	
		weatherIcon(object.days[index], child[1]);	

		child[2].textContent = `${day_temp.temp}°C`;

		if(typeof daylist[day + 1] === 'undefined') {
			day = 0;
			day_name = daylist[day];
		} else {
			day++;
			day_name = daylist[day];
		}
	}	
}

async function main() {
	var response =  await fetch(variables.ipUrl);
	var ipResponse = await response.json();	

	const ipJson = await JSON.stringify(eval(ipResponse));
	const ipObj = await JSON.parse(ipJson);
	var region = await ipObj.city;

	let city = region;	

	const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?unitGroup=metric&include=days&key=${variables.weatherApiKey}&contentType=json`;

	response = await fetch(url);
	let weather = await response.json();
	let json = JSON.stringify(eval(weather));
	let obj = JSON.parse(json);

	let resolvedAddress = obj.resolvedAddress;
	let today = obj.days[0];

	weatherIcon(today, variables.image);	
	essentials.display(resolvedAddress, variables.temp_str);
	setGrid(obj);
	highlights.todayInfo(today);	
}

main();
