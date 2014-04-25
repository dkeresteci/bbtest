/*global Sites, Backbone*/

Sites.Collections = Sites.Collections || {};

(function () {
    'use strict';

    Sites.Collections.Items = Backbone.Collection.extend({

        model: Sites.Models.Item,

        comparator: function(item){
        	return new Date(item.get('Date')); 
        }

    });

})();
