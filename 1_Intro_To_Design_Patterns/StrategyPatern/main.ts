import {Duck} from './ducks/Duck.ts';
import {MallardDuck} from './ducks/MallardDuck.ts';
import {RedheadDuck} from './ducks/RedheadDuck.ts';
import {RubberDuck} from './ducks/RubberDuck.ts';
import {WoodenDuck} from './ducks/WoodenDuck.ts';

const mallard = new MallardDuck();
const redhead = new RedheadDuck();
const rubber = new RubberDuck();
const wooden = new WoodenDuck();

function demoDuck(d: Duck): void {
	console.log('\n'.repeat(2) + '-'.repeat(30));
	console.log('Demo de ', d.constructor.name);
	d.display();
	d.swim();
	d.quack();
	d.fly();
}

demoDuck(redhead);
demoDuck(mallard);
demoDuck(wooden);
demoDuck(rubber);
