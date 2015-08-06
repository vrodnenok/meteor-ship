if(Meteor.isServer) {
  Meteor.startup(function(){
    Meteor.methods({
      getCurrentExchangeRates: function(){
        return HTTP.get('https://openexchangerates.org/api/latest.json?app_id=35b43516e1da4508844582400b32da2b');
      }
    });
  });
}

