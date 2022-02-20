import {QuackBehavior} from '../behaviors/quack/QuackBehavior.ts';
import {FlyBehavior} from '../behaviors/fly/FlyBehavior.ts';
import {SwimBehavior} from '../behaviors/swim/SwimBehavior.ts';

import {Swim} from '../behaviors/swim/Swim.ts';
import {Quack} from '../behaviors/quack/Quack.ts';
import {FlyWithWings} from '../behaviors/fly/FlyWithWings.ts';

export class Duck {
	quackBehavior: QuackBehavior;
	flyBehavior: FlyBehavior;
	swimBehavior: SwimBehavior;

	display(): void {
		console.log('');
	}

	quack(): void {
		this.quackBehavior.quack();
	}

	swim(): void {
		this.swimBehavior.swim();
	}

	fly(): void {
		this.flyBehavior.fly();
	}

	setQuackBehavior(q: QuackBehavior): void {
		this.quackBehavior = q;
	}

	setFlyBehavior(f: FlyBehavior): void {
		this.flyBehavior = f;
	}

	setSwimBehavior(s: SwimBehavior): void {
		this.swimBehavior = s;
	}

	constructor() {
		this.quackBehavior = new Quack();
		this.flyBehavior = new FlyWithWings();
		this.swimBehavior = new Swim();
	}
}
