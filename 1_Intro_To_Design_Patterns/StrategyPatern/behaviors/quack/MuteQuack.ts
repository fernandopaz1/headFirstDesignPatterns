import {QuackBehavior} from './QuackBehavior.ts';
export class MuteQuack implements QuackBehavior {
	quack(): void {
		console.log('...');
	}
}
