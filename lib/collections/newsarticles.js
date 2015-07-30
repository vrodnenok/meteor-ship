NewsArticles = new Mongo.Collection('newsarticles');

console.log("NewsArticles ran");

NewsArticles.all = function(){
  return NewsArticles.find().fetch();
};

NewsArticles.allow({
  update : function(userid, article){
    return isAdmin();
  },
  insert : function(userid, article){
    return isAdmin();
  },
  remove : function(userid, article){
    return isAdmin();
  }
});
