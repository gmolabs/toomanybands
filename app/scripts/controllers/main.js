'use strict';

nyApp = angular.module('toomanybandsApp')
  .controller('MainCtrl', function ($scope) {
    $scope.list = {
    	"dates" : [
    		{
    			"date" : "1288321623009",
		    	"shows" : [
			    	{
			    		"time" : "20:00",
			    		"venu" : "cafe du nord",
			    		"bands": ["erors", "deciet", "dick friction"]
			    	},
			    	{
			    		"time" : "11:00",
			    		"venu" : "life changing ministries",
			    		"bands": ["sutek hexen", "grails", "secret name name"]
			    	}
			    ]
			},
			{
    			"date" : "1238321623009",
		    	"shows" : [
			    	{
			    		"time" : "13:00",
			    		"venu" : "cafe du nord",
			    		"bands": ["yriliad", "bilal"]
			    	},
			    	{
			    		"time" : "11:00",
			    		"venu" : "slims",
			    		"bands": ["sutek hexen", "bilal", "fslux"]
			    	}
			    ]
			},
			{
    			"date" : "1284321623009",
		    	"shows" : [
			    	{
			    		"time" : "19:00",
			    		"venu" : "makeout room",
			    		"bands": ["erors", "deciet", "dick friction"]
			    	},
			    	{
			    		"time" : "11:30",
			    		"venu" : "el rio",
			    		"bands": ["sutek hexen", "grails", "secret name name"]
			    	}
			    ]
			},
		]
	}
  }).
  filter('capitalize', function() {
    return function(input, scope) {
        return input.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});   
    }
});;