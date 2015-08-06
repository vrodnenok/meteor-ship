/**
 * Created by vr on 02/08/15.
 */

Meteor.startup(function(){
    Meteor.methods({
        getDistance: function(req){
            var d = findDistance(req.from, req.to);
            console.log(d.distances);
            return JSON.stringify(d.distances);
        }
    });
});

findDistance = function(port1, port2){
    console.log(port1, port2);
    return Distances.findOne( { port1: parseInt(port2), port2: parseInt(port1)}) ||
           Distances.findOne( { port1: parseInt(port1), port2: parseInt(port2)});
};
