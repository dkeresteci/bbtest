/*global Sites, Backbone*/

Sites.Models = Sites.Models || {};

(function () {
    'use strict';

    Sites.Models.Item = Backbone.Model.extend({

        // url: '',


        defaults: {

            "ID" : '',
            "Title" : '',
            "Date": '',
            "Location": '',
            "Geolocation": '',
            "Company": '',
            "Description": ''

        },

        initialize: function() {
          
        }


        // validate: function(attrs, options) {
        // },

        // parse: function(response, options)  {
        //     return response;
        // }
    });

})();
