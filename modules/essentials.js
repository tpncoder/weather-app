import * as variables from "./variables.js"

export async function display(value_1, value_2) {
	variables.country.textContent = value_1;	
	variables.temp.textContent = value_2;	
}
