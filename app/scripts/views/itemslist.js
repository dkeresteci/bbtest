/*global Sites, Backbone, JST*/

Sites.Views = Sites.Views || {};

(function () {
    'use strict';

    Sites.Views.Itemslist = Backbone.View.extend({

        el: '#wrapper',

        // template: JST['app/scripts/templates/itemslist.ejs'],

        tagName: 'div',

        id: '',

        className: '',

        events: {},

        initialize: function (data) {

            this.collection = new Sites.Collections.Items(data);
            console.log(this.collection);
            this.render();
        },

        render: function () {
            var self = this;
            $('#accordion').empty();
            console.log(this.collection.models);
            _.each(this.collection.models, function(item){
                self.renderItem(item);
            }, this);

        },

        renderItem: function (item){
            var newitem = new Sites.Views.Item({
                model: item
            });

            $('#accordion').append(newitem.render().el);
        }

    });

})();
