console.log('publications running');

Meteor.publish("newsarticles", function(){
  return NewsArticles.find({}, {limit: 3});
});

Meteor.publish('vessels', function(){
  return Vessels.find();
});
