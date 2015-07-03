if (Meteor.isClient) {
  // only run some code if it's the first time
  // a computation has run
  c1 = Tracker.autorun(function () {
    var c = Tracker.currentComputation;
    if (c && c.firstRun)
      console.log('1: running computation');
  });


  // _.once returns a function that can only
  // be called once.
  callback = _.once(function () {
    console.log('2: running computation');
  });

  // no matter how many times the computation
  // reruns, the function above will only run
  // once.
  c2 = Tracker.autorun(function () {
    callback();
  });
}
