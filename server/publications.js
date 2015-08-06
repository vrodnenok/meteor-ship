console.log('publications running');

Meteor.publish('get-distance', function(port1, port2){
  var d = Distances.findOne({port1: port1, port2: port2});
  if(d) return d;
  d = Distances.findOne({port1: port2, port2: port1});
  if(d) {
    return d;
  } else {
    return 'nf'
  }
});

Meteor.publish('distances', function(){
  return Distances.find();
});

Meteor.publish('ports-by-country', function(id){
  return Ports.find({countryId: id});
});

Meteor.publish('countries', function(){
  return Countries.find();
});

Meteor.publish('ports', function(){
  return Ports.find();
});

Meteor.publish("newsarticles", function(){
  return NewsArticles.find({}, {limit: 3});
});

Meteor.publish('vessels', function(){
  return Vessels.find();
});

Meteor.publish('vessel-by-id', function(id){
  check(id, String);
  return Vessels.find({_id: id});
});

NewsArticles.allow({
  update : function(userid, article){
    return isAdmin();
  },
  insert : function(userid, article){
    return isAdmin();
  },
  remove : function(userid, article){
    return isAdmin();
  }
});

Vessels.allow({
  update : function(userid, vessel){
    return isAdmin();
  },
  insert : function(userid, vessel){
    return isAdmin();
  },
  remove : function(userid, vessel){
    return isAdmin();
  }
});

Ports.allow({
  update : function(userid, port){
    return isAdmin();
  },
  insert : function(userid, port){
    return isAdmin();
  },
  remove : function(userid, port){
    return isAdmin();
  }
});

Countries.allow({
  update : function(userid, country){
    return isAdmin();
  },
  insert : function(userid, country){
    return isAdmin();
  },
  remove : function(userid, country){
    return isAdmin();
  }
});