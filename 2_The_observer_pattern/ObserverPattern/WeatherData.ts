import {Subject} from './interfaces/Subject.ts';
import {Observer} from './interfaces/Observer.ts';

export class WeatherData implements Subject {
	private observers: Observer[];
	private temp: number;
	private humidity: number;
	private pressure: number;

	getTemp(): number {
		return this.temp;
	}
	getHumidity(): number {
		return this.humidity;
	}
	getPressure(): number {
		return this.pressure;
	}

	private setTemperature(t: number): void {
		this.temp = t;
	}
	private setHumidity(h: number): void {
		this.humidity = h;
	}
	private setPressure(p: number): void {
		this.pressure = p;
	}

	constructor(t: number, h: number, p: number) {
		this.observers = [];
		this.temp = t;
		this.humidity = h;
		this.pressure = p;
	}

	setData(t: number, h: number, p: number) {
		this.setTemperature(t);
		this.setHumidity(h);
		this.setPressure(p);
		this.notifyObservers();
	}

	registerObserver(o: Observer): void {
		this.observers.push(o);
	}
	unregisterObserver(o: Observer): void {
		const index: number = this.observers.indexOf(o);
		this.observers.splice(index, 1);
	}
	notifyObservers(): void {
		this.observers.forEach((observer) => {
			observer.update();
		});
	}
}
