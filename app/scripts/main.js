/*global Sites, $*/


window.Sites = {
    Models: {},
    Collections: {},
    Views: {},
    Routers: {},
    init: function () {

        directory = new Sites.Views.Itemslist(directoryData);
        'use strict';
        console.log('Hello from Backbone!');
    }
};

$(document).ready(function () {
    'use strict';
    Sites.init();
});
