// Using a reactive data source
sayHello = function sayHello () {
  var name = Name.get();
  console.log('Hello: ' + name);
};

// Making a data source non reactive
sayHelloNonreactive = function sayHello () {
  var callback = function computationDisabled () { return Name.get(); }
  var name = Tracker.nonreactive(callback);
  console.log('Hello: ' + name);
};
