var countriesList = [
  {"id" : "0001", "name": "Albania" },
  {"id" : "0002", "name": "Algeria" },
  {"id" : "0004", "name": "Angola" },
  {"id" : "0005", "name": "Antigua" },
  {"id" : "0006", "name": "Argentina" },
  {"id" : "0007", "name": "Aruba" },
  {"id" : "0008", "name": "Ascension Island" },
  {"id" : "0009", "name": "Australia" },
  {"id" : "0011", "name": "Azores" },
  {"id" : "0012", "name": "Bahamas" },
  {"id" : "0013", "name": "Bahrain" },
  {"id" : "0014", "name": "Bangladesh" },
  {"id" : "0015", "name": "Barbados" },
  {"id" : "0016", "name": "Belgium" },
  {"id" : "0017", "name": "Belize" },
  {"id" : "0018", "name": "Benin" },
  {"id" : "0019", "name": "Bermuda" },
  {"id" : "0020", "name": "Brazil" },
  {"id" : "0021", "name": "Brunei Darussalam" },
  {"id" : "0022", "name": "Bulgaria" },
  {"id" : "0024", "name": "Cameroon Republic" },
  {"id" : "0025", "name": "Canada" },
  {"id" : "0026", "name": "Canary Islands" },
  {"id" : "0027", "name": "Cape Verde Islands" },
  {"id" : "0028", "name": "Cayman Islands" },
  {"id" : "0030", "name": "Chile" },
  {"id" : "0031", "name": "China" },
  {"id" : "0032", "name": "Christmas Island" },
  {"id" : "0033", "name": "Cocos Islands" },
  {"id" : "0034", "name": "Colombia" },
  {"id" : "0035", "name": "Comoros" },
  {"id" : "0036", "name": "Congo" },
  {"id" : "0037", "name": "Congo (Democratic Republic)" },
  {"id" : "0039", "name": "Costa Rica" },
  {"id" : "0040", "name": "Croatia" },
  {"id" : "0041", "name": "Cuba" },
  {"id" : "0042", "name": "Cyprus" },
  {"id" : "0043", "name": "Denmark" },
  {"id" : "0044", "name": "Djibouti" },
  {"id" : "0045", "name": "Dominica" },
  {"id" : "0046", "name": "Dominican Republic" },
  {"id" : "0047", "name": "Ecuador" },
  {"id" : "0048", "name": "Egypt" },
  {"id" : "0049", "name": "El Salvador" },
  {"id" : "0050", "name": "Equatorial Guinea" },
  {"id" : "0051", "name": "Eritrea" },
  {"id" : "0052", "name": "Estonia" },
  {"id" : "0053", "name": "Falkland Islands" },
  {"id" : "0054", "name": "Faroes" },
  {"id" : "0055", "name": "Fiji" },
  {"id" : "0056", "name": "Finland" },
  {"id" : "0057", "name": "France" },
  {"id" : "0059", "name": "French Polynesia" },
  {"id" : "0060", "name": "Gabon" },
  {"id" : "0061", "name": "Gambia" },
  {"id" : "0062", "name": "Georgia" },
  {"id" : "0063", "name": "Germany" },
  {"id" : "0064", "name": "Ghana" },
  {"id" : "0065", "name": "Gibraltar" },
  {"id" : "0066", "name": "Greece" },
  {"id" : "0067", "name": "Greenland" },
  {"id" : "0068", "name": "Grenada" },
  {"id" : "0069", "name": "Guadeloupe" },
  {"id" : "0070", "name": "Guam" },
  {"id" : "0071", "name": "Guatemala" },
  {"id" : "0072", "name": "Guinea" },
  {"id" : "0073", "name": "Guinea-Bissau" },
  {"id" : "0074", "name": "Guyana" },
  {"id" : "0075", "name": "Haiti" },
  {"id" : "0076", "name": "Honduras" },
  {"id" : "0077", "name": "Hong Kong" },
  {"id" : "0078", "name": "Iceland" },
  {"id" : "0079", "name": "India" },
  {"id" : "0080", "name": "Indonesia" },
  {"id" : "0081", "name": "Iran" },
  {"id" : "0082", "name": "Iraq" },
  {"id" : "0083", "name": "Ireland" },
  {"id" : "0084", "name": "Isle of Man" },
  {"id" : "0085", "name": "Israel" },
  {"id" : "0086", "name": "Italy" },
  {"id" : "0087", "name": "Ivory Coast" },
  {"id" : "0088", "name": "Jamaica" },
  {"id" : "0089", "name": "Japan" },
  {"id" : "0090", "name": "Jordan" },
  {"id" : "0092", "name": "Kenya" },
  {"id" : "0093", "name": "Kiribati" },
  {"id" : "0094", "name": "Korea (North)" },
  {"id" : "0095", "name": "Korea (South)" },
  {"id" : "0096", "name": "Kuwait" },
  {"id" : "0097", "name": "Latvia" },
  {"id" : "0098", "name": "Lebanon" },
  {"id" : "0099", "name": "Liberia" },
  {"id" : "0100", "name": "Libya" },
  {"id" : "0101", "name": "Lithuania" },
  {"id" : "0103", "name": "Madagascar" },
  {"id" : "0104", "name": "Madeira" },
  {"id" : "0105", "name": "Malaysia" },
  {"id" : "0107", "name": "Malta" },
  {"id" : "0109", "name": "Martinique" },
  {"id" : "0110", "name": "Mauritania" },
  {"id" : "0111", "name": "Mauritius" },
  {"id" : "0112", "name": "Mexico" },
  {"id" : "0113", "name": "Micronesia" },
  {"id" : "0114", "name": "Monaco" },
  {"id" : "0116", "name": "Morocco" },
  {"id" : "0117", "name": "Mozambique" },
  {"id" : "0118", "name": "Myanmar" },
  {"id" : "0119", "name": "Namibia" },
  {"id" : "0120", "name": "Nauru" },
  {"id" : "0121", "name": "Netherlands" },
  {"id" : "0122", "name": "Netherlands Antilles" },
  {"id" : "0123", "name": "New Caledonia" },
  {"id" : "0124", "name": "New Zealand" },
  {"id" : "0125", "name": "Nicaragua" },
  {"id" : "0126", "name": "Nigeria" },
  {"id" : "0127", "name": "Norway" },
  {"id" : "0128", "name": "Oman" },
  {"id" : "0129", "name": "Pakistan" },
  {"id" : "0130", "name": "Panama" },
  {"id" : "0131", "name": "Papua New Guinea" },
  {"id" : "0132", "name": "Peru" },
  {"id" : "0133", "name": "Philippines" },
  {"id" : "0134", "name": "Poland" },
  {"id" : "0135", "name": "Portugal" },
  {"id" : "0136", "name": "Puerto Rico" },
  {"id" : "0137", "name": "Qatar" },
  {"id" : "0138", "name": "Reunion" },
  {"id" : "0139", "name": "Romania" },
  {"id" : "0140", "name": "Russia" },
  {"id" : "0141", "name": "Samoa" },
  {"id" : "0142", "name": "Sao Tome et Principe" },
  {"id" : "0143", "name": "Saudi Arabia" },
  {"id" : "0144", "name": "Senegal" },
  {"id" : "0145", "name": "Serbia & Montenegro" },
  {"id" : "0146", "name": "Seychelles" },
  {"id" : "0147", "name": "Sierra Leone" },
  {"id" : "0148", "name": "Singapore" },
  {"id" : "0149", "name": "Slovenia" },
  {"id" : "0150", "name": "Solomon Islands" },
  {"id" : "0151", "name": "Somalia" },
  {"id" : "0152", "name": "South Africa" },
  {"id" : "0154", "name": "Spain" },
  {"id" : "0155", "name": "Sri Lanka" },
  {"id" : "0156", "name": "St Helena Island" },
  {"id" : "0157", "name": "St Kitts & Nevis" },
  {"id" : "0158", "name": "St Lucia" },
  {"id" : "0160", "name": "St Vincent" },
  {"id" : "0161", "name": "Sudan" },
  {"id" : "0162", "name": "Suriname" },
  {"id" : "0163", "name": "Sweden" },
  {"id" : "0165", "name": "Syria" },
  {"id" : "0166", "name": "Taiwan" },
  {"id" : "0167", "name": "Tanzania" },
  {"id" : "0168", "name": "Thailand" },
  {"id" : "0170", "name": "Togo" },
  {"id" : "0171", "name": "Tonga" },
  {"id" : "0172", "name": "Trinidad & Tobago" },
  {"id" : "0173", "name": "Tunisia" },
  {"id" : "0174", "name": "Turkey" },
  {"id" : "0178", "name": "Ukraine" },
  {"id" : "0179", "name": "United Arab Emirates" },
  {"id" : "0180", "name": "United Kingdom" },
  {"id" : "0181", "name": "United States" },
  {"id" : "0182", "name": "Uruguay" },
  {"id" : "0184", "name": "Venezuela" },
  {"id" : "0185", "name": "Vietnam" },
  {"id" : "0187", "name": "Virgin Islands (US)" },
  {"id" : "0189", "name": "Yemen" },
];

