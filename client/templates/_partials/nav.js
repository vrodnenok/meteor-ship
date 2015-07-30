Template.nav.helpers({
  vessels: function(){
    return Vessels.find().fetch();
  },
  selectedVessel: function(){
    var vsl = JSON.parse(localStorage.getItem('currentVessel'));
    console.log(vsl);
    return vsl;
  }
});

Template.nav.events({
  'click .vessel-selector': function(event) {
    self = this;
    console.log(self);
    currentVessel = self;
    Session.set('currentVessel', self);
    localStorage.setItem('currentVessel', JSON.stringify(self));
    $('#selectedVesselDiv').text("Vessel selected: "+self.name);
    $('#selectedVesselDiv').attr("href", "/"+self._id);
    console.log($('#selectedVesselDiv').text);
  }
});

Template.nav.viewmodel({

  selectedVessel: {},

  vesselsName: function(){
    console.log("viewmodel working");
    return this.selectedVessel.name;
  },
  vesselsId: function(){
    return this.selectedVessel._id;
  }
});
