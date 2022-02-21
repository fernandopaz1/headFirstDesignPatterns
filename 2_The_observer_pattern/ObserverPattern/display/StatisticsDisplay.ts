import {DisplayInterface} from './DisplayInterface.ts';
import {WeatherData} from '../WeatherData.ts';

interface Data {
	total: number;
	amount: number;
}

export class StatisticsDisplay implements DisplayInterface {
	temp: Data;
	humidity: Data;
	pressure: Data;
	weatherData: WeatherData;

	display(temp: number, humidity: number, pressure: number): void {
		this.setTemp(temp);
		this.setHumidity(humidity);
		this.setPressure(pressure);

		console.log('-'.repeat(10) + 'StatisticsDisplay' + '-'.repeat(10));
		console.log(
			`Averages: Temperature ${this.getAverage(
				this.temp
			)}°C - Humidity ${this.getAverage(
				this.humidity
			)} - Pressure ${this.getAverage(this.pressure)} Atm`
		);

		console.log('-'.repeat(30) + '\n');
	}

	constructor(wd: WeatherData) {
		this.weatherData = wd;
		wd.registerObserver(this);
		this.temp = {total: 0, amount: 0};
		this.humidity = {total: 0, amount: 0};
		this.pressure = {total: 0, amount: 0};
	}

	update(): void {
		const temp = this.weatherData.getTemp();
		const humidity = this.weatherData.getHumidity();
		const pressure = this.weatherData.getPressure();
		this.display(temp, humidity, pressure);
	}

	setTemp(t: number): void {
		this.temp.total += t;
		this.temp.amount++;
	}

	setHumidity(h: number): void {
		this.humidity.total += h;
		this.humidity.amount++;
	}
	setPressure(p: number): void {
		this.pressure.total += p;
		this.pressure.amount++;
	}

	getAverage(data: Data): number {
		return data.total / data.amount;
	}
}
