/**
 * Created by vr on 28/07/15.
 */

Template.homeIndex.helpers({
    newsarticles: function(){
        return NewsArticles.all();
    }
});
