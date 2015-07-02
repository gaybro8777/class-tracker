if (Meteor.isClient) {
  Name = {
    _value: 'Chris',
    _dep: new Tracker.Dependency,
    set: function (value) {
      if (value !== this._value) {
        this._value = value;
        this._dep.changed();
      }
    },

    get: function () {
      this._dep.depend();
      return this._value;
    }
  };

  sayHello = function sayHello () {
    var name = Name.get();
    console.log('Hello: ' + name);
  };

  anotherFunc = function anotherFunc () {
    var name = Name.get();
    console.log('Hello 2: ' + name);
  };

  Tracker.autorun(sayHello);
  Tracker.autorun(anotherFunc);
}
