var Beerapp = Beerapp || { Models: {}, Collection: {}, Views: {}, };

Beerapp.Collections.BeerCollection = Backbone.Collection.extend({
  model: Beerapp.Models.Beer,
  url:'/beers'
});