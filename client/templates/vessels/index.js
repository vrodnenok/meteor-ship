Template.vesselsIndex.rendered = function(){

  var proxy = webix.proxy('meteor', Vessels);

  console.log(Meteor.user());

  var table = {
    view: 'datatable',
    id: 'dtable', select: true,
    editable: true, editaction: 'dblclick',
    columns:
      [
        {
          id: 'name', template:"<a href='vessels/#id#'>#name#</a>", fillspace: 1
        },
        {
          id: 'IMO', editor: 'text', fillspace: 1
        },
        {
          id: 'dwcc', hidden: true, fillspace: 1
        },
        {
          id: 'vesselsType', editor: 'richselect', options: vesselTypesWBX
        },
        {
          id: 'salary', editor: 'text', format:webix.i18n.priceFormat
        }
      ],
    selectCss: 'my-webix-hover',
    autoheight: true,
    // autowidth: true,
    url: proxy,
    save: proxy,
    resizeColumn: true
  };

  var toolbar = {
    view:"toolbar",
    elements:[
      { view:"label", label:"List of all vessels"},
      { view:"button", value:"Remove", width:100, click:function(){
        var id = $$("dtable").getSelectedId();
        if (id)
          $$("dtable").remove(id);
        else
          webix.message("Please select any row first");
      }}
    ]
  };

  this.ui = webix.ui({
    rows: [toolbar, table]
  }, this.find("#vessels_table"));

  Template.vesselsIndex.destroyed = function(){
    console.log('destroy');
		if (this.ui) this.ui.destructor();
	};
};

Template.vesselsIndex.helpers({
  vessels: function(){
    return Vessels.find().fetch();
  }
});
