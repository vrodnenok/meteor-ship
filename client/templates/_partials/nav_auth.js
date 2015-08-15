/**
 * Created by vr on 06/08/15.
 */

Template.navAuth.helpers({
  vessels: function(){
    return Vessels.find().fetch();
  },
  selectedVessel: function(){
    var vsl = JSON.parse(localStorage.getItem('currentVessel'));
    console.log(vsl);
    return vsl;
  }
});

Template.navAuth.events({
  'click #logoutLink': function(event){
    console.log('logout');
    Meteor.logout();
    console.log(Meteor.userId());
    Router.go('/');
  },
  'click .vessel-selector': function(event) {
    self = this;
    console.log(self);
    currentVessel = self;
    Session.set('currentVessel', self);
    localStorage.setItem('currentVessel', JSON.stringify(self));
    $('#selectedVesselDiv').html('');
    if($('#selectedVesselDiv').attr('href').indexOf('vessels') === -1){
      $('#selectedVesselDiv').attr("href", "vessels/"+self._id);
    } else {
      $('#selectedVesselDiv').attr("href", self._id);
    }
    console.log($('#selectedVesselDiv').attr('href'));
  }
});
