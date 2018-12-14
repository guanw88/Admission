class Api::EventsController < ApplicationController
  def index
    @events = Event.all

    if @events
      render :index
    else
      render json: { errors: @events.errors.full_messages }, status: 422
    end
  end

  # private
  # def event_params
  #   params.require(:user).permit(:username, :password, :email, :first_name, :last_name)
  # end
end
