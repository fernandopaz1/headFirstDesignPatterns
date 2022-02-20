import {Duck} from './Duck.ts';
import {FlyWithWings} from '../behaviors/fly/FlyWithWings.ts';
import {Swim} from '../behaviors/swim/Swim.ts';
import {Quack} from '../behaviors/quack/Quack.ts';

export class RedheadDuck extends Duck {
	constructor() {
		super();
		this.setFlyBehavior(new FlyWithWings());
		this.setSwimBehavior(new Swim());
		this.setQuackBehavior(new Quack());
	}

	display(): void {
		console.log('Looks like a redhead Duck');
	}
}
