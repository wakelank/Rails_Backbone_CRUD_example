var Beerapp = Beerapp || { Models:{}, Collections:{}, Views:{}, }

Beerapp.Views.BeerView = Backbone.View.extend({
  tagname: 'li',
  template: _.template($('.beer-template').html()), 
  render: function(){
    this.$el.html(this.template( this.model.attributes ));
    return this;
  }

});