import {SwimBehavior} from './SwimBehavior.ts';
export class SwimNoWay implements SwimBehavior {
	swim(): void {
		console.log('Sinking');
	}
}
