/*global Sites, Backbone*/

Sites.Collections = Sites.Collections || {};

(function () {
    'use strict';

    Sites.Collections.Items = Backbone.PageableCollection.extend({

        model: Sites.Models.Item,

        mode: "client",

        state: {
        	pageSize: 10
        },

        comparator: function(item){
        	return new Date(item.get('Date')); 
        }

    });

})();
