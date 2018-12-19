if @event.photo.attached?
  json.extract! @event, :id, :event_date, :event_name, :num_tickets_available, :start_datetime,
    :end_datetime, :address, :city, :state, :zip, :description, :private_event_yn,
    :organizer_id
  json.image_url url_for(@event.photo)
else
  json.extract! @event, :id, :event_date, :event_name, :num_tickets_available, :start_datetime,
    :end_datetime, :address, :city, :state, :zip, :description, :image_url, :private_event_yn,
    :organizer_id
end
