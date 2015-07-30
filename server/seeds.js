var vesselsSeed = [{
  "id": 1,
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
}]

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
