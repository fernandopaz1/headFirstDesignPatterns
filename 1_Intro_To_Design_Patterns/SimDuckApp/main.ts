import {Duck} from './Duck.ts';
import {MallardDuck} from './MallardDuck.ts';
import {RedheadDuck} from './RedheadDuck.ts';

const mallard = new MallardDuck();
const redhead = new RedheadDuck();

function demoDuck(d: Duck): void {
	console.log('\n'.repeat(2) + '-'.repeat(30));
	console.log('Demo de ', d.constructor.name);
	d.swim();
	d.quack();
}

demoDuck(redhead);
redhead.display();

demoDuck(mallard);
mallard.display();
