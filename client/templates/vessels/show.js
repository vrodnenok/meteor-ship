Template.vesselsShow.helpers({
  schema: function(){
    return Schemas.Vessel;
  }
});

Template.registerHelper("Vessels", Vessels);