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
    $('#selectedVesselDiv').text(self.name);
    if($('#selectedVesselDiv').attr('href').indexOf('vessels') === -1){
      $('#selectedVesselDiv').attr("href", "vessels/"+self._id);
    } else {
      $('#selectedVesselDiv').attr("href", self._id);
    }
    console.log($('#selectedVesselDiv').attr('href'));
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
