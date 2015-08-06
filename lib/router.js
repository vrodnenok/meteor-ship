Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
  notFoundTemplate: 'notfound'
});

Router.route('/distances', {
  name: 'distancesIndex',
  waitOn: function(){
    return Meteor.subscribe('countries') && Meteor.subscribe('ports');
  }
});

Router.route('/', {
  name: 'homeIndex',
  waitOn: function(){
    return Meteor.subscribe("newsarticles") && Meteor.subscribe("vessels");
  }
});

Router.route('/currencies', {
  name: 'exchangeIndex',
  waitOn: function(){
    return Meteor.subscribe("vessels");
  }
});

Router.route('/about', {
  name: 'homeAbout',
  waitOn: function(){
    return Meteor.subscribe("vessels");
  }
});

Router.route('/contact', {
  name: 'homeContact',
  waitOn: function(){
    return Meteor.subscribe("vessels");
  }
});

Router.route('/vessels', {
  name: 'vesselsIndex',
  waitOn: function(){
    return Meteor.subscribe('vessels');
  }
});

Router.route('/vessels/:id', {
  name: 'vesselsShow',
  waitOn: function(){
    return Meteor.subscribe('vessels');
  },
  data: function(){
    return Vessels.findOne({_id: this.params.id});
  }
});
