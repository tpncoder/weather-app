import * as variables from "./variables.js"

export async function display(value_1, obj, str) {
    variables.country.textContent = value_1;
    str = obj.temp;	
    variables.temp.textContent = `${str}°C`;
}
