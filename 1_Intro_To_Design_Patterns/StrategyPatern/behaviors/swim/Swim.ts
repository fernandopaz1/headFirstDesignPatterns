import {SwimBehavior} from './SwimBehavior.ts';
export class Swim implements SwimBehavior {
	swim(): void {
		console.log('Swimming');
	}
}
