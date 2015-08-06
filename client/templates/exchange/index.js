Template.exchangeIndex.rendered = function(){

  self = this;

  var toolbar = {
    view: 'toolbar',
    elements: [
      {view: 'label', label: 'Currency exchange rates manager/calculator'}
    ]
  };

  var currencyTable = {
    view: 'datatable',
    id: 'cetable', select: true,
    columns:
      [
        {
          id: 'currency', fillspace: 1, header: ['Currency code', {content: 'textFilter', colspan: 2}]
        },
        {
          id: 'rate', fillspace: 1, header: 'Current rate'
        }
      ],
    hover: true,
    autoheight: true,
    data: exchangeRatesTable,
    pager: {
      template:"{common.first()} {common.prev()} {common.next()} {common.last()}",
      container: 'paging_here'
    },
    scroll: false,
    resizeColumn: true
  };

  var currencyToolbar = {
    view: 'toolbar',
    elements: [
        {view: 'label', label: 'Current exchange rates at Forex'},
        {view: 'button', value: 'Refresh', width: 100, click: function(){
          console.log(exchangeRatesTable);
          $$('cetable').clearAll();
          $$('cetable').parse(exchangeRatesTable);
        }}
    ]
  };

  var currencyForm = {
  };

  self.ui = webix.ui({rows: [toolbar, 
    {cols : [ {rows: [currencyToolbar, currencyTable], gravity: 0.3}, currencyForm]}
  ]}, self.find('#exchange-view'));

};
