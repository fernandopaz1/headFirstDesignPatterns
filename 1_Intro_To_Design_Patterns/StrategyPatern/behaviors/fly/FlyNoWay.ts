import {FlyBehavior} from './FlyBehavior.ts';
export class FlyNoWay implements FlyBehavior {
	fly(): void {
		console.log("Can't Fly");
	}
}
