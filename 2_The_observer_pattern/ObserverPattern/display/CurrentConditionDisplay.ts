import {DisplayInterface} from './DisplayInterface.ts';
import {WeatherData} from '../WeatherData.ts';

export class CurrentConditionDisplay implements DisplayInterface {
	weatherData: WeatherData;

	display(temp: number, humidity: number, pressure: number): void {
		console.log('-'.repeat(10) + 'Current Display' + '-'.repeat(10));
		console.info(
			`Tempreature ${temp} -  Humidity ${humidity} - Pressure ${pressure}`
		);
		console.log('-'.repeat(30) + '\n');
	}

	constructor(wd: WeatherData) {
		this.weatherData = wd;
		wd.registerObserver(this);
	}

	update(): void {
		const temp = this.weatherData.getTemp();
		const humidity = this.weatherData.getHumidity();
		const pressure = this.weatherData.getPressure();
		this.display(temp, humidity, pressure);
	}
}
