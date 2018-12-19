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
    @event = Event.new(event_params)
    unless @event.photo.attached?
      file = File.open('app/assets/images/event_placeholder.png')
      @event.photo.attach(io: file, filename: 'event_placeholder.png')
    end
    if @event.save
      render "/api/events/show"
    else
      render json: { errors: @event.errors.full_messages }, status: 422
    end
  end

  def edit
    @event = Event.find(params[:id])
    render :show
  end

  def update
    @event = Event.find(params[:id])
    if @event.update(event_params)
      render :show
    else
      render json: { errors: @event.errors.full_messages }, status: 422
    end
  end

  def destroy
    @event = Event.find(params[:id])
    @event.destroy
  end

  private

  def event_params
    params.require(:event).permit(:event_date, :event_name, :num_tickets_available, :start_datetime, :end_datetime,
      :address, :city, :state, :zip, :description, :photo, :private_event_yn, :organizer_id)
  end
end
