import {QuackBehavior} from './QuackBehavior.ts';
export class Squeak implements QuackBehavior {
	quack(): void {
		console.log('Squeaking');
	}
}
