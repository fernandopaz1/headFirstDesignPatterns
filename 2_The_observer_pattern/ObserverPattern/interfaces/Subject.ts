import {Observer} from './Observer.ts';
export interface Subject {
	registerObserver(o: Observer): void;
	unregisterObserver(o: Observer): void;
	notifyObservers(): void;
}
