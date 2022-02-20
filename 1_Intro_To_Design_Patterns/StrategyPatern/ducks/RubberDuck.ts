import {Duck} from './Duck.ts';
import {FlyNoWay} from '../behaviors/fly/FlyNoWay.ts';
import {Swim} from '../behaviors/swim/Swim.ts';
import {Squeak} from '../behaviors/quack/Squeak.ts';

export class RubberDuck extends Duck {
	constructor() {
		super();
		this.setFlyBehavior(new FlyNoWay());
		this.setSwimBehavior(new Swim());
		this.setQuackBehavior(new Squeak());
	}

	display(): void {
		console.log("It's a rubber duck");
	}
}
