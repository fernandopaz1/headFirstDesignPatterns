import {DisplayInterface} from './DisplayInterface.ts';

interface Data {
	total: number;
	amount: number;
}

export class StatisticsDisplay implements DisplayInterface {
	temp: Data;
	humidity: Data;
	pressure: Data;

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

	constructor() {
		this.temp = {total: 0, amount: 0};
		this.humidity = {total: 0, amount: 0};
		this.pressure = {total: 0, amount: 0};
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