var countriesSeed = JSON.parse(Assets.getText('countries.json'));
// console.log(countries);


var vesselsSeed = [
  {
    "name": "Avior",
    "IMO": 1234567,
    "GRT": 2222,
    "NRT": 995,
    "built": 1972,
    "dwt": 3222,
    "dwcc": 3200,
    "volume": 4720,
    "speedBallastEco": 7,
    "speedBallastNormal": 7,
    "speedBallastMax": 7,
    "speedLoadedEco": 5,
    "speedLoadedNormal": 5,
    "speedLoadedMax": 5,
    "vesselsType": "General cargo",
    "lightFuelTankCapacity": 100,
    "heavyFuelTankCapacity": 0,
    "lightFuelConsumptionIdle": 1,
    "lightFuelConsumptionUnderwayEco": 3,
    "lightFuelConsumptionUnderwayNormal": 3,
    "lightFuelConsumptionUnderwayMax": 3,
    "lightFuelConsumptionInPortWithCranes": 0,
    "luboilConsumptionIdle": 0.005,
    "luboilConsumptionUnderway": 0.025,
    "salary": 25700,
    "hire": 2000,
    "pandi": 25000.3
  },
  {
    "name": "Altair",
    "IMO": 2234567,
    "GRT": 2222,
    "NRT": 995,
    "built": 1972,
    "dwt": 3222,
    "dwcc": 3200,
    "volume": 4720,
    "speedBallastEco": 7,
    "speedBallastNormal": 7,
    "speedBallastMax": 7,
    "speedLoadedEco": 5,
    "speedLoadedNormal": 5,
    "speedLoadedMax": 5,
    "vesselsType": "General cargo",
    "lightFuelTankCapacity": 100,
    "heavyFuelTankCapacity": 0,
    "lightFuelConsumptionIdle": 1,
    "lightFuelConsumptionUnderwayEco": 3,
    "lightFuelConsumptionUnderwayNormal": 3,
    "lightFuelConsumptionUnderwayMax": 3,
    "lightFuelConsumptionInPortWithCranes": 0,
    "luboilConsumptionIdle": 0.005,
    "luboilConsumptionUnderway": 0.025,
    "salary": 25700,
    "hire": 2000,
    "pandi": 25000.3
  }
];

