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
