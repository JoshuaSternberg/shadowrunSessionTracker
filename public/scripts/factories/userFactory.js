myApp.factory('UserFactory', ['$http', function($http) {

    var preMadeNpcsList = [];
    var sessionList = [];

    //The call to get the pre-made npcs from the similarly named collection from the database
    var getPreMadeNpcs = function() {
        var promise = $http.get('/preMadeNpcs').then(function(response) {
            preMadeNpcsList = response.data;
        });
        return promise;
    };

    //save the npc to the database
    var saveNpc = function(npc) {
        $http.post('/preMadeNpcs', npc).then(function(response) {
        });
    };

    //Save the current session to the database
    var saveSession = function(custom, preMade){
        var sessionArray = custom.concat(preMade);
        var sessionObject = {snapshot_name: 'test', snapshot: sessionArray};
        $http.post('/snapshot', sessionObject);
    }

    //get the list of sessions based on the logged in user to populate the dropdown
    var retrieveSessions = function(id){
        var promise = $http.get('/snapshot').then(function(response) {
            sessionList = response.data;
        });
        return promise;
    }


    //public exposed functions
    var publicFunctions = {
        //Get the entire database list of npcs
        factoryRetrievePreMadeNpcs: function() {
            return getPreMadeNpcs();
        },
        //expose the preMadeNpcList to the rest of the program
        factoryPreMadeNpcsList: function() {
            return preMadeNpcsList;
        },
        //call the function to save a new npc to the database
        factorySaveNpc: function(npc) {
            return saveNpc(npc);
        },
        factorySaveSession: function (custom, preMade){
            return saveSession (custom, preMade);
        },
        factoryRetrieveSessions: function (){
            return retrieveSessions();
        },
        factoryRetrieveSessionsList: function(){
            return sessionList;
        }
    };

    return publicFunctions;

}]);