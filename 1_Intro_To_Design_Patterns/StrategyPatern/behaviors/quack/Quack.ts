import {QuackBehavior} from './QuackBehavior.ts';
export class Quack implements QuackBehavior {
	quack(): void {
		console.log('Quack');
	}
}
