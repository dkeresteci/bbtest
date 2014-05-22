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

        events: {
        'click .newpage': 'getPage',

        },

        initialize: function () {
            var self = this;
            this.collection = new Sites.Collections.Items();
            this.collection.fetch({
                success: function(){
                    self.render();
                }
            });
            
            
        },

        render: function () {
            var self = this;
            $('#accordion').empty();
            _.each(this.collection.models, function(item){
                self.renderItem(item);
            }, this);

            this.setPagination(this.collection.state.currentPage);
            this.setTotals(this.collection.state.currentPage);

        },

        renderItem: function (item){
            var newitem = new Sites.Views.Item({
                model: item
            });

            $('#accordion').append(newitem.render().el);
        },

        nextPage: function(){
            this.collection.getNextPage();
            this.render();
        },

        prevPage: function(){
            this.collection.getPreviousPage();
            this.render();
        },

        getPage: function(e){
            var n = $(e.target).data('page');

            if(n == 'next'){ 
                this.nextPage();
            }else if (n == 'prev'){
                this.prevPage();
            }else{
                this.collection.getPage(n);
                this.render();
            }

            console.log("data of item: " + n)
        },

        setPagination: function(page){
            $('#currentpage').html(page);
            var pagemax = this.collection.state.totalPages;
            $('.newpage').each( function(){
               $(this).data('page') == page ? $(this).parent('li').addClass('active') : $(this).parent('li').removeClass('active'); 
            });

            page >= (pagemax -1) ? $( ".newpage" ).last().parent('li').addClass('disabled') : $( ".newpage" ).last().parent('li').removeClass('disabled');
            page == 1 ? $( ".newpage" ).first().parent('li').addClass('disabled') : $( ".newpage" ).first().parent('li').removeClass('disabled');

        },

        setTotals: function(page){
            var pagesize = this.collection.state.pageSize
            var last = page*pagesize;
            var first = last - pagesize + 1;
            $('#totals').html(
                first + ' to ' + last + ' of '  + this.collection.state.totalRecords
            );
        }

    });

})();
