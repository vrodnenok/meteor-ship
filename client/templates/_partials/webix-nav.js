/**
 * Created by vr on 06/08/15.
 */

Template.webixNav.rendered = function(){
  var self = this;
  
  var vesselsProxy = webix.proxy('meteor', Vessels);

  if(Meteor.user()){
    var currentUser = Meteor.user();
  };

  var vesselSelector = {
    view: 'richselect',
    label: 'Select vessel: ',
    labelWidth: 125,
    gravity: 0.5,
    url: vesselsProxy
  };

  var navMenu = {
    view: 'menu', 
    // gravity: 0.15,
    // fillspace: 1,
    // layout: 'Y',
    data:[
      {
        id: 'homeMenuItem', href: '/', value: 'Home', 
          submenu: [
            {id: 'aboutMenuItem', href: '/about', value: 'About'},
            {id: 'contactMenuItem', href: '/contact', value: 'Contacts'},
            {id: 'miscMenuItem', href: '/misc', value: 'Misc info'}
          ]
      },
      {
        id: 'vesselsMenuItem', value: 'Vessels', submenu:[
        {id: 'vesselsListMenuItem', href: '/vessels', value: 'Show vessels list'},
        {id: 'vesselsEditorMenuItem', href: '#', value: 'Edit values details'}
      ]
      }
    ]
  };


  var loginButton = {
    view: 'button',
    id: 'login-button',
    value: 'Login',
    width: 90,
    click: function(){
      Session.set
      Router.go('loginIndex');
    }
  };

  var registerButton = {
    view: 'button',
    id: 'register-button',
    value: 'Register',
    width: 90,
    click: function(){
      Router.go('registerIndex');
    }
  };

  var logoutButton = {
    view: 'button',
    id: 'logout-button',
    value: 'Logout',
    width: 90,
    click: function(){
      Meteor.logout();
      Session.set('currentUser', null);
      Router.go('homeIndex');
      location.reload();
    }
  };


  var toolbarHeader = {
    view: 'template', 
    template: '<b><strong>VR Shipping</strong></b>',
    type: 'header',
    borderless: true,
    gravity: 0.19
  };

  var navToolbar = {
    view: 'toolbar',
    elements: [
      toolbarHeader,
      navMenu,
      vesselSelector,
      registerButton,
      loginButton
    ]
  };

  console.log(isAdmin());

  if(isAdmin()) {
      var navToolbarAdmin = {
        view: 'toolbar',
        elements: [
          toolbarHeader,
          navMenu,
          logoutButton,
          {
            view: 'template', 
            id: 'toolbar-user-info',
            borderless: true,
            gravity: 0.45,
            template: '<style> a.toolbar-header{color:white; text-align: right} </style>'
              + '<a class = "toolbar-header" href="#"><strong>' 
              + Meteor.user().username + '</strong> is logged in</a>',
            type: 'header',
            align: 'right'
          }
        ]
      };

    self.ui = webix.ui(navToolbarAdmin, self.find('#webix-nav-container'));
    return;

  } else if (Meteor.user() !== null){
      var navToolbarAuth = {
        view: 'toolbar',
        elements: [
          toolbarHeader,
          navMenu,        
          logoutButton, 
          {
            view: 'template',
            // gravity: 0.45, 
            borderless: true,
            template: '<style> a.toolbar-header{color:white} </style><a class = "toolbar-header" href = "#" style>User <strong>' + Meteor.user().username + '</strong> is logged in</a>', 
            type: 'header'
          }
        ]
      };

    self.ui = webix.ui(navToolbarAuth, self.find('#webix-nav-container'));
    return;
  } else {
    console.log('will it render the navbar?');
    self.ui = webix.ui(navToolbar, self.find('#webix-nav-container'));
  }
}