NewsArticles = new Mongo.Collection('newsarticles');

console.log("NewsArticles ran");

NewsArticles.all = function(){
  return NewsArticles.find().fetch();
};