console.log(Countries.find().count());

if(Countries.find().count() === 0){
  var count = 0;
  _.each(countriesSeed, function(country){
    Countries.insert(country);
    var ports = JSON.parse(Assets.getText('ports/' + country.name + '.json'));
    _.each(ports, function(port){
      // var p = {};
      port.country = country.name;
      port.countryId = country.id;
      Ports.insert(port);
      count++;
    });
  });
  console.log('Total ports inserted: '+count);
}

if(Vessels.find().count() === 0){
  _.each(vesselsSeed, function(vessel){
    Vessels.insert(vessel);
  });
}

var newsArticlesSeeds = [
  {
    "title" : "News number one",
    "image" : "illudium-q36.jpg",
    "text": "At last, after two thousand years of research, the illudium Q-36 explosive space modulator is ready! Simply line up the trajectory, wait for planetary synchronization, make sure no rabbits are around - and kaboom! You *should* hear an earth-shattering kaboom.",
    "status" : "published",
    "published_at" : new Date(),
    "cost" : 2320,
    "author" : {
      "userId" : 1,
      "name" : "Victor Rodnenok"
    }
  },
  {
    "title" : "News number two",
    "image" : "illudium-q36.jpg",
    "text": "At last, after two thousand years of research, the illudium Q-36 explosive space modulator is ready! Simply line up the trajectory, wait for planetary synchronization, make sure no rabbits are around - and kaboom! You *should* hear an earth-shattering kaboom.",
    "status" : "published",
    "published_at" : new Date(),
    "cost" : 2320,
    "author" : {
      "userId" : 1,
      "name" : "Victor Rodnenok"
    }
  },
  {
    "title" : "Illudium Q-36 Explosive Space Modulator",
    "image" : "illudium-q36.jpg",
    "text": "At last, after two thousand years of research, the illudium Q-36 explosive space modulator is ready! Simply line up the trajectory, wait for planetary synchronization, make sure no rabbits are around - and kaboom! You *should* hear an earth-shattering kaboom.",
    "status" : "published",
    "published_at" : new Date(),
    "cost" : 2320,
    "author" : {
      "userId" : 1,
      "name" : "Victor Rodnenok"
    }
  },
  {
    "title" : "and somethng completely different",
    "image" : "illudium-q36.jpg",
    "text": "At last, after two thousand years of research, the illudium Q-36 explosive space modulator is ready! Simply line up the trajectory, wait for planetary synchronization, make sure no rabbits are around - and kaboom! You *should* hear an earth-shattering kaboom.",
    "status" : "published",
    "published_at" : new Date(),
    "cost" : 2320,
    "author" : {
      "userId" : 1,
      "name" : "Victor Rodnenok"
    }
  }
];

if(NewsArticles.find().count() === 0){
  _.each(newsArticlesSeeds, function(article){
    NewsArticles.insert(article);
    console.log("Inserted ", article.title);
  })
}

if(Meteor.users.find().count() === 0){
  var id = Accounts.createUser({
    username : "admin",
    email: "victor.r@ukr.net",
    password: "admin123",
    profile: { name: "Victor Rodnenok" },
    roles : []
});

  Roles.addUsersToRoles(id, ["admin"]);
  console.log("Added Admin user...");
}
