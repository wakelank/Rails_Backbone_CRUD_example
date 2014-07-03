class BeersController < ApplicationController
 #  Prefix Verb   URI Pattern          Controller#Action
 # beers GET    /beers(.:format)     beers#index
 #       POST   /beers(.:format)     beers#create
 #  beer GET    /beers/:id(.:format) beers#show
 #       PATCH  /beers/:id(.:format) beers#update
 #       PUT    /beers/:id(.:format) beers#update
 #       DELETE /beers/:id(.:format) beers#destroy



  def index
    beer = Beer.all 
    render json: beers.to_json
  end

  def create
    beer = Beer.create(beer_params)
    render json: beer.to_json
  end

  def show
    beer = Beer.find(params[:id])
    render json: beer.to_json
  end

  def update
    beer = Beer.find(params[:id])
    beer.update(beer_params)
    render json: beer.to_json
  end

  def destroy
    beer = Beer.find(params[:id])
    beer.destroy
    render json: beer.to_json
  end
  


end
