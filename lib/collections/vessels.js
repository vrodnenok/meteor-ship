Vessels = new Mongo.Collection('vessels');
currentVessel = {};

console.log("Vessels ran");

var Schemas = {};

Schemas.Vessel = new SimpleSchema({
  id: {
    type: Number,
    index: 1
  },
  name: {
    type: String,
    label: 'Vessels name',
    max: 100
  },
  IMO: {
    type: Number,
    label: 'IMO number',
    min: 1,
    max: 999999999
  },
  GRT: {
    type: Number,
    label: 'GRT',
    min: 1,
    max: 599999
  },
  NRT: {
    type: Number,
    label: 'NRT',
    min: 1,
    max: 599999
  },
  built: {
    type: Number,
    label: 'Year of build',
    min: 1900,
    max: 3000
  },
  dwt: {
    type: Number,
    label: 'Deadweight',
    min: 0,
    max: 599999
  },
  dwcc: {
    type: Number,
    label: 'Deadweight cargo capacity',
    min: 0,
    max: 599999
  },
  volume: {
    type: Number,
    label: 'Holds volume',
    min: 500,
    max: 795000
  },
  speedBallastEco: {
    type: Number,
    label: 'Speed in ballast, Eco mode',
    decimal: true,
    min: 1,
    max: 50
  },
  speedLoadedEco: {
    type: Number,
    label: 'Speed loaded, Eco mode',
    decimal: true,
    min: 1,
    max: 50
  },
  speedBallastNormal: {
    type: Number,
    label: 'Speed in ballast, normal',
    decimal: true,
    min: 1,
    max: 50
  },
  speedLoadedNormal: {
    type: Number,
    label: 'Speed loaded, normal',
    decimal: true,
    min: 1,
    max: 50
  },
  speedBallastMax: {
    type: Number,
    label: 'Speed in ballast, max',
    decimal: true,
    min: 1,
    max: 50
  },
  speedLoadedMax: {
    type: Number,
    label: 'Speed loaded, ',
    decimal: true,
    min: 1,
    max: 50
  },
  vesselsType: {
    type: String,
    max: 50,
    label: 'Type of the vessel'
  },
  heavyFuelTankCapacity:{
    type: Number,
    optional: true,
    label: 'Heavy fuel tanks capacity'
  },
  lightFuelTankCapacity: {
    type: Number,
    label: 'Light fuel tanks capacity'
  },
  "heavyFuelConsumptionsIdle": {
    type: Number,
    optional: true,
    decimal: true,
    label: 'Heavy fuel consumption staying idle',
    min: 0
  },
  "heavyFuelConsumptionsUnderwayEco": {
      type: Number,
      optional: true,
      decimal: true,
      label: 'Heavy fuel consumption underway, eco mode',
      min: 0
  },
  "heavyFuelConsumptionsUnderwayNormal": {
      type: Number,
      optional: true,
      decimal: true,
      label: 'Heavy fuel consumption underway, normal',
      min: 0
  },
  "heavyFuelConsumptionsUnderwayMax": {
      type: Number,
      optional: true,
      decimal: true,
      label: 'Heavy fuel consumption underway, max speed',
      min: 0
  },
  "heavyFuelConsumptionsInPortWithCranes": {
      type: Number,
      optional: true,
      decimal: true,
      label: 'Heavy fuel consumption staying with working cranes',
      min: 0
  },
  "lightFuelConsumptionIdle": {
      type: Number,
      decimal: true,
      label: 'Light fuel consumption staying idle',
      min: 0
  },
  "lightFuelConsumptionUnderwayEco": {
      type: Number,
      decimal: true,
      label: 'Light fuel consumption underway',
      min: 0
  },
  "lightFuelConsumptionUnderwayNormal": {
      type: Number,
      decimal: true,
      label: 'Light fuel consumption underway',
      min: 0
  },
  "lightFuelConsumptionUnderwayMax": {
      type: Number,
      decimal: true,
      label: 'Light fuel consumption underway',
      min: 0
  },
  "lightFuelConsumptionInPortWithCranes": {
      type: Number,
      decimal: true,
      optional: true,
      label: 'Light fuel consumption staying with working cranes',
      min: 0
  },
  "luboilConsumptionIdle": {
      type: Number,
      decimal: true,
      label: 'Luboil consumption staying idle',
      min: 0
  },
  "luboilConsumptionUnderway": {
      type: Number,
      decimal: true,
      label: 'Luboil consumption underway',
      min: 0
  },
  salary: {
    type: Number,
    decimal: true,
    min: 0
  },
  hire: {
    type: Number,
    decimal: true,
    min: 0
  },
  pandi: {
    type: Number,
    decimal: true,
    min: 0
  },
  description: {
    type: String,
    optional: true
  },
  comments: {
    type:String,
    optional: true
  },
  pictureUrl1: {
    type: String,
    optional: true
  },
  pictureUrl2: {
    type: String,
    optional: true
  },
  pocketPlanUrl: {
    type: String,
    optional: true
  }
});

Vessels.attachSchema(Schemas.Vessel);
