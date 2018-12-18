json.extract! @event, :id, :event_date, :event_name, :num_tickets_available, :start_datetime,
  :end_datetime, :address, :city, :state, :zip, :description, :private_event_yn

json.image_url url_for(@event.photo)
