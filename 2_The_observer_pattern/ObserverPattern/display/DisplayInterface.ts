import {Observer} from '../interfaces/Observer.ts';
export interface DisplayInterface extends Observer {
	display(temp: number, humidity: number, pressure: number): void;
}
