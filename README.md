
## <a href="https://www.eventedmind.com/classes/tracker-026b9a70" target="_blank">Class: Tracker</a>

**Meteor**<br>
**Core**

Meteor uses a programming technique called 'Reactive Programming' in the browser to automatically propagate data changes through your application. You're probably already using several reactive data sources like Session and Cursor. In this class you'll dive into how the reactive system actually works. You'll explore the data structures and their relationships. Then I'll show you some tips and tricks.


**What's in this class?**


* <a href="https://www.eventedmind.com/classes/tracker-026b9a70/what-is-tracker-ab170269" target="_blank">What Is Tracker?</a> - Introducing the Tracker class. Meteor uses a programming technique called 'Reactive Programming' in the browser to automatically propagate data changes through your application. You're probably already using several reactive data sources like Session and Cursor. In this class you'll dive into how the reactive system actually works. You'll explore the data structures and their relationships. Then I'll show you some tips and tricks for using and debugging Tracker.


* <a href="https://www.eventedmind.com/classes/tracker-026b9a70/the-computation-object-440b35ab" target="_blank">The Computation Object</a> - The Computation object is the core data structure of the Tracker reactivity system.  It wraps a function and allows the function to be invalidated as a result of a change to a reactive data source. In this lesson we'll create a Computation, explore its state properties and see how to use the invalidate, stop and onInvalidate methods.


* <a href="https://www.eventedmind.com/classes/tracker-026b9a70/computations-and-the-call-stack-8983d8a7" target="_blank">Computations And The Call Stack</a> - The Tracker system works by calling functions. When you think about calling functions you should be thinking about the call stack. In this lesson you'll see the relationship by exploring the call stack in the Chrome debugger.


* <a href="https://www.eventedmind.com/classes/tracker-026b9a70/flushing-computations-f957b6e5" target="_blank">Flushing Computations</a> - What does it mean to "flush" in the Tracker system? In this lesson you'll explore what "flushing" means and the performance and predictability benefits it provides.


* <a href="https://www.eventedmind.com/classes/tracker-026b9a70/build-a-reactive-data-source-cf040ad0" target="_blank">Build A Reactive Data Source</a> - Now we can tie together these concepts to build our own reactive data source. By doing so, you'll see complete relationship between an arbitrary function, computation and a reactive data source.


* <a href="https://www.eventedmind.com/classes/tracker-026b9a70/the-dependency-object-bb8516db" target="_blank">The Dependency Object</a> - The Dependency object allows you to store and invalidate a list of computations.  It saves us from writing boilerplate code. In this lesson we'll update our reactive data source to use the Dependency object. Then we'll explore the object in the debugger and tie together the relationships between a function, Dependency and Computation.


* <a href="https://www.eventedmind.com/classes/tracker-026b9a70/making-a-data-source-nonreactive-dc894776" target="_blank">Make A Data Source Nonreactive</a> - In this lesson I'll show you how to use the Tracker.nonreactive function to temporarily make a reactive data source nonreactive. Then we'll dive into the internals to see why it works by exploring the call stack.


* <a href="https://www.eventedmind.com/classes/tracker-026b9a70/reactive-subscriptions-4b82c3af" target="_blank">Reactive Subscriptions</a> - Meteor has a special way of working with subscriptions that are created inside of computations. Since a computation function can rerun at any time, subscribing to the same subscription with different parameters, Meteor takes care to automatically stop the old subscription. But Meteor also is smart enough not to resubscribe to the same subscription. In this lesson you'll see how.


* <a href="https://www.eventedmind.com/classes/tracker-026b9a70/why-was-my-function-rerun-754b5b9a" target="_blank">Why Was My Function Rerun?</a> - In this tip I'll show you a very useful debugging technique for determining why your function was rerun. Was it from a message off the wire? Or another function changing a reactive Session value?


* <a href="https://www.eventedmind.com/classes/tracker-026b9a70/only-run-a-function-once-aacd8c2d" target="_blank">Only Run A Function Once</a> - Sometimes you want to make sure a piece of code only runs once, instead of every time a computation reruns. A common example is when reporting a page view metric inside of a reactive route function. In this tip I'll show you two ways to accomplish this task.


* <a href="https://www.eventedmind.com/classes/tracker-026b9a70/conclusion-7f4feda6" target="_blank">Conclusion</a> - In conclusion, let's see how all the parts of the Tracker work together to form the reactivity system of Meteor.




