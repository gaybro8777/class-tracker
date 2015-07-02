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
      debugger;
      this._dep.depend();
      return this._value;
    }
  };

  sayHello = function sayHello () {
    var name = Tracker.nonreactive(function computationDisabled () {
      return Name.get();
    });

    console.log('Hello: ' + name);
  };

  Tracker.autorun(sayHello);
}
