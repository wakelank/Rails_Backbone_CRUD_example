var Beerapp = Beerapp || { Models: {}, Collections: {}, Views: {}, }

Beerapp.initialize = function(){

  var collection = new Beerapp.Collections.BeerCollection();

  var collectionView = new Beerapp.Views.BeerCollectionView({
    collection: collection,
    el: $('.beer-list')
  });

  collection.fetch();

  $('.beers').find('form').on('submit', function(e){
      e.preventDefault();
      var beerName = $('input').val();
      $('input'.val(''));
      collection.create({name: beerName })
  });

}

$(function(){
  $('body').hide();
  Beerapp.initialize();
  $('body').fadeIn(1500);
});