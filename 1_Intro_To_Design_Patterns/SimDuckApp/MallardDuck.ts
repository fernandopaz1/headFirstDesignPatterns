import {Duck} from './Duck.ts';
export class MallardDuck extends Duck {
	display(): void {
		console.log('Looks like a mallard Duck');
	}
}
