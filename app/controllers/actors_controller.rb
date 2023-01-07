class ActorsController < ApplicationController

  # GET /movies/new
  def new
    @actor = Actor.new
  end
end
