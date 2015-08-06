/**
 * Created by vr on 02/08/15.
 */

Ports = new Mongo.Collection('ports');

Ports.all = function(){
  Ports.find().fetch();
};

Ports.byCountry = function(id){
  Ports.find({countryId:id});
};

Schemas.Port = new SimpleSchema({
  name: {
    type: String,
    label: 'Ports name'
  },
  id: {
    type: Number,
    label: "Port's ID"
  },
  country: {
    type: String,
    label: 'Country'
  },
  countryId: {
    type: Number,
    index: true
  },
  lat: {
    type: Number,
    decimal: true
  },
  long: {
    type: Number,
    decimal: true
  }
});

Ports.attachSchema(Schemas.Port);