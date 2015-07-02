if (Meteor.isClient) {
  Name = {
    _value: 'Chris',

    _comps: {},

    set: function (value) {
      if (value !== this._value) {
        this._value = value;

        for (var id in this._comps)
          this._comps[id].invalidate();
      }
    },

    get: function () {
      if (Tracker.active) {
        var c = Tracker.currentComputation;
        this._comps[c._id] = c;
      }

      return this._value;
    }
  };

  sayHello = function sayHello () {
    var name = Name.get();
    console.log('Name: ' + name);
  };

  computation = Tracker.autorun(sayHello);
}
