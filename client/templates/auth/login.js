/**
 * Created by vr on 06/08/15.
 */

Template.loginIndex.rendered = function() {

  var self = this;

  var loginForm = {
    view: 'form',
    id: 'loginForm',
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
        template: 'Please fill in login form'
      },
      {
        view: 'text',
        name: 'username',
        label: 'Login or email',
      },
      {
        view: 'text',
        name: 'password',
        type: 'password',
        label: 'Password'
      },
      {
        view: 'button',
        id: 'submit-button',
        value: 'Submit',
        click: function () {
          var form = this.getParentView();
            if (form.validate()) {
              var creds = $$('loginForm').getValues();
              Meteor.loginWithPassword(creds.username, creds.password, function (err) {
                if (err) {
                  return sAlert.error(err.reason);
                }
                Router.go('/');
                location.reload();
              });
            } else {
              sAlert.warnng('Form data is invalid!');
            }
          }
      }
    ]
  };


  self.ui = webix.ui({ cols: [{type: 'view'},{rows: [{type: 'view', autoheight: true}, loginForm]},
    {type: 'view'}]}, self.find('#login-container'));

};