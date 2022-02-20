import {FlyBehavior} from './FlyBehavior.ts';
export class FlyWithWings implements FlyBehavior {
	fly(): void {
		console.log('Flying with wings');
	}
}
