var Beerapp = Beerapp || { Models: {}, Collections:{}, Views:{},}
Beerapp.Views.BeerCollectionView = Backbone.View.extend({
  initialize: function(){
    this.listenTo(this.collection, 'add', this.render);
  },
  // render: function(){
  //   var that = this;
  //   this.$el.empty()
  //   _.each(this.collection.models, function(beer){
  //     var beerView = new Beerapp.Views.BeerView({model: beer});
  //     that.$el.prepend(beerView.render().el);
  //   })
  // }
});