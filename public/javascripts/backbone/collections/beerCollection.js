var Beerapp = Beerapp || { Models: {}, Collection:{}, Views{}, };

Beerapp.Collections.BeerColletion = Backbone.Collection.extend({
  model: Beerapp.Models.Beer,
  url:'/beers'
});