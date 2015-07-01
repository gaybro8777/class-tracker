if (Meteor.isClient) {
  sayHello = function sayHello () {
    console.log('hello world');

    Tracker.afterFlush(function () {
      console.log('after flush');
    });
  };

  computation = Tracker.autorun(sayHello);

  invalidate = function () {
    computation.invalidate();
    computation.invalidate();
    computation.invalidate();
    computation.invalidate();
    computation.invalidate();
    computation.invalidate();
    Tracker.flush();
    console.log('called invalidate()');
  };
}
