if (Meteor.isClient) {
  sayHello = function sayHello () {
    console.log('hello world');
    var c1 = Tracker.currentComputation;
    debugger;

    Tracker.autorun(function inner () {
      var c2 = Tracker.currentComputation;
      console.log('inner autorun!');
      console.log('is active? ' + Tracker.active);
      debugger;
    });
  };

  computation = Tracker.autorun(sayHello);
}
