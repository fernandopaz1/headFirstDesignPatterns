import {CurrentConditionDisplay} from './CurrentConditionDisplay.ts';
import {StatisticsDisplay} from './StatisticsDisplay.ts';
import {DisplayInterface} from './DisplayInterface.ts';

export class WheaterData {
	private temp: number;
	private humidity: number;
	private pressure: number;
	private currentConditionDisplay: DisplayInterface;
	private statisticsDisplay: DisplayInterface;

	getTemp(): number {
		return this.temp;
	}
	getHumidity(): number {
		return this.humidity;
	}
	getPressure(): number {
		return this.pressure;
	}

	setTemperature(t: number): void {
		this.temp = t;
		this.measurementsChanged();
	}
	setHumidity(h: number): void {
		this.humidity = h;
		this.measurementsChanged();
	}
	setPressure(p: number): void {
		this.pressure = p;
		this.measurementsChanged();
	}

	measurementsChanged(): void {
		const t: number = this.getTemp();
		const p: number = this.getPressure();
		const h: number = this.getHumidity();

		this.currentConditionDisplay.display(t, p, h);
		this.statisticsDisplay.display(t, p, h);
	}

	constructor(t: number, h: number, p: number) {
		this.temp = t;
		this.humidity = h;
		this.pressure = p;
		this.currentConditionDisplay = new CurrentConditionDisplay();
		this.statisticsDisplay = new StatisticsDisplay();
	}
}
