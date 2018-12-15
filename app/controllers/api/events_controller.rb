class Api::EventsController < ApplicationController

  # See https://github.com/appacademy/curriculum/blob/a3e50b640d78db6ce3e7cb5fd6f592567fe5b440/react/projects/bench_bnb/solution/app/controllers/api/benches_controller.rb
  #  for better index controller

  def index
    @events = Event.all

    if @events
      render :index
    else
      render json: { errors: @events.errors.full_messages }, status: 422
    end
  end

  def show
    @event = Event.find_by(id: params[:id])

    if @event
      render :show
    else
      render json: { errors: @event.errors.full_messages }, status: 422
    end
  end

  def new
    @event = Event.new
    render :show
  end

  def create
    # debugger
    @event = Event.new(event_params)

    if @event.save
      render "/api/events/show"
      # redirect_to event_url(@event)
    else
      debugger
      render json: { errors: @event.errors.full_messages }, status: 422
    end
  end

  # def edit
  #   @event = Event.find(params[:id])
  #   render :show
  # end
  #
  # def update
  #   @event = Event.find(params[:id])
  #
  #   if @event.update(event_params)
  #     redirect_to event_url(@event)
  #   else
  #     render json: { errors: @event.errors.full_messages }, status: 422
  #   end
  # end
  #
  # def destroy
  #   @event = Event.find(params[:id])
  #   @event.destroy
  #   redirect_to event_url(@event)
  # end

  private

  def event_params
    params.require(:event).permit(:event_date, :event_name, :num_tickets_available, :start_datetime, :end_datetime,
      :address, :city, :state, :zip, :description, :image_url, :private_event_yn)
  end
end
