/**
 * Created by vr on 02/08/15.
 */

Countries = new Mongo.Collection('countries');

Countries.all = function(){
  return Countries.find().fetch();
};

Schemas.Country = new SimpleSchema({
  id: {
    type: Number,
    index: true
  },
  name: {
    type: String
  }
});

Countries.attachSchema(Schemas.Country);