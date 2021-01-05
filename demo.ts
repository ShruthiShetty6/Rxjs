//Emit variable amount of values in a sequence and then emits a complete notification.
// RxJS v6+
import { of } from "rxjs";
//emits any number of provided values in sequence
const source = of(1, 2, 3, 4, 5);
//output: 1,2,3,4,5
const subscribe = source.subscribe((val) => console.log(val));

// RxJS v6+
import { of } from "rxjs";
//emits values of any type
const source = of({ name: "Brian" }, [1, 2, 3], function hello() {
  return "Hello";
});
//output: {name: 'Brian'}, [1,2,3], function hello() { return 'Hello' }
const subscribe = source.subscribe((val) => console.log(val));

// signature: startWith(an: Values): Observable
// Emit given value first.
// 💡 A BehaviorSubject can also start with an initial value!

// RxJS v6+
import { startWith } from "rxjs/operators";
import { of } from "rxjs";

//emit (1,2,3)
const source = of(1, 2, 3);
//start with 0
const example = source.pipe(startWith(0));
//output: 0,1,2,3
const subscribe = example.subscribe((val) => console.log(val));

//RxJS features many operators that are simply shortcuts for other operators. For example, any time we just want to grab a single property from an emitted value, instead of using map we could use pluck. The pluck operator accepts a list of values which describe the property you wish to grab from the emitted item. For instance, using our event code example from above we could use pluck instead of map to extract the code property from the event object:

import { fromEvent } from "rxjs";
import { pluck } from "rxjs/operators";

const keyup$ = fromEvent(document, "keyup");

keyup$
  .pipe(pluck("code"))
  // 'Space', 'Enter'
  .subscribe(console.log);

//noop A function that does nothing.

//signature: generate(initialStateOrOptions: GenerateOptions, condition?: ConditionFunc, iterate?: IterateFunc, resultSelectorOrObservable?: (ResultFunc) | SchedulerLike, scheduler?: SchedulerLike): Observable
//Generates an observable sequence by running a state-driven loop producing the sequence's elements, using the specified scheduler to send out observer messages.
// RxJS v6+
import { generate } from "rxjs";

generate(
  2,
  (x) => x <= 8,
  (x) => x + 3
).subscribe(console.log);

/*
OUTPUT:
2
5
8
*/
//like first 2 then 2+3 the 5+3 should be less than 8 so no more iteration

//// RxJS v6+
import { of } from "rxjs";
import { scan } from "rxjs/operators";

const source = of(1, 2, 3);
// basic scan example, sum over time starting with zero
const example = source.pipe(scan((acc, curr) => acc + curr, 0));
// log accumulated values
// output: 1,3,6
const subscribe = example.subscribe((val) => console.log(val));

// tap(nextOrObserver: function, error: function, complete: function): Observable
// Transparently perform actions or side-effects, such as logging.
