Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
  notFoundTemplate: 'notfound'
});

Router.route('/', {
  name: 'homeIndex',
  waitOn: function(){
    return Meteor.subscribe("newsarticles") && Meteor.subscribe("vessels");
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
