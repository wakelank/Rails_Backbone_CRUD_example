var Beerapp = Beerapp || { Models:{}, Collections:{}, Views:{}, }

Beerapp.Views.BeerView = Backbone.View.extend({
  tagname: 'li',
  template: _.template($('.beer-template').html()), 
  editFormTemplate: _.template($('.edit-form-template')),
  initialize: function() {
    this.listenTo(this.model, 'change', this.render);
    this.listenTo(this.model, 'destroy', this.remove);
  }
  // render: function(){
  //   this.$el.html(this.template( this.model.attributes ));
  //   return this;
  // },
  // events: {
  //   'click [data-action="destroy"]'   : 'destroyBeer',
  //   'click [data-action="edit"]'      : 'renderEditForm',      
  // },
  // destroyBeer: function(e){
  //   e.preventDefault();
  //   this.model.destroy();
  // },
  //renderEditForm: function(){
    //var that = this;
    //this.$el.html(this.editFormTemplate( this.model.attributes ));
    //this.$el.find('form').on('submit', function(e){
      // e.preventDefault();
      // var nameField = that.$el.find('input');
      // newName = nameField.val();
      // nameField.val('');
      // that.model.set('name', newName);
      // that.model.save();
   // })
//

});