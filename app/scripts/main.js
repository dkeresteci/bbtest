/*global Sites, $*/


window.Sites = {
    Models: {},
    Collections: {},
    Views: {},
    Routers: {},
    init: function () {

      $.ajaxPrefilter( function( options, originalOptions, jqXHR ) {
         options.url = 'http://expresstestdk.herokuapp.com' + options.url;
      });

        var jqxhr = $.getJSON( "/items", function(data) {
                directory = new Sites.Views.Itemslist(data);
              });
              
        
        'use strict';
        console.log('Hello from Backbone!');
    }
};

$(document).ready(function () {
    'use strict';
    Sites.init();
});
