/**
 * Created by vr on 06/08/15.
 */

Template.registerIndex.rendered = function() {

  var self = this;

  var loginForm = {
    view: 'form',
    id: 'registerForm',
    width: 300,
    rules: {
      'username': webix.rules.isNotEmpty,
      'password': webix.rules.isNotEmpty
    },
    elementsConfig: {
      labelPosition: 'top'
    },
    align: 'center',
    elements: [
      {
        type: 'header',
        template: 'Please fill in register form'
      },
      {
        view: 'text',
        name: 'username',
        label: 'Email',
      },
      {
        view: 'text',
        name: 'password',
        type: 'password',
        label: 'Password'
      },
      {
        view: 'button',
        value: 'Submit',
        click: function () {
          var form = this.getParentView();
          if (form.validate()) {
            var creds = $$('registerForm').getValues();
            Accounts.createUser(creds, function (err) {
              if (err) {
                return webix.message({type: 'error', text: err.reason});
              }
              Meteor.loginWithPassword(creds, function(err){
                Router.go('/');
                location.reload();
              });
            });
          } else {
            webix.message({type: 'error', text: 'Form data is invalid!'});
          }
        }
      }
    ]
  };


  self.ui = webix.ui({ cols: [{type: 'view'},{rows: [{type: 'view', autoheight: true}, loginForm]},
    {type: 'view'}]}, self.find('#register-container'));

};