exchangeRates={};
exchangeRatesTable = [];

refreshExchangeRates = function() {
    Meteor.call('getCurrentExchangeRates', function(err, res){
    if (err) console.log(err);
    exchangeRates = res.data.rates;
      for (var key in exchangeRates) {
        var xr = {};
        xr.currency = key;
        xr.rate = exchangeRates[key];
        exchangeRatesTable.push(xr);
      }
      exchangeRatesTable = JSON.stringify(exchangeRatesTable);
      console.log("exchange rate are set");
  });
};

refreshExchangeRates();

exampleRatesTable =[
  {"currency":"AED","rate":3.672892},
  {"currency":"AFN","rate":61.28},
  {"currency":"ALL","rate":127.237401},
  {"currency":"AMD","rate":478.349999},
  {"currency":"ANG","rate":1.7887},
  {"currency":"AOA","rate":125.918167},
  {"currency":"ARS","rate":9.195067},
  {"currency":"AUD","rate":1.368974},
  {"currency":"AWG","rate":1.793333},
  {"currency":"AZN","rate":1.050825},
  {"currency":"BAM","rate":1.781019},
  {"currency":"BBD","rate":2},
  {"currency":"BDT","rate":77.89506},
  {"currency":"BGN","rate":1.780976},
  {"currency":"BHD","rate":0.377065},
  {"currency":"BIF","rate":1552.4},
  {"currency":"BMD","rate":1},
  {"currency":"BND","rate":1.374568},
  {"currency":"BOB","rate":6.92506},
  {"currency":"BRL","rate":3.414682},
  {"currency":"BSD","rate":1},
  {"currency":"BTC","rate":0.0035954436},
  {"currency":"BTN","rate":64.102634},
  {"currency":"BWP","rate":10.134688},
  {"currency":"BYR","rate":15253.75},
  {"currency":"BZD","rate":2.015859},
  {"currency":"CAD","rate":1.307754},
  {"currency":"CDF","rate":921.13175},
  {"currency":"CHF","rate":0.965829},
  {"currency":"CLF","rate":0.024602},
  {"currency":"CLP","rate":673.548699},
  {"currency":"CNY","rate":6.209112},
  {"currency":"COP","rate":2875.028333},
  {"currency":"CRC","rate":534.926005},
  {"currency":"CUC","rate":1},
  {"currency":"CUP","rate":1.000113},
  {"currency":"CVE","rate":100.32174336},
  {"currency":"CZK","rate":24.65046},
  {"currency":"DJF","rate":177.93375},
  {"currency":"DKK","rate":6.793432},
  {"currency":"DOP","rate":45.09277},
  {"currency":"DZD","rate":99.33302},
  {"currency":"EEK","rate":14.250275},
  {"currency":"EGP","rate":7.827952},
  {"currency":"ERN","rate":15.14},
  {"currency":"ETB","rate":20.83953},
  {"currency":"EUR","rate":0.909824},
  {"currency":"FJD","rate":2.132933},
  {"currency":"FKP","rate":0.640128},
  {"currency":"GBP","rate":0.640128},
  {"currency":"GEL","rate":2.272475},
  {"currency":"GGP","rate":0.640128},
  {"currency":"GHS","rate":3.779991},{"currency":"GIP","rate":0.640128},
  {"currency":"GMD","rate":39.4193},{"currency":"GNF","rate":7269.470098},
  {"currency":"GTQ","rate":7.659563},{"currency":"GYD","rate":206.281002},
  {"currency":"HKD","rate":7.752193},{"currency":"HNL","rate":21.94307},
  {"currency":"HRK","rate":6.912024},{"currency":"HTG","rate":56.237912},
  {"currency":"HUF","rate":279.913803},{"currency":"IDR","rate":13509.083333},
  {"currency":"ILS","rate":3.77537},
  {"currency":"IMP","rate":0.640128},{"currency":"INR","rate":64.02793},
  {"currency":"IQD","rate":1185.8525},{"currency":"IRR","rate":29596},{"currency":"ISK","rate":134.241999},{"currency":"JEP","rate":0.640128},{"currency":"JMD","rate":116.084931},{"currency":"JOD","rate":0.70839},{"currency":"JPY","rate":123.9165},{"currency":"KES","rate":102.3719},{"currency":"KGS","rate":61.031651},{"currency":"KHR","rate":4112.320098},{"currency":"KMF","rate":448.574454},{"currency":"KPW","rate":899.91},{"currency":"KRW","rate":1168.45999},{"currency":"KWD","rate":0.3028},{"currency":"KYD","rate":0.82597},{"currency":"KZT","rate":187.766199},{"currency":"LAK","rate":8204.730098},{"currency":"LBP","rate":1507.53165},{"currency":"LKR","rate":133.8465},{"currency":"LRD","rate":85.580002},{"currency":"LSL","rate":12.673838},{"currency":"LTL","rate":3.096483},{"currency":"LVL","rate":0.633571},{"currency":"LYD","rate":1.364438},{"currency":"MAD","rate":9.806048},{"currency":"MDL","rate":18.75528},{"currency":"MGA","rate":3398.31665},{"currency":"MKD","rate":56.09404},{"currency":"MMK","rate":1080.8919},{"currency":"MNT","rate":1979.833333},{"currency":"MOP","rate":7.992646},{"currency":"MRO","rate":325.4305},{"currency":"MTL","rate":0.683738},{"currency":"MUR","rate":35.417025},{"currency":"MVR","rate":15.294367},{"currency":"MWK","rate":462.281224},{"currency":"MXN","rate":16.12806},{"currency":"MYR","rate":3.827396},{"currency":"MZN","rate":38.1},{"currency":"NAD","rate":12.67507},{"currency":"NGN","rate":199.081799},{"currency":"NIO","rate":27.24831},{"currency":"NOK","rate":8.175429},{"currency":"NPR","rate":102.577461},{"currency":"NZD","rate":1.516834},{"currency":"OMR","rate":0.385062},{"currency":"PAB","rate":1},{"currency":"PEN","rate":3.1877},{"currency":"PGK","rate":2.7632},{"currency":"PHP","rate":45.70485},{"currency":"PKR","rate":101.7937},{"currency":"PLN","rate":3.77192},{"currency":"PYG","rate":5177.960078},{"currency":"QAR","rate":3.641687},{"currency":"RON","rate":4.013152},{"currency":"RSD","rate":109.37648},{"currency":"RUB","rate":61.46986},{"currency":"RWF","rate":726.665006},{"currency":"SAR","rate":3.75077},{"currency":"SBD","rate":7.974192},{"currency":"SCR","rate":13.07889},{"currency":"SDG","rate":6.018464},{"currency":"SEK","rate":8.621725},{"currency":"SGD","rate":1.372389},{"currency":"SHP","rate":0.640128},{"currency":"SLL","rate":3956.002442},{"currency":"SOS","rate":670.035503},{"currency":"SRD","rate":3.2875},{"currency":"STD","rate":22185.975},{"currency":"SVC","rate":8.758174},{"currency":"SYP","rate":188.811003},{"currency":"SZL","rate":12.67507},{"currency":"THB","rate":35.01636},{"currency":"TJS","rate":6.2602},{"currency":"TMT","rate":3.501367},{"currency":"TND","rate":1.968046},{"currency":"TOP","rate":2.220478},{"currency":"TRY","rate":2.772595},{"currency":"TTD","rate":6.35045},{"currency":"TWD","rate":31.57172},{"currency":"TZS","rate":2123.768301},{"currency":"UAH","rate":21.21895},{"currency":"UGX","rate":3427.791667},{"currency":"USD","rate":1},{"currency":"UYU","rate":28.47375},{"currency":"UZS","rate":2573.089966},
  {"currency":"VEF","rate":6.320435},{"currency":"VND","rate":21824.266667},
  {"currency":"VUV","rate":108.960001},{"currency":"WST","rate":2.550997},
  {"currency":"XAF","rate":597.758853},{"currency":"XAG","rate":0.0677275},
  {"currency":"XAU","rate":0.000912},{"currency":"XCD","rate":2.70102},
  {"currency":"XDR","rate":0.716725},{"currency":"XOF","rate":597.762853},
  {"currency":"XPD","rate":0.001638},{"currency":"XPF","rate":108.844388},
  {"currency":"XPT","rate":0.001016},{"currency":"YER","rate":215.148899},
  {"currency":"ZAR","rate":12.68586},{"currency":"ZMK","rate":5253.075255},
  {"currency":"ZMW","rate":7.670104},{"currency":"ZWL","rate":322.322775}];
