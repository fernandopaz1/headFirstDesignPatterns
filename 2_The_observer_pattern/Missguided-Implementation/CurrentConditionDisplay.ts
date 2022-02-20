import {DisplayInterface} from './DisplayInterface.ts';

export class CurrentConditionDisplay implements DisplayInterface {
	display(temp: number, humidity: number, pressure: number): void {
		console.log('-'.repeat(10) + 'Current Display' + '-'.repeat(10));
		console.info(
			`Tempreature ${temp} -  Humidity ${humidity} - Pressure ${pressure}`
		);
		console.log('-'.repeat(30) + '\n');
	}
}
