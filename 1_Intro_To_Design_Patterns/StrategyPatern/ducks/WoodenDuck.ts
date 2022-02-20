import {Duck} from './Duck.ts';
import {FlyNoWay} from '../behaviors/fly/FlyNoWay.ts';
import {Swim} from '../behaviors/swim/Swim.ts';
import {MuteQuack} from '../behaviors/quack/MuteQuack.ts';

export class WoodenDuck extends Duck {
	constructor() {
		super();
		this.setFlyBehavior(new FlyNoWay());
		this.setSwimBehavior(new Swim());
		this.setQuackBehavior(new MuteQuack());
	}

	display(): void {
		console.log("It's a wooden duck");
	}
}
