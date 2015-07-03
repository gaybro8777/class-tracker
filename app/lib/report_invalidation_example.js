Items = new Mongo.Collection('items');

if (Meteor.isClient) {
  Meteor.subscribe('items');

  reportInvalidation = function reportInvalidation () {
    if (Tracker.active) {
      var c = Tracker.currentComputation;
      c.onInvalidate(function reportInvalidation () {
        console.trace("computation invalidated: " + c._id)
      });
    }
  };

  Template.LastItem.helpers({
    item: function () {
      var cursor = Items.find();
      var item = cursor.fetch().pop();
      //reportInvalidation();
      return item;
    }
  });
}

if (Meteor.isServer) {
  Meteor.publish('items', function () {
    return Items.find();
  });

  if (Items.find().count() == 0) {
    for (var i = 0; i < 10; i++) {
      Items.insert({title: 'Item ' + i});
    }
  }
}
