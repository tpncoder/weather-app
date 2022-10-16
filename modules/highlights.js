import * as variables from './variables.js'

export const uvIndex = (child, children,  day) => {
	children = child[0].children;	
	children[1].textContent = day.uvindex;

	children = null;	
}

export const wind_speed = (child, children, day) => {
	let wind_speed = `${day.windspeed} km/hr`;
	children = child[1].children;
	children[1].textContent = wind_speed;
	children = null;
	wind_speed = null;	
}

export const sunRiseSet = (child, children, day) => {	
	children = child[2].children;
	let sunRise = day.sunrise;
	let sunRiseArr = sunRise.split(':');
	let sunriseStr = `${sunRiseArr[0]}:${sunRiseArr[1]} AM`;

	let sunSet = day.sunset;
	let sunSetArr = sunSet.split(':');
	sunSetArr[0] -= 12;	
	let sunSetStr = `${sunSetArr[0]}:${sunSetArr[1]} PM`;
	children[1].innerText = `${sunriseStr} \n ${sunSetStr}`;	
	
	children = null;
	sunRise = null;
	sunSet = null;
	sunRiseArr = null;
	sunriseStr = null;
	sunSetArr = null;
	sunSetStr = null;	
}

export const humidity = (child, children, day) => {
	children = child[3].children;
	children[1].innerText = `${day.humidity}%`;	
	children = null;	
}

export const visibility = (child, children, day) => {
	children = child[4].children;
	children[1].innerText = `${day.visibility} km`;	
	children = null;	
}

export const precipProb = (child, children, day) => {
	children = child[5].children;
	children[1].innerText = `${day.precipprob}%`;	
	children = null;	
}

export async function todayInfo(day){
	let child = variables.highlights.children;
	let children;
	
	for(var index = 0; index<=5; index++){	
		children = child[index].children;

		children[0].style.paddingTop = "2vh";	
	}
	uvIndex(child, children, day);
	wind_speed(child, children, day);
	sunRiseSet(child, children, day);
	humidity(child, children, day);	
	visibility(child, children, day);	
	precipProb(child, children, day);	
	children = null;
	child = null;	
}
