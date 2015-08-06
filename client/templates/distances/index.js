/**
 * Created by vr on 02/08/15.
 */

Template.distancesIndex.rendered = function(){

  self = this;

  var getCountryPorts = function(countryId) {
    Meteor.call('getPortsOfCountry', countryId);
  };

  var req = {};

  var portsProxy = webix.proxy('meteor', Ports);
  var countries = Countries.find().fetch();
  var countriesOptions = [];

  _.each(countries, function(i){
    var c = {};
    c.value = i.name;
    c.id = i.id;
    countriesOptions.push(c);
  });

  var distancesToolbar = {
    view:"toolbar",
    fillspace: 1,
    elements:[
      { view:"label", label:"Distance finder page"}
    ]
  };

  var selectFromCountry = {
    view: 'richselect',
    id: 'select_from_country',
    value: 'Select country',
    labelPosition: 'top',
    label: 'Select country and port from...',
    on: {
      onChange: function(newv, oldv){
        console.log(newv);
        countryId = countriesOptions[newv-1].id;
        console.log(countryId);
        $$('list_from_port').clearAll();
        $$('list_from_port').parse(Ports.find({countryId: countryId}).fetch());
      }
    },
    options: countriesOptions
  };

  var selectToCountry = {
    view: 'richselect',
    id: 'select_to_country',
    labelPosition: 'top',
    label: 'Select country and port to...',
    on: {
      onChange: function(newv, oldv){
        console.log(newv);
        countryId = countriesOptions[newv-1].id;
        console.log(countryId);
        $$('list_to_port').clearAll();
        $$('list_to_port').parse(Ports.find({countryId: countryId}).fetch());
      }
    },
    options: countriesOptions
  };

  var resultHeader = {
      view:"button", value:"...and calculate!", click:function(){
        if ((!req.to) || (!req.from)){
          webix.message('Please select both ports!');
          return;
        } else {
          Meteor.call('getDistance', req, function(err, res){
            if(err) throw (err);
            console.log(res);
            var res = JSON.parse(res);
            console.log(res.length);
            var html = '<ul class="webix_list">';
            if(res.length === 1){
              html += '<div class = "webix_list_item"> Direct distance: ' + res[0].distance + ' nautical miles </div>';
            } else {
              _.each(res, function(d){
                html += '<div class = "webix_list_item" > via ' + d.canal + ' : ' + d.distance + ' nm</div>'
              });
            }
            html += '</ul>';
            $('#results-container').html(html);
            console.log(res);
          })
        };

      }
  };

  var portsToolbar = {
    view: 'toolbar',
    elements: [
      { view:"label", label:"You can looks for ports coordinates in this table..."}
    ]
  };

  var resultBody = {
    view: 'template',
    template: '<h3> Results </h3> <br/> <div class = "well" id = "results-container"></div>',
    id: 'result-body',
    scroll: true
  };

  var selectFromPort = {
    view: 'list',
    id: 'list_from_port',
    label: 'From port',
    template: '#name#',
    height: 250,
    select: true,
    on: {
      onItemClick: function(newv, oldv){
        req.from = newv;
      }
    }, data: ''
  };

  var selectToPort = {
    view: 'list',
    id: 'list_to_port',
    label: 'To',
    template: '#name#',
    height: 250,
    select: true,
    on: {
      onItemClick: function(newv, oldv){
        req.to = newv;
      }
    },
    data: ''
  };


  var distanceForm = {
    view: 'form'
  };

  var portsTable = {
    view: 'datatable',
    id: 'ports-table',
    editable: true, editaction: 'dblclick',
    columns:
      [
        {
          id: 'name', editor: 'text', fillspace: 1, header: ['Port name', {content: 'textFilter', colspan: 1}]
        },
        {
          id: 'country', editor: 'text', fillspace: 1, header: ['Country', {content: 'textFilter', colspan: 1}]
        },
        {
          id: 'lat', fillspace: 1, header: ['Latitude', {content: 'textFilter', colspan: 1}]
        },
        {
          id: 'long', editor: 'text', fillspace:1, header: ['Longtitude', {content: 'textFilter', colspan: 1}]
        }
      ],
    hover: 'my-webix-hover',
    selectCss: 'my-webix-hover',
    autoheight: true,
    // autowidth: true,
    pager: {
      template:"{common.first()} {common.prev()} {common.next()} {common.last()}",
      container: 'paging-ports-table'
    },
    url: portsProxy,
    save: portsProxy,
    resizeColumn: true
  };

  self.ui = webix.ui({rows: [distancesToolbar, {
    cols: [selectFromCountry, selectToCountry, resultHeader]
  }, {
    cols: [selectFromPort, selectToPort, resultBody]
  }, portsToolbar, portsTable]}, self.find('#distances-view'));

//  $$('list_from_port').bind($$('select_from_country'), function(obj, filter){
//    return obj.countryId === filter;
//  });

//  $$('list_to_port').bind($$('select_to_country'), function(obj, filter){
//    return obj.countryId === filter;
//  });

};