/**
 * Created by vr on 04/08/15.
 */

Distances = new Mongo.Collection('distances');

Schemas.Distance = new SimpleSchema({
  'port1': {
    type: Number,
    index: true,
    label: 'First port'
  },
  'port2': {
    type: Number,
    index: true,
    label: 'Second port'
  },
  'distances.$.distance': {
    label: 'Some distance between ports',
    type: Number
  },
  'distances.$.canal': {
    label: 'Name of a canal in the route',
    type: String
  }
});