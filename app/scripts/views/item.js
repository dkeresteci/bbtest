/*global Sites, Backbone, JST*/

Sites.Views = Sites.Views || {};

(function () {
    'use strict';

    Sites.Views.Item = Backbone.View.extend({

        template: JST['app/scripts/templates/item.ejs'],

        tagName: 'div',

        id: '',

        className: 'panel panel-default',

        events: {},

        // initialize: function () {
        //     this.listenTo(this.model, 'change', this.render);
        // },

        render: function () {
            this.$el.html(this.template(this.model.toJSON()));
            return this;
        }

    });

})();
