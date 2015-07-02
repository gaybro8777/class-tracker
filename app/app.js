Items = new Mongo.Collection('items');

if (Meteor.isClient) {
  Session.setDefault('title', 'Item 0');

  computation = Tracker.autorun(function () {
    Meteor.subscribe('item', Session.get('title'));
  });
}

if (Meteor.isServer) {
  Meteor.publish('item', function (title) {
    return Items.find({title: title});
  });

  if (Items.find().count() == 0) {
    for (var i = 0; i < 10; i++) {
      Items.insert({title: 'Item ' + i});
    }
  }
}
